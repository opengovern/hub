// @ts-nocheck
import { useParams } from "react-router-dom";
import KBadge from "../../../../../components/Badge";
import { Button } from "../../../../../components/Button";
import { Label } from "../../../../../components/Label";
import { Switch } from "../../../../../components/Switch";
import { Tooltip } from "../../../../../components/Tooltip";
import { ArrowAnimated } from "../../../../../components/ui/ArrowAnimated";
import { Faqs } from "../../../../../components/ui/Faqs";
import Testimonial from "../../../../../components/ui/Testimonial";
import { cx, getAPIUrl } from "../../../../../lib/utils";
import './style.css'

import {
  RiCheckLine,
  RiCloudLine,
  RiInformationLine,
  RiSubtractLine,
  RiUserLine,
} from "@remixicon/react";
import React, { Fragment, useEffect, useState } from "react";
import {
  Badge,
  Card,
  Col,
  Divider,
  Flex,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
} from "@tremor/react";
import axios from "axios";
import { BreadcrumbGroup, CopyToClipboard, KeyValuePairs } from "@cloudscape-design/components";
import dayjs, { Dayjs } from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import timezone from "dayjs/plugin/timezone";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { RenderObject } from "../../../../../components/Editor";

 const severityBadge = (severity: any) => {
  const style = {
    color: "#fff",
    borderRadius: "8px",
    width: "64px",
  };
  if (severity) {
    if (severity === "critical") {
      return (
        <Badge style={{ backgroundColor: "#6E120B", ...style }}>Critical</Badge>
      );
    }
    if (severity === "high") {
      return (
        <Badge style={{ backgroundColor: "#CA2B1D", ...style }}>High</Badge>
      );
    }
    if (severity === "medium") {
      return (
        <Badge style={{ backgroundColor: "#EE9235", ...style }}>Medium</Badge>
      );
    }
    if (severity === "low") {
      return (
        <Badge style={{ backgroundColor: "#F4C744", ...style }}>Low</Badge>
      );
    }
    if (severity === "none") {
      return (
        <Badge style={{ backgroundColor: "#9BA2AE", ...style }}>None</Badge>
      );
    }
    return (
      <Badge style={{ backgroundColor: "#54B584", ...style }}>Passed</Badge>
    );
  }
  return <Badge style={{ backgroundColor: "#9BA2AE", ...style }}>None</Badge>;
};
export const dateTimeDisplay = (
  date: Dayjs | Date | number | string | undefined
) => {
  // tz(dayjs.tz.guess())
  if ((typeof date).toString() === "Dayjs") {
    return (date as Dayjs).format("MMM DD, YYYY kk:mm UTC");
  }
  const regexp = /^\d+$/g;
  const isNumber = regexp.test(String(date));

  if (isNumber) {
    const v = parseInt(String(date), 10);
    const value = v > 17066236800 ? v / 1000 : v;
    return dayjs.unix(value).utc().format("MMM DD, YYYY kk:mm UTC");
  }
  if (date) {
    // @ts-ignore
    return dayjs.utc(date).format("MMM DD, YYYY kk:mm UTC");
  }
  return "Not available";
};

export default function ControlDetail() {
  const { id, framework_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [control, setControl] = useState<any>();
  
  const getDetail = () => {
    setLoading(true);
     const url = getAPIUrl();

    axios
      .get(`${url}/api/controls/${id}`)
      .then((res) => {
        if (res.data) {
          setControl(res.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };
  useEffect(() => {
    getDetail();
  }, [id]);
 const GetKeyValue = () => {
   const temp = [
     {
       label: "Control ID",
       value: (
         // @ts-ignore
         <CopyToClipboard
           className="text-white custom-copy mt-2"
           variant="inline"
           textToCopy={control?.id}
           copySuccessText="Control ID copied to clipboard"
         />
       ),
     },
     {
       label: "Severity",
       value: (
         // @ts-ignore
         <>{severityBadge(control?.severity)}</>
       ),
     },
   ];
 
   temp.push(
   
     {
       label: "Last updated",
       value: (
         // @ts-ignore
         <>{control?.updated_at.split(".")[0]}</>
       ),
     }
   );
   return temp;
   // @ts-ignore
 };
 const GetBreadcrumb = () => {
  const temp = [
    {
      text: "Frameworks",
      href: "/compliance/frameworks",
    },
    {
      text: framework_id,
      href: `${window.origin}/compliance/frameworks/${framework_id}`,
    },
    {
      text: id,
      href: id,
    },
  ];
  return temp
 }
  return (
    <div className="mx-auto pt-20 max-w-6xl">
      <div className="px-3">
        <div className="px-3">
          {control && control?.id && (
            <>
              <section
                aria-labelledby="pricing-title"
                className="animate-slide-up-fade mb-2"
                style={{
                  animationDuration: "600ms",
                  animationFillMode: "backwards",
                }}
              >
                <div></div>
                {/* <KBadge>Controls</KBadge> */}
                <BreadcrumbGroup
                  onClick={(event) => {
                    console.log(event);
                  }}
                  items={GetBreadcrumb()}
                  className="dark:text-white custom-bread mt-5"
                  ariaLabel="Breadcrumbs"
                />
                <h1 className="mt-2 mb-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-3xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-4xl dark:from-gray-50 dark:to-gray-300">
                  {control?.title}
                </h1>
                <p className="mt-2 mb-2  text-lg text-gray-700 dark:text-gray-400">
                  {control.description}
                </p>
              </section>
              <div>
                <Grid numItems={1} className=" w-full gap-4 mb-6 mt-4">
                  <Card className="h-fit ">
                    <KeyValuePairs
                      className=" text-white custom-key-value "
                      columns={3}
                      items={GetKeyValue()}
                    />
                  </Card>
                  <div
                    onClick={() => {
                      navigator.clipboard.writeText(
                        control?.query.replace(
                          "$IS_ALL_CONNECTIONS_QUERY",
                          "true"
                        ) || ""
                      );
                    }}
                    className=" cursor-pointer  h-full "
                  >
                    <RenderObject
                    height="350px"
                      obj={
                        control?.query.replace(
                          "$IS_ALL_CONNECTIONS_QUERY",
                          "true"
                        ) || ""
                      }
                    />
                  </div>
                 
                </Grid>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

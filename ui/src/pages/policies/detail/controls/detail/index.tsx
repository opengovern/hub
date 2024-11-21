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
import { cx } from "../../../../../lib/utils";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
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
import { CopyToClipboard, KeyValuePairs } from "@cloudscape-design/components";
import dayjs from "dayjs";


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
    return dayjs.utc(date).format("MMM DD, YYYY kk:mm UTC");
  }
  return "Not available";
};

export default function ControlDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [control, setControl] = useState<any>();
  
  const getDetail = () => {
    setLoading(true);
    axios
      .get(`http://localhost:8000/api/controls/${id}`)
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
         className="text-white mt-2"
           variant="inline"
           textToCopy={control?.id }
           copySuccessText="Control ID copied to clipboard"
         />
       ),
     },
   ];
 
   temp.push(
   
     {
       label: "Last updated",
       value: (
         // @ts-ignore
         <>{dateTimeDisplay(control?.updated_at)}</>
       ),
     }
   );
   return temp;
   // @ts-ignore
 };
  return (
    <div className="mx-auto pt-36 max-w-6xl">
      <div className="px-3">
        <div className="px-3">
          {control && control?.id && (
            <>
              <section
                aria-labelledby="pricing-title"
                className="animate-slide-up-fade"
                style={{
                  animationDuration: "600ms",
                  animationFillMode: "backwards",
                }}
              >
                <div></div>
                <KBadge>Controls</KBadge>

                <h1 className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300">
                  {control?.title}
                </h1>
                <p className="mt-6 max-w-2xl text-lg text-gray-700 dark:text-gray-400">
                  {control.description} {severityBadge(control?.severity)}
                </p>
              </section>
              <div>
                <Grid numItems={2} className=" w-full gap-4 mb-6 mt-4">
                  <Card className="h-fit min-h-[228px]">
                    <KeyValuePairs className=" text-white custom-key-value " columns={2} items={GetKeyValue()} />
                  </Card>
                  <Card className="max-h-[228px] overflow-scroll">
                    <Editor
                      onValueChange={() => 1}
                      highlight={(text) => {}}
                      //  highlight(text, languages.sql, "sql")
                      value={
                        control?.query.replace(
                          "$IS_ALL_CONNECTIONS_QUERY",
                          "true"
                        ) || ""
                      }
                      className="w-full bg-white dark:bg-gray-900 dark:text-gray-50 font-mono text-sm"
                      style={{
                        minHeight: "200px",
                      }}
                      placeholder="-- write your SQL query here"
                    />
                    <Divider />
                    <Flex>
                      <Flex className="gap-4">
                        <Button
                          variant="light"
                          icon={""}
                          iconPosition="left"
                          onClick={() =>
                            clipboardCopy(
                              controlDetail?.control?.query?.queryToExecute?.replace(
                                "$IS_ALL_CONNECTIONS_QUERY",
                                "true"
                              ) || ""
                            ).then(() =>
                              setNotification({
                                text: "Query copied to clipboard",
                                type: "info",
                              })
                            )
                          }
                        >
                          Copy
                        </Button>
                      </Flex>
                    </Flex>
                  </Card>
                </Grid>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

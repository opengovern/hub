import axios from "axios";
import { Badge } from "../../components/Badge";
import { Button } from "../../components/Button";
import { Label } from "../../components/Label";
import { Switch } from "../../components/Switch";
import { Tooltip } from "../../components/Tooltip";
import { ArrowAnimated } from "../../components/ui/ArrowAnimated";
import { Faqs } from "../../components/ui/Faqs";
import Testimonial from "../../components/ui/Testimonial";
import { cx, getIntegrationLogo } from "../../lib/utils";
import './style.css'
import {
  RiCheckLine,
  RiCloudLine,
  RiInformationLine,
  RiOpenSourceLine,
  RiSubtractLine,
  RiUserLine,
} from "@remixicon/react";
import React, { Fragment, useEffect, useState } from "react";

import Card from "../../components/Card";
import { useNavigate } from "react-router-dom";
import { Integration } from "./types";
import IntegrationCard from "../../components/IntegrationCard";
import Pagination from "../../components/Pagination";
import CustomPagination from "../../components/Pagination";
import { Box, Cards, Link, Modal, SpaceBetween } from "@cloudscape-design/components";
import Cal from "@calcom/embed-react";

export default function Schema() {
  const [integrations, setIntegrations] = useState<Integration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState(false);
  const [counts, setCounts] = useState<any>({});
  
  const getIntegrations = async () => {
    setLoading(true);
    axios
      .get(
        "https://raw.githubusercontent.com/opengovern/opengovernance/refs/heads/main/assets/integrations/integrations.json"
      )
      .then((res) => {
        if (res.data) {
            const arr =res.data
            // arr.sort(() => Math.random() - 0.5);
          setIntegrations(arr);
          arr?.map((integration:any) => {
            if(integration.schema_ids && integration.schema_ids.length>0 && integration.tier === "Community" && integration.SourceCode != ""){
               getMasterSchema(integration.schema_ids[0]);
            }
          });
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };
  const getMasterSchema = (id: string) => {
    setLoading(true);
    axios
      .get(
        `https://raw.githubusercontent.com/opengovern/hub/refs/heads/main/schemas/${id}.json`
      )
      .then((res) => {
        
        if (res.data) {
          // @ts-ignore
          setCounts((prev) => ({ ...prev, [id]: res.data.tables.length }));
         
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };
  useEffect(() => {
    getIntegrations();
  }, []);

  const GetTierIcon   =(tier: string) =>{
    if (tier === "Community") {
      return (
        <RiOpenSourceLine color="black"/>
      );
    } else if (tier === "Premium") {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.51047 11.5274L10.8163 19.5542C11.4507 20.2518 12.5482 20.2518 13.1825 19.5542L20.4894 11.5264C21.1004 10.8561 21.1704 9.85395 20.6596 9.10381L17.7174 4.78197C17.3526 4.24685 16.7455 3.92578 16.0975 3.92578H7.91111C7.26312 3.92578 6.65698 4.24588 6.29212 4.781L3.34117 9.10381C2.8294 9.85298 2.89946 10.8561 3.51047 11.5274Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.9989 3.92578L15.3659 9.10381C15.5643 9.85395 15.5371 10.8561 15.2997 11.5264L12.4597 19.5542C12.2135 20.2518 11.7864 20.2518 11.5402 19.5542L8.7002 11.5274C8.4628 10.8561 8.43556 9.85298 8.63501 9.10381L10.0059 3.92578"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.00781 10.2031H20.9908"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    } else if (tier === "Free") {
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Iconly/Two-tone/Unlock</title>
          <g
            id="Iconly/Two-tone/Unlock"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <g
              id="Unlock"
              transform="translate(4.500000, 2.500000)"
              stroke="#000000"
              stroke-width="1.5"
            >
              <path
                d="M11.9242,3.06203682 C11.3072,1.28003682 9.6142,0 7.6222,0 C5.1092,-0.00996317625 3.0632,2.01803682 3.0522,4.53103682 L3.0522,4.55103682 L3.0522,6.69803682"
                id="Stroke-1"
                opacity="0.400000006"
              ></path>
              <path
                d="M11.433,18.5004368 L3.792,18.5004368 C1.698,18.5004368 1.13686838e-13,16.8024368 1.13686838e-13,14.7074368 L1.13686838e-13,10.4194368 C1.13686838e-13,8.32443682 1.698,6.62643682 3.792,6.62643682 L11.433,6.62643682 C13.527,6.62643682 15.225,8.32443682 15.225,10.4194368 L15.225,14.7074368 C15.225,16.8024368 13.527,18.5004368 11.433,18.5004368 Z"
                id="Stroke-3"
              ></path>
              <line
                x1="7.6127"
                y1="11.4526368"
                x2="7.6127"
                y2="13.6746368"
                id="Stroke-5"
              ></line>
            </g>
          </g>
        </svg>
      );
    } else {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.51047 11.5274L10.8163 19.5542C11.4507 20.2518 12.5482 20.2518 13.1825 19.5542L20.4894 11.5264C21.1004 10.8561 21.1704 9.85395 20.6596 9.10381L17.7174 4.78197C17.3526 4.24685 16.7455 3.92578 16.0975 3.92578H7.91111C7.26312 3.92578 6.65698 4.24588 6.29212 4.781L3.34117 9.10381C2.8294 9.85298 2.89946 10.8561 3.51047 11.5274Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.9989 3.92578L15.3659 9.10381C15.5643 9.85395 15.5371 10.8561 15.2997 11.5264L12.4597 19.5542C12.2135 20.2518 11.7864 20.2518 11.5402 19.5542L8.7002 11.5274C8.4628 10.8561 8.43556 9.85298 8.63501 9.10381L10.0059 3.92578"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.00781 10.2031H20.9908"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    }

  }                                                                                                    
 

  return (
    <>
      <div className="mx-auto pt-20 max-w-6xl">
        <div className="px-3">
          <section
            aria-labelledby="pricing-title"
            className="animate-slide-up-fade"
            style={{
              animationDuration: "600ms",
              animationFillMode: "backwards",
            }}
          >
            {/* <Badge>SCHEMA</Badge> */}
            <h1 className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-4xl md:text-4xl dark:from-gray-50 dark:to-gray-300">
              Integrations {integrations && `(${integrations.length})`}
            </h1>
            <p className=" mb-2  text-lg text-gray-700 dark:text-gray-400">
              Use the Built-in Connectors.
            </p>
          </section>
          <div className="flex gap-3 flex-col mt-5">
            {/* {integrations &&
            integrations
              ?.slice(page * 10, (page + 1) * 10)
              ?.map((integration) => {
                return (
                  <>
                    <IntegrationCard
                      title={integration.name}
                      imageUri={`https://raw.githubusercontent.com/opengovern/website/main/connectors/icons/${integration?.Icon}`}
                      description={integration.Description}
                      onClick={() => {
                        navigate("/schema/" + integration.schema_ids[0]);
                      }}
                      tier={integration?.tier}
                    />
                  </>
                );
              })} */}
            <Cards
              ariaLabels={{
                itemSelectionLabel: (e, t) => `select ${t.name}`,
                selectionGroupLabel: "Item selection",
              }}
              onSelectionChange={({ detail }) => {
                const item = detail?.selectedItems[0];
                if (item.tier === "Community" && item?.SourceCode != "") {
                  navigate("/integrations/" + item.schema_id + "/schema");
                } else {
                  setOpen(true);
                }
                // setSelectedItems(detail?.selectedItems ?? []);
              }}
              selectedItems={[]}
              cardDefinition={{
                header: (item) => (
                  <Link
                    className="w-100"
                    onClick={() => {
                      if (item.tier === "Community") {
                        navigate("/integrations/" + item.schema_id + "/schema");
                      } else {
                        // setOpen(true);
                      }
                    }}
                  >
                    <div className="w-100 flex flex-row justify-between">
                      <span>{item.name}</span>
                      <div className="flex flex-row gap-1 items-center">
                        {GetTierIcon(item.tier)}
                        {/* <span className="text-white">{item.tier}</span> */}
                      </div>
                    </div>
                  </Link>
                ),
                sections: [
                  {
                    id: "logo",

                    content: (item) => (
                      <div className="w-100 d-flex justify-content-start mt-1 ">
                        <img
                          className="w-[50px] h-[50px]"
                          src={item.logo}
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src =
                              "https://raw.githubusercontent.com/opengovern/website/main/connectors/icons/default.svg";
                          }}
                          alt="placeholder"
                        />
                      </div>
                    ),
                  },
                  {
                    id: "description",
                    header: (
                      <>
                        <div className="flex justify-between">
                          <span>{"Description"}</span>
                          <span>{"Table"}</span>
                        </div>
                      </>
                    ),
                    content: (item) => (
                      <>
                        <div className="flex justify-between">
                          <span className="max-w-60">{item.description}</span>
                          <span>{item.count ? item.count : "--" }</span>
                        </div>
                      </>
                    ),
                  },
                  // {
                  //   id: "table",
                  //   header: "Table",
                  //   content: (item) => item.count,
                  // },
                  // {
                  //   id: "tier",
                  //   header: "Tier",
                  //   content: (item) => item.tier,
                  //   width: 85,
                  // },
                  // {
                  //   id: "tables",
                  //   header: "Table",
                  //   content: (item) => (item.count ? item.count : "--"),
                  //   width: 15,
                  // },
                ],
              }}
              cardsPerRow={[
                { cards: 1 },
                { minWidth: 750, cards: 3 },
                { minWidth: 680, cards: 2 },
              ]}
              items={integrations
                ?.slice(page * 9, (page + 1) * 9)
                .map((type) => {
                  return {
                    id: type.id,
                    tier: type.tier,
                    description: type.Description,
                    name: type.name,
                    count: counts[type.schema_ids[0]] || 0,
                    schema_id: type?.schema_ids[0],
                    SourceCode: type.SourceCode,
                    logo: `https://raw.githubusercontent.com/opengovern/website/main/connectors/icons/${type.Icon}`,
                  };
                })}
              loadingText="Loading resources"
              stickyHeader
              entireCardClickable
              variant="full-page"
              selectionType="single"
              trackBy="name"
              empty={
                <Box
                  margin={{ vertical: "xs" }}
                  textAlign="center"
                  color="inherit"
                >
                  <SpaceBetween size="m">
                    <b>No resources</b>
                  </SpaceBetween>
                </Box>
              }
            />
          </div>
          <div className="flex gap-3 flex-row w-full justify-center mt-5">
            <CustomPagination
              page_size={9}
              paginationCount={Math.ceil(integrations.length / 9)}
              page={page}
              setPage={setPage}
              isZeroBased={true}
            />
          </div>
        </div>
      </div>
      <Modal
        header="Try enterprise Edition"
        size="large"
        visible={open}
        onDismiss={() => setOpen(false)}
      >
        <Cal
          namespace="try"
          calLink="team/opencomply/try"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view" }}
        />
      </Modal>
    </>
  );
}

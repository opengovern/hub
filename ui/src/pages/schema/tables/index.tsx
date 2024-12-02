import axios from "axios";
import { Badge } from "../../../components/Badge";
import { Button } from "../../../components/Button";
import { Label } from "../../../components/Label";
import { Switch } from "../../../components/Switch";
import { Tooltip } from "../../../components/Tooltip";
import { ArrowAnimated } from "../../../components/ui/ArrowAnimated";
import { Faqs } from "../../../components/ui/Faqs";
import Testimonial from "../../../components/ui/Testimonial";
import { cx, getIntegrationLogo } from "../../../lib/utils";
import {
  RiCheckLine,
  RiCloudLine,
  RiInformationLine,
  RiSubtractLine,
  RiUserLine,
} from "@remixicon/react";
import React, { Fragment, useEffect, useState } from "react";
import './style.css'
import Card from "../../../components/Card";
import { useNavigate, useParams } from "react-router-dom";
import { TableDefinition, TypeTables } from "./types";
import {  Select, SideNavigation, Table } from "@cloudscape-design/components";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import TextFilter from "@cloudscape-design/components/text-filter";
import Header from "@cloudscape-design/components/header";
import Pagination from "@cloudscape-design/components/pagination";
import { Col, Grid } from "@tremor/react";

export default function SchemaTables() {
const {id,table_id}  = useParams();
const [tables,setTables]= useState<TypeTables>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [selectedTable, setSelectedTable] = useState("");
  const [tableData, setTableData] = useState<TableDefinition>();
  const [selectedOption, setSelectedOption] = useState<any>([]);
  const getMasterSchema = () => {
    setLoading(true);
    axios
      .get(
        `https://raw.githubusercontent.com/opengovern/hub/refs/heads/main/schemas/${id}.json`
      )
      .then((res) => {
        if (res.data) {
          setTables(res.data);
           if (res.data.tables && res.data.tables.length > 0) {
             if (window.innerWidth > 768 && !table_id) {
               setSelectedTable(res.data.tables[0].table_name);
               getTableData(res.data.tables[0].table_name);
             }
           }
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };
  const getTableData = (name: string) => {
    setLoading(true);
    axios
      .get(
        `https://raw.githubusercontent.com/opengovern/hub/refs/heads/main/schemas/${id}/${name}.json`
      )
      .then((res) => {
        if (res.data) {
          setTableData(res.data);
        

         
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }

  useEffect(() => {
    getMasterSchema();
    if(table_id && table_id !== ""){
      setSelectedTable(table_id)
      getTableData(table_id)
      setSelectedOption({
        label: table_id,
        value: table_id,
      })
    }
  }, []);

  return (
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
          <Badge>Tables</Badge>
          <h1 className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-4xl md:text-4xl dark:from-gray-50 dark:to-gray-300">
            {String(id).charAt(0).toUpperCase() + String(id).slice(1)}
            {tables && <>({tables?.count_of_named_tables})</>}
          </h1>
          <p className=" mb-2  text-lg text-gray-700 dark:text-gray-400">
           {tables?.description}
          </p>
        </section>
        <div className="flex gap-3 flex-col mt-5">
          {tables && (
            <>
              <Grid className="  gap-5 schema" numItems={12}>
                <Col numColSpan={12} numColSpanSm={3} className="">
                  {window.innerWidth > 768 ? (
                    <>
                      <SideNavigation
                        className="text-white dark:bg-white dark:text-gray-900 rounded-xl p-2 h-full max-h-[62dvh]   "
                        activeHref={selectedTable}
                        header={{
                          href: "1",
                          text: `${id}`,
                        }}
                        onFollow={(event) => {
                          if (!event.detail.external) {
                            event.preventDefault();
                            setSelectedTable(event.detail.href);
                            getTableData(event.detail.href);
                          }
                        }}
                        items={tables?.tables.map((table, index) => {
                          return {
                            type: "link",
                            text: table.table_name,
                            href: table.table_name,
                          };
                        })}
                      />
                    </>
                  ) : (
                    <>
                      <Select
                        selectedOption={selectedOption}
                        virtualScroll
                        placeholder="Select a table"
                        onChange={({ detail }) => {
                          setSelectedOption(detail.selectedOption);
                          // @ts-ignore
                          setSelectedTable(detail.selectedOption.value);
                          // @ts-ignore

                          getTableData(detail.selectedOption.value);
                        }}
                        options={tables?.tables.map((table, index) => {
                          return {
                            label: table.table_name,
                            value: table.table_name,
                          };
                        })}
                      />
                    </>
                  )}
                </Col>

                {tableData && (
                  <>
                    <Col numColSpan={12} numColSpanSm={9} className=" ">
                      <Table
                        className="p-5 pt-2 "
                        renderAriaLive={({
                          firstIndex,
                          lastIndex,
                          totalItemsCount,
                        }) =>
                          `Displaying items ${firstIndex} to ${lastIndex} of ${totalItemsCount}`
                        }
                        columnDefinitions={[
                          {
                            id: "name",
                            header: "Column name",
                            cell: (item) => <>{item.name || "-"}</>,
                            sortingField: "name",
                            isRowHeader: true,
                            minWidth: "50px",
                          },
                          {
                            id: "type",
                            header: "Data type",
                            cell: (item) => <>{item.type || "-"}</>,
                            sortingField: "type",
                            isRowHeader: true,
                            minWidth: "50px",
                          },

                          {
                            id: "description",
                            header: "Description",
                            cell: (item) => item.description || "-",
                            hasDynamicContent: true,
                            // maxWidth: "500px",
                          },
                        ]}
                        enableKeyboardNavigation
                        // resizableColumns={true}
                        // @ts-ignore
                        items={tableData?.columns}
                        // resizableColumns
                        loadingText="Loading resources"
                        sortingDisabled
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
                        header={
                          <Header
                            actions={
                              <>
                                <div className="back">
                                  {/* <Button
                                  className="back-btn"
                                  variant="primary"
                                  onClick={() => {
                                    navigate("/schema");
                                  }}
                                >
                                  Go back
                                </Button> */}
                                </div>
                              </>
                            }
                            className="p-0"
                          >
                            {" "}
                            {selectedTable}
                          </Header>
                        }
                      />
                    </Col>
                  </>
                )}
              </Grid>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

import {
  Button,
  Container,
  FormField,
  Header,
  Icon,
  Input,
  KeyValuePairs,
  Link,
  Modal,
  SpaceBetween,
  Tabs,
  Wizard,
} from "@cloudscape-design/components";
import Advantage from "../../components/ui/Advantage";
import Benefits from "../../components/ui/Benefits";
import CodeExample from "../../components/ui/CodeExample";
import Cta from "../../components/ui/Cta";
import { Faqs } from "../../components/ui/Faqs";
import Features from "../../components/ui/Features";
import { GlobalDatabase } from "../../components/ui/GlobalDatabase";
import Hero from "../../components/ui/Hero";
import HeroUseCase from "../../components/ui/HeroUseCase";
import LogoCloud from "../../components/ui/LogoCloud";
import Steps from "../../components/ui/Steps";
import UseCaseCard from "../../components/UseCaseCard";
import { useEffect, useState } from "react";
// @ts-ignore
import video from "../../videos/2024-10-08-How_to_Customize_Controls.mp4";
import CopyToClipboard from "../../components/CopyToClipboard";
import {
  RiBrainLine,
  RiBugLine,
  RiFileCodeLine,
  RiFileZipLine,
  RiGitMergeLine,
  RiGroup2Line,
  RiIdCardLine,
  RiInfinityLine,
  RiKeyLine,
  RiServerLine,
} from "@remixicon/react";
import { Viewer } from "../Viewer";
import { Col, Grid } from "@tremor/react";
import { useNavigate } from "react-router-dom";
import { ArrowAnimated } from "./ArrowAnimated";
import ThemedImage from "./ThemedImage";

const cards = [
  {
    label: "Infrastructure",
    icon: RiServerLine,
  },
  {
    label: "Deployments",
    icon: RiGitMergeLine,
  },
  {
    label: "Configurations",
    icon: RiFileCodeLine,
  },
  {
    label: "Containers",
    icon: RiFileZipLine,
  },
  {
    label: "AI Models",
    icon: RiBrainLine,
  },
  {
    label: "Identities",
    icon: RiIdCardLine,
  },
  {
    label: "Vulnerabilities",
    icon: RiBugLine,
  },
  {
    label: "Permissions",
    icon: RiKeyLine,
  },
];

export default function UseCaseNew() {
  const [discoverOption, setDiscoverOption] = useState(-1);
  const [open, setOpen] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(1);
  useEffect(() => {
    if (discoverOption != -1) {
      // setOpen(true);
    }
  }, [discoverOption]);
  const navigate = useNavigate();

  return (
    <>
      <section
        aria-labelledby="code-example-title"
        className="mx-auto mt-28 w-full max-w-6xl 2xl:max-w-7xl px-3 flex flex-col justify-center items-center"
      >
        <h2
          id="code-example-title"
          className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300"
        >
          Full-Stack Compliance{" "}
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          OpenComply makes security & compliance radically simple.
        </p>
      </section>
      <section
        aria-labelledby="code-example-title"
        className="mx-auto mt-28 w-full max-w-6xl 2xl:max-w-7xl  flex sm:flex-row flex-col p-2 sm:p-0 gap-4 justify-between"
      >
        <div className="w-100 max-w-md relative ">
          <div className=" sticky top-80">
            <div className="flex w-100 items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900  dark:text-white text-4xl">
                Centralize Visibility
              </div>
            </div>

            <div className="text-slate-500 dark:text-white mt-4">
              <div className="flex flex-col gap-5">
                <div className="text-slate-500 dark:text-white ">
                  {" "}
                  Gain a single source of truth across platforms and
                  environments—saving time, reducing overhead, and enabling
                  teams to quickly spot and address risks before they escalate.
                </div>
                {/* <div className="text-slate-500 dark:text-white font-semibold">
                  USE CASES
                </div>
                <div className="flex flex-row gap-2 flex-wrap">
                  <div
                    className={`p-2 border dark:border-white rounded-3xl cursor-pointer hover:dark:bg-white hover:bg-blue-950 hover:text-white hover:dark:text-black  ${discoverOption == 0 && "text-bold dark:bg-white dark:text-black bg-blue-950 text-white "}  `}
                    onClick={() => {
                      setDiscoverOption(0);
                    }}
                  >
                    Infrastructure
                  </div>
                  <div
                    className={`p-2 border dark:border-white rounded-3xl cursor-pointer hover:dark:bg-white hover:bg-blue-950 hover:text-white hover:dark:text-black  ${discoverOption == 1 && "text-bold dark:bg-white dark:text-black bg-blue-950 text-white "}  `}
                    onClick={() => {
                      setDiscoverOption(1);
                    }}
                  >
                    DevOps
                  </div>
                  <div
                    className={`p-2 border dark:border-white rounded-3xl cursor-pointer hover:dark:bg-white hover:bg-blue-950 hover:text-white hover:dark:text-black  ${discoverOption == 2 && "text-bold dark:bg-white dark:text-black bg-blue-950 text-white "}  `}
                    onClick={() => {
                      setDiscoverOption(2);
                    }}
                  >
                    Identities
                  </div>
                  <div
                    className={`p-2 border dark:border-white rounded-3xl cursor-pointer hover:dark:bg-white hover:bg-blue-950 hover:text-white hover:dark:text-black  ${discoverOption == 3 && "text-bold dark:bg-white dark:text-black bg-blue-950 text-white "}  `}
                    onClick={() => {
                      setDiscoverOption(3);
                    }}
                  >
                    AI Models
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  flex flex-col gap-10 text-black">
          {/* <div className="rounded-xl bg-slate-200 dark:bg-[#e4e3e3] p-8 flex flex-col gap-4 ">
            <div className="font-semibold text-black text-2xl w-full text-center">
              {" "}
              Connect with Ease
            </div>
            <div>
              Connect your technology stack in seconds and start discovering
              insights in minutes with OpenComply.
            </div>
            <div className="rounded-xl bg-white ring-1 ring-slate-900/5 dark:bg-slate-950 dark:ring-white/15">
              <video
                id="hero-video"
                className="rounded-xl w-full shadow-2xl dark:shadow-indigo-600/10"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                // @ts-ignore
                src={
                  "https://content.opencomply.io/product-videos/website/guided-experience/Connect.mp4"
                }
              >
                <source
                  src={
                    // @ts-ignore
                    "https://content.opencomply.io/product-videos/website/guided-experience/Connect.mp4"
                  }
                  type="video/mp4"
                />
              </video>
            </div>
          </div> */}
          <div className="rounded-xl bg-slate-200 dark:bg-[#e4e3e3] p-8 flex flex-col gap-4 ">
            <div className="font-semibold text-black text-2xl w-full text-center">
              {" "}
              See everything in your tech stack
            </div>

            <div>
              Gain a unified view of your entire tech stack—across public
              clouds, SaaS vendors, on-prem, and beyond—no matter where your
              workloads run.
            </div>
            <div className="flex justify-center w-full">
              <Grid
                numItems={2}
                numItemsMd={4}
                numItemsSm={4}
                className=" justify-between gap-4"
              >
                <>
                  {cards?.map((card, index) => {
                    return (
                      <>
                        <Col className="w-full h-full">
                          <div className="flex flex-col p-4 rounded-xl justify-center items-center gap-3 bg-slate-300 hover:bg-slate-400 cursor-pointer dark:bg-slate-900 hover:dark:bg-slate-950 ">
                            {
                              <card.icon
                                color=""
                                className="card-icons"
                                size={35}
                              />
                            }

                            <span className="text-black dark:text-white text-base">
                              {card.label}
                            </span>
                          </div>
                        </Col>
                      </>
                    );
                  })}
                </>
              </Grid>
            </div>
          </div>
          <div className="rounded-xl bg-slate-200 dark:bg-[#e4e3e3] p-8 flex flex-col gap-4 ">
            <div className="font-semibold text-black text-2xl w-full text-center">
              {" "}
              Query Everything, Faster
            </div>
            <div>
              Discover anything, Instantly. SQL for Your Entire Tech Stack.
            </div>
            <Tabs
              className="custom-tabs"
              tabs={[
                {
                  label: "AWS Virtual Machines (VMs)",
                  id: "0",
                  content: (
                    <div className="w-full">
                      <Viewer
                        height="350px"
                        obj={`/* This query gives count of all AWS Instances */

SELECT COUNT(*)
FROM aws_ec2_instance;
`}
                      />
                      {/* <div className="flex justify-center w-full h-full min-h-80">
                        <ThemedImage
                          lightSrc={
                            "https://content.opencomply.io/website/sample-1.png"
                          }
                          darkSrc={
                            "https://content.opencomply.io/website/sample-1.png"
                          }
                          alt="A preview of the Database web app"
                          width={2400}
                          height={1600}
                          className="rounded-xl shadow-2xl dark:shadow-indigo-600/10"
                        />
                      </div> */}
                    </div>
                  ),
                },
                {
                  label: "AI/ML Models",
                  id: "1",
                  content: (
                    <div className="w-full">
                      <Viewer
                        height="350px"
                        obj={`
-- This query retrieves each unique model and counts how many assistants are using each model.


SELECT
    model AS "Model Name",
    COUNT(*) AS "Count of assistants"
FROM openai_assistant
GROUP BY model;
`}
                      />
                    </div>
                  ),
                },
                {
                  label: "Docker Artifacts",
                  id: "2",
                  content: (
                    <div className="w-full">
                      <Viewer
                        height="350px"
                        obj={`-- This query returns all unique base images from the Dockerfiles across
-- all repositories


WITH expanded AS (
 SELECT
   JSONB_ARRAY_ELEMENTS(images::jsonb) AS img
 FROM github_artifact_dockerfile
)
SELECT DISTINCT img->>'base_image' AS unique_base_images
FROM expanded
WHERE img->>'base_image' IS NOT NULL;
`}
                      />
                    </div>
                  ),
                },
                {
                  label: " Recent PRs",
                  id: "3",
                  content: (
                    <div className="w-full">
                      <Viewer
                        height="350px"
                        obj={`/* Below is returns all pull requests that were merged into the main branch in the last 48 hours.
 */
SELECT
    repository_full_name,
    number,
    title,
    merged,
    merged_at,
    merged_by
FROM github_pull_request
WHERE base_ref_name = 'main'
  AND merged = TRUE
  AND merged_at >= (CURRENT_TIMESTAMP - INTERVAL '48 HOURS')
ORDER BY merged_at DESC;
`}
                      />
                    </div>
                  ),
                },
                {
                  label: "Multi-Cloud Databases",
                  id: "4",
                  content: (
                    <div className="w-full">
                      <Viewer
                        height="350px"
                        obj={`WITH 
-- ================================
-- 1) AWS counts
-- ================================
aws_agg AS (
  SELECT 'postgres' AS tech,
    (
      SELECT COUNT(*) FROM aws_rds_db_instance  WHERE engine ILIKE '%postgres%'
    ) 
    + (
      SELECT COUNT(*) FROM aws_rds_db_cluster   WHERE engine ILIKE '%postgres%'
    ) AS c
  UNION ALL
  SELECT 'mysql' AS tech,
    (
      SELECT COUNT(*) FROM aws_rds_db_instance  WHERE engine ILIKE '%mysql%'
    ) 
    + (
      SELECT COUNT(*) FROM aws_rds_db_cluster   WHERE engine ILIKE '%mysql%'
    ) AS c
  UNION ALL
  SELECT 'mariadb' AS tech,
    (
      SELECT COUNT(*) FROM aws_rds_db_instance  WHERE engine ILIKE '%mariadb%'
    ) 
    + (
      SELECT COUNT(*) FROM aws_rds_db_cluster   WHERE engine ILIKE '%mariadb%'
    ) AS c
  UNION ALL
  -- Some AWS engines for MSSQL are often labeled "sqlserver".
  SELECT 'mssql' AS tech,
    (
      SELECT COUNT(*) FROM aws_rds_db_instance  WHERE engine ILIKE '%sqlserver%'
    ) 
    + (
      SELECT COUNT(*) FROM aws_rds_db_cluster   WHERE engine ILIKE '%sqlserver%'
    ) AS c
),

-- ================================
-- 2) Azure counts
-- ================================
azure_agg AS (
  SELECT 'postgres' AS tech,
    (
      SELECT COUNT(*) FROM azure_postgresql_flexible_server
    ) 
    + (
      SELECT COUNT(*) FROM azure_postgresql_server
    ) AS c
  UNION ALL
  SELECT 'mysql' AS tech,
    (
      SELECT COUNT(*) FROM azure_mysql_flexible_server
    ) AS c
  UNION ALL
  SELECT 'mariadb' AS tech,
    (
      SELECT COUNT(*) FROM azure_mariadb_server
    ) AS c
  UNION ALL
  SELECT 'mssql' AS tech,
    (
      SELECT COUNT(*) FROM azure_mssql_managed_instance
    ) AS c
),

-- ======================================
-- 3) DigitalOcean counts
-- ======================================
-- The engine field can be: 'pg' (Postgres), 'mysql' (MySQL), 'redis', etc.
-- We only count Postgres and MySQL here.
digitalocean_agg AS (
  SELECT 
    CASE 
      WHEN engine = 'pg'    THEN 'postgres'
      WHEN engine = 'mysql' THEN 'mysql'
      -- If you wish to handle 'redis', you'd map it similarly, but not in our final table
    END AS tech,
    COUNT(*) AS c
  FROM digitalocean_database
  WHERE engine IN ('pg', 'mysql')
  GROUP BY 1
),

-- ================================
-- 4) Render counts
-- ================================
-- Render only has a "render_postgres_instance" table, so these are Postgres.
render_agg AS (
  SELECT 'postgres' AS tech,
         COUNT(*)    AS c
  FROM render_postgres_instance
),

-- ================================
-- 5) List of all DB tech we care about
-- ================================
tech_list AS (
  SELECT 'postgres' AS tech
   UNION ALL SELECT 'mysql'
   UNION ALL SELECT 'mariadb'
   UNION ALL SELECT 'mssql'
)

-- ======================================
-- Final pivot: one row per DB tech
-- Columns for AWS, Azure, DigitalOcean, Render
-- ======================================
SELECT 
  t.tech                          AS "Database Tech",
  COALESCE(aaws.c, 0)            AS "AWS",
  COALESCE(aaz.c, 0)             AS "Azure",
  COALESCE(ado.c, 0)             AS "DigitalOcean",
  COALESCE(arnd.c, 0)            AS "Render"
FROM tech_list          t
LEFT JOIN aws_agg       aaws ON t.tech = aaws.tech
LEFT JOIN azure_agg     aaz  ON t.tech = aaz.tech
LEFT JOIN digitalocean_agg ado ON t.tech = ado.tech
LEFT JOIN render_agg    arnd ON t.tech = arnd.tech
ORDER BY t.tech;
`}
                      />
                    </div>
                  ),
                },

                {
                  label: "Kubernetes Clusters in DigitalOcean",
                  id: "5",
                  content: (
                    <div className="w-full">
                      <Viewer
                        height="350px"
                        obj={`/* This query gives all Kubernetes Clusters deployed in DigitalOcean */
SELECT * FROM digitalocean_kubernetes_cluster;
`}
                      />
                    </div>
                  ),
                },
                {
                  label: "Web services in Render",
                  id: "6",
                  content: (
                    <div className="w-full">
                      <Viewer
                        height="350px"
                        obj={`/* This query gives all Services deployed in Render */
SELECT * FROM render_service;
`}
                      />
                    </div>
                  ),
                },
              ]}
            />
            {/* <div className="w-full flex sm:flex-row flex-col justify-center gap-2 items-center">
              <Button
                ariaLabel="Report a bug (opens new tab)"
                href="/integrations"
                iconAlign="right"
                iconName="external"
                target="_blank"
                variant="primary"
              >
                See all Integrations
              </Button>
              <Button
                ariaLabel="Report a bug (opens new tab)"
                href="/integrations/aws/schema"
                iconAlign="right"
                iconName="external"
                target="_blank"
                variant="primary"
              >
                See Schema
              </Button>
            </div> */}
          </div>

          {/* <div className="rounded-xl  bg-slate-200 dark:bg-[#e4e3e3] p-8 flex flex-col gap-4 ">
            <div className="font-semibold text-black text-2xl w-full text-center">
              {" "}
              See across environments, regions, and platforms
            </div>
            <div>
              Gain a complete, unified view across public clouds, SaaS vendors,
              on-prem, and beyond—no matter where your workload resides.
            </div>
            <div className="flex sm:flex-row flex-col justify-between gap-4 ">
              <div className="flex w-full flex-col gap-2 bg-[#3f4344] p-4 justify-center items-center rounded-xl">
                {" "}
                <div>
                  <RiGroup2Line color="white" />
                </div>{" "}
                <div className="font-bold text-3xl text-white ">40+</div>{" "}
                <div className="text-white text-lg"> Integrations</div>
              </div>
              <div className="flex w-full flex-col gap-2 bg-[#3f4344] p-4 justify-center items-center rounded-xl">
                {" "}
                <div>
                  <RiGroup2Line color="white" />
                </div>{" "}
                <div className="font-bold text-3xl text-white ">1K+</div>{" "}
                <div className="text-white text-lg"> Assets</div>
              </div>
              <div className="flex w-full flex-col gap-2 bg-[#3f4344] p-4 justify-center items-center rounded-xl">
                {" "}
                <div>
                  <RiGroup2Line color="white" />
                </div>{" "}
                <div className="font-bold text-3xl text-white ">
                  <RiInfinityLine size={"40"} />
                </div>{" "}
                <div className="text-white text-lg"> Customization</div>
              </div>
            </div>
            <Tabs className="custom-tabs" tabs={[]} />
          </div> */}
          <div className="rounded-xl bg-slate-200 dark:bg-[#e4e3e3] p-8 flex flex-col gap-4 ">
            <div className="font-semibold text-black text-2xl w-full text-center">
              {" "}
              Integrates with your favorite tools
            </div>
            <div className="   w-full ">
              {" "}
              Seamlessly integrate OpenComply with your technology stack—across
              Infrastructure, DevOps, AI, and SecOps platforms.
            </div>
            <div className="flex justify-center w-full">
              <Grid
                numItems={2}
                numItemsMd={4}
                numItemsSm={4}
                className=" justify-between gap-10"
              >
                <>
                  {[1, 2, 3, 4, 5, 6, 7, 8]?.map((item, index) => {
                    return (
                      <>
                        <Col>
                          <div className="rounded-xl  w-fit  p-2">
                            <img
                              src={`https://content.opencomply.io/website/integrations/${item}.svg`}
                              className="w-20 h-24"
                            />
                          </div>
                        </Col>
                      </>
                    );
                  })}
                </>
              </Grid>
            </div>
            <div className="flex justify-center w-full">
              <Button
                ariaLabel="Report a bug (opens new tab)"
                href="/integrations"
                iconAlign="right"
                iconName="external"
                target="_blank"
                variant="primary"
              >
                See all Integrations
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section
        aria-labelledby="code-example-title"
        className="mx-auto mt-28 w-full max-w-6xl 2xl:max-w-7xl flex sm:flex-row flex-col sm:p-0 p-2 gap-4 justify-between"
      >
        <div className="w-100 max-w-md relative ">
          <div className=" sticky top-80">
            <div className="flex w-100 items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900  dark:text-white text-4xl">
                Detect Threats
              </div>
            </div>

            <div className="text-slate-500 dark:text-white mt-4">
              <div className="flex flex-col gap-5">
                <div className="text-slate-500 dark:text-white ">
                  {" "}
                  No More Blind Spots. Detect misconfigurations,
                  vulnerabilities, and policy violations across all tools and
                  platforms in near real time.
                </div>
                {/* <div className="text-slate-500 dark:text-white font-semibold">
                  USE CASES
                </div>

                <div className="flex flex-row gap-2 flex-wrap">
                  <div
                    className={`p-2 border dark:border-white rounded-3xl cursor-pointer hover:dark:bg-white hover:bg-blue-950 hover:text-white hover:dark:text-black  ${discoverOption == 0 && "text-bold dark:bg-white dark:text-black bg-blue-950 text-white "}  `}
                    onClick={() => {
                      setDiscoverOption(0);
                    }}
                  >
                    Container Vulnerabilities
                  </div>
                  <div
                    className={`p-2 border dark:border-white rounded-3xl cursor-pointer hover:dark:bg-white hover:bg-blue-950 hover:text-white hover:dark:text-black  ${discoverOption == 1 && "text-bold dark:bg-white dark:text-black bg-blue-950 text-white "}  `}
                    onClick={() => {
                      setDiscoverOption(1);
                    }}
                  >
                    Data Leaks
                  </div>
                  <div
                    className={`p-2 border dark:border-white rounded-3xl cursor-pointer hover:dark:bg-white hover:bg-blue-950 hover:text-white hover:dark:text-black  ${discoverOption == 2 && "text-bold dark:bg-white dark:text-black bg-blue-950 text-white "}  `}
                    onClick={() => {
                      setDiscoverOption(2);
                    }}
                  >
                    Missing Backups
                  </div>
                  <div
                    className={`p-2 border dark:border-white rounded-3xl cursor-pointer hover:dark:bg-white hover:bg-blue-950 hover:text-white hover:dark:text-black  ${discoverOption == 3 && "text-bold dark:bg-white dark:text-black bg-blue-950 text-white "}  `}
                    onClick={() => {
                      setDiscoverOption(3);
                    }}
                  >
                    DR Threats
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  flex flex-col gap-10 text-black">
          <div className="rounded-xl bg-slate-200 dark:bg-[#e4e3e3] p-8 flex flex-col gap-4 ">
            <div className="font-semibold text-black text-2xl w-full text-center">
              {" "}
              Data Risks
            </div>
            <div>
              Proactively detect misconfigurations, vulnerabilities, and policy
              violations in real time—freeing engineering resources to focus on
              innovation rather than manual security firefighting.
            </div>
            <div className="rounded-xl bg-white ring-1 ring-slate-900/5 dark:bg-slate-950 dark:ring-white/15">
              <video
                id="hero-video"
                className="rounded-xl w-full shadow-2xl dark:shadow-indigo-600/10"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                // @ts-ignore
                src={"https://content.opencomply.io/RunAudit.mp4"}
              >
                <source
                  src={
                    // @ts-ignore
                    "https://content.opencomply.io/RunAudit.mp4"
                  }
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </section>
      <section
        aria-labelledby="code-example-title"
        className="mx-auto mt-28 w-full max-w-6xl  2xl:max-w-7xl flex sm:flex-row flex-col sm:p-0 p-2 gap-4 justify-between"
      >
        <div className="w-100 max-w-md relative ">
          <div className=" sticky top-80">
            <div className="flex w-100 items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900  dark:text-white text-4xl">
                Audit for Compliance
              </div>
            </div>

            <div className="text-slate-500 dark:text-white mt-4">
              <div className="flex flex-col gap-5">
                <div className="text-slate-500 dark:text-white ">
                  {" "}
                  Define consistent rules with Policy as Code and apply them
                  across vendors, platforms, and regions. Continuously audit to
                  maintain compliance and strengthen your security posture.
                </div>
                {/* <div className="text-slate-500 dark:text-white font-semibold">
                  USE CASES
                </div> */}

                {/* <div className="flex flex-row gap-2 flex-wrap">
                  <div
                    className={`p-2 border dark:border-white rounded-3xl cursor-pointer hover:dark:bg-white hover:bg-blue-950 hover:text-white hover:dark:text-black  ${discoverOption == 0 && "text-bold dark:bg-white dark:text-black bg-blue-950 text-white "}  `}
                    onClick={() => {
                      setDiscoverOption(0);
                    }}
                  >
                    SOC2
                  </div>
                  <div
                    className={`p-2 border dark:border-white rounded-3xl cursor-pointer hover:dark:bg-white hover:bg-blue-950 hover:text-white hover:dark:text-black  ${discoverOption == 1 && "text-bold dark:bg-white dark:text-black bg-blue-950 text-white "}  `}
                    onClick={() => {
                      setDiscoverOption(1);
                    }}
                  >
                    HIPAA
                  </div>
                  <div
                    className={`p-2 border dark:border-white rounded-3xl cursor-pointer hover:dark:bg-white hover:bg-blue-950 hover:text-white hover:dark:text-black  ${discoverOption == 2 && "text-bold dark:bg-white dark:text-black bg-blue-950 text-white "}  `}
                    onClick={() => {
                      setDiscoverOption(2);
                    }}
                  >
                    Engineering Best Practices
                  </div>
                  <div
                    className={`p-2 border dark:border-white rounded-3xl cursor-pointer hover:dark:bg-white hover:bg-blue-950 hover:text-white hover:dark:text-black  ${discoverOption == 3 && "text-bold dark:bg-white dark:text-black bg-blue-950 text-white "}  `}
                    onClick={() => {
                      setDiscoverOption(3);
                    }}
                  >
                    Internal Controls
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  flex flex-col gap-10 text-black">
          {/* <div className="rounded-xl bg-slate-200 dark:bg-[#e4e3e3] p-8 flex flex-col gap-10 ">
            <div className="font-semibold text-black text-2xl w-full text-center">
              {" "}
              Container Vulnerabilities
            </div>
            <div>
              Gain a single source of truth across platforms and
              environments—saving time, reducing overhead, and enabling teams to
              quickly spot and address risks before they escalate.
            </div>
            <div className="flex sm:flex-row flex-col justify-between gap-4 ">
              <div className="flex flex-col gap-2 bg-[#3f4344] p-4 justify-center items-center rounded-xl">
                {" "}
                <div>
                  <RiGroup2Line color="white" />
                </div>{" "}
                <div className="font-bold text-3xl text-white ">1.5X</div>{" "}
                <div className="text-white text-sm"> soem texts goes here</div>
              </div>
              <div className="flex flex-col gap-2 bg-[#3f4344] p-4 justify-center items-center rounded-xl">
                {" "}
                <div>
                  <RiGroup2Line color="white" />
                </div>{" "}
                <div className="font-bold text-3xl text-white ">1.5X</div>{" "}
                <div className="text-white text-sm"> soem texts goes here</div>
              </div>
              <div className="flex flex-col gap-2 bg-[#3f4344] p-4 justify-center items-center rounded-xl">
                {" "}
                <div>
                  <RiGroup2Line color="white" />
                </div>{" "}
                <div className="font-bold text-3xl text-white ">1.5X</div>{" "}
                <div className="text-white text-sm"> soem texts goes here</div>
              </div>
            </div>
          </div> */}
          <div className="rounded-xl bg-slate-200 dark:bg-[#e4e3e3] p-8 flex flex-col gap-4 ">
            <div className="font-semibold text-black text-2xl w-full text-center">
              {" "}
              Simplify Your Audits
            </div>
            <div>
              Conduct audits effortlessly and generate comprehensive,
              evidence-backed reports.
            </div>
            <div className="rounded-xl bg-white ring-1 ring-slate-900/5 dark:bg-slate-950 dark:ring-white/15">
              <video
                id="hero-video"
                className="rounded-xl w-full shadow-2xl dark:shadow-indigo-600/10"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                // @ts-ignore
                src={
                  "https://content.opencomply.io/website/product-videos/run_audit.mp4"
                }
              >
                <source
                  src={
                    // @ts-ignore
                    "https://content.opencomply.io/website/product-videos/run_audit.mp4"
                  }
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div className="rounded-xl bg-slate-200 dark:bg-[#e4e3e3] p-8 flex flex-col gap-4 ">
            <div className="font-semibold text-black text-2xl w-full text-center">
              {" "}
              Assess Compliance with Industry Standards
            </div>
            <div className="  text-lf w-full ">
              {" "}
              Demonstrate a commitment to security by continuously auditing
              against industry best practices, including frameworks like ISO
              27001.
            </div>
            <div className="flex justify-center w-full">
              <Grid
                numItems={2}
                numItemsMd={4}
                numItemsSm={4}
                className=" justify-between gap-12"
              >
                <>
                  {[1, 2, 3, 4, 5, 6, 7, 8]?.map((item, index) => {
                    return (
                      <>
                        <Col>
                          <div className="rounded-xl  w-fit  p-2">
                            <img
                              style={{ mixBlendMode: "multiply" }}
                              src={`https://content.opencomply.io/website/compliance_icons/${item}.png`}
                              className="w-28 h-32"
                            />
                          </div>
                        </Col>
                      </>
                    );
                  })}
                </>
              </Grid>
            </div>
            <div className="flex justify-center w-full">
              <Button
                ariaLabel="Report a bug (opens new tab)"
                href="/compliance/frameworks"
                className="text-center flex justify-center"
                iconAlign="right"
                iconName="external"
                target="_blank"
                variant="primary"
              >
                See all 50+ built-in Frameworks
              </Button>
            </div>
          </div>
          <div className="rounded-xl bg-slate-200 dark:bg-[#e4e3e3] p-8 flex flex-col gap-4 ">
            <div className="font-semibold text-black text-2xl w-full text-center">
              {" "}
              Internal Standards and Best Practice{" "}
            </div>
            <div className="  text-lf w-full ">
              {" "}
              Easily assess workloads for conformance to DevOps, Security, and
              Engineering best practices to ensure excellence.
            </div>
            <div className="flex justify-center w-full">
              <div className="rounded-2xl w-full bg-slate-50/40 p-2 ring-1 ring-inset ring-slate-200/50 dark:bg-gray-900/70 dark:ring-white/10">
                <div className="rounded-xl w-full bg-white ring-1 ring-slate-900/5 dark:bg-slate-950 dark:ring-white/15">
                  <ThemedImage
                    lightSrc={
                      "https://content.opencomply.io/website/product-screenshots/internal-standards-reliability.png"
                    }
                    darkSrc={
                      "https://content.opencomply.io/website/product-screenshots/internal-standards-reliability.png"
                    }
                    alt="A preview of the Database web app"
                    width={2400}
                    height={1600}
                    className="rounded-xl shadow-2xl dark:shadow-indigo-600/10"
                  />
                </div>
              </div>
            </div>
            {/* <div className="flex justify-center w-full">
              <Button
                ariaLabel="Report a bug (opens new tab)"
                href="/compliance/frameworks"
                className="text-center flex justify-center"
                iconAlign="right"
                iconName="external"
                target="_blank"
                variant="primary"
              >
                See all 50+ built-in Frameworks
              </Button>
            </div> */}
          </div>
          <div className="rounded-xl bg-slate-200 dark:bg-[#e4e3e3] p-8 flex flex-col gap-4 ">
            <div className="font-semibold text-black text-2xl w-full text-center">
              {" "}
              Customize & Cut Out the Noise
            </div>
            <div className="  text-lf w-full ">
              {" "}
              Focus on what matters—tailor frameworks and controls, all governed
              in Git.
            </div>
            <Tabs
              tabs={[
                {
                  id: "0",
                  label: "Customize Controls",
                  content: (
                    <div className="flex justify-center w-full">
                      <div className="rounded-2xl w-full bg-slate-50/40 p-2 ring-1 ring-inset ring-slate-200/50 dark:bg-gray-900/70 dark:ring-white/10">
                        <div className="rounded-xl w-full bg-white ring-1 ring-slate-900/5 dark:bg-slate-950 dark:ring-white/15">
                          <ThemedImage
                            lightSrc={
                              "https://content.opencomply.io/website/product-screenshots/customize-controls.png"
                            }
                            darkSrc={
                              "https://content.opencomply.io/website/product-screenshots/customize-controls.png"
                            }
                            alt="A preview of the Database web app"
                            width={1000}
                            height={700}
                            className="rounded-xl shadow-2xl dark:shadow-indigo-600/10"
                          />
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  id: "1",
                  label: "Compliance Frameworks",
                  content: (
                    <div className="flex justify-center w-full">
                      <div className="rounded-2xl w-full bg-slate-50/40 p-2 ring-1 ring-inset ring-slate-200/50 dark:bg-gray-900/70 dark:ring-white/10">
                        <div className="rounded-xl w-full bg-white ring-1 ring-slate-900/5 dark:bg-slate-950 dark:ring-white/15">
                          <ThemedImage
                            lightSrc={
                              "https://content.opencomply.io/website/product-screenshots/customize-frameworks.png"
                            }
                            darkSrc={
                              "https://content.opencomply.io/website/product-screenshots/customize-frameworks.png"
                            }
                            alt="A preview of the Database web app"
                            width={1000}
                            height={700}
                            className="rounded-xl shadow-2xl dark:shadow-indigo-600/10"
                          />
                        </div>
                      </div>
                    </div>
                  ),
                },
              ]}
            />
            {/* <div className="flex justify-center w-full">
              <Button
                ariaLabel="Report a bug (opens new tab)"
                href="/compliance/frameworks"
                className="text-center flex justify-center"
                iconAlign="right"
                iconName="external"
                target="_blank"
                variant="primary"
              >
                See all 50+ built-in Frameworks
              </Button>
            </div> */}
          </div>
        </div>
      </section>
      <Modal
        visible={open}
        onDismiss={() => {
          setOpen(false);
        }}
        header="Setup"
      >
        <Wizard
          i18nStrings={{
            stepNumberLabel: (stepNumber) => `Step ${stepNumber}`,
            collapsedStepsLabel: (stepNumber, stepsCount) =>
              `Step ${stepNumber} of ${stepsCount}`,
            skipToButtonLabel: (step, stepNumber) => `Skip to ${step.title}`,
            navigationAriaLabel: "Steps",
            cancelButton: "Cancel",
            previousButton: "Previous",
            nextButton: "Next",
            submitButton: "Launch instance",
            optional: "optional",
          }}
          onNavigate={({ detail }) =>
            setActiveStepIndex(detail.requestedStepIndex)
          }
          activeStepIndex={activeStepIndex}
          onCancel={() => {
            setOpen(false);
          }}
          onSubmit={() => {
            setOpen(false);
          }}
          steps={[
            {
              title: "Install",
              description: "Deploy to Kubernetes in minutes.",
              content: (
                <div className="w-full">
                  {/* code to copy */}
                  <div className="flex flex-row gap-2 mt-2 w-full relative">
                    <div className="p-5 border dark:border-white rounded-xl w-full">
                      <code className=" text-[12px] text-black dark:text-white">
                        <span className="text-[#8250df]">helm</span> repo add
                        opencomply https://charts.opencomply.io
                        <br />
                        <span className="text-[#8250df]">helm</span> repo update
                        <br />
                        <span className="text-[#8250df]">helm</span> install -n
                        opencomply opencomply opencomply/opencomply
                        --create-namespace --timeout=10m
                        <br />
                        <span className="text-[#8250df]"> kubectl</span>{" "}
                        port-forward -n opencomply svc/nginx-proxy 8080:80
                      </code>
                    </div>
                    <div className=" absolute right-2 top-2  [grid-area:2/1] z-[2] justify-self-end backdrop-blur-md leading-none self-start  text-dark-tremor-brand-subtle  rounded-md    print:hidden">
                      <CopyToClipboard
                        code={`helm repo add opencomply https://charts.opencomply.io
helm repo update 
helm install -n opencomply opencomply
opencomply/opencomply --create-namespace --timeout=10m
kubectl port-forward -n opencomply svc/nginx-proxy 8080:80`}
                      />{" "}
                    </div>
                  </div>
                  <div className="flex text-sm flex-wrap flex-1 justify-start md:justify-center flex-row gap-2 mt-2 ">
                    <Button
                      ariaLabel="Report a bug (opens new tab)"
                      href="https://example.com"
                      iconAlign="right"
                      iconName="external"
                      target="_blank"
                      variant="primary"
                    >
                      AWS
                    </Button>
                    <Button
                      ariaLabel="Report a bug (opens new tab)"
                      href="https://example.com"
                      iconAlign="right"
                      iconName="external"
                      target="_blank"
                      variant="primary"
                    >
                      Azure
                    </Button>
                    <Button
                      ariaLabel="Report a bug (opens new tab)"
                      href="https://example.com"
                      iconAlign="right"
                      iconName="external"
                      target="_blank"
                      variant="primary"
                    >
                      DigitalOcean
                    </Button>
                    <Button
                      ariaLabel="Report a bug (opens new tab)"
                      href="https://example.com"
                      iconAlign="right"
                      iconName="external"
                      target="_blank"
                      variant="primary"
                    >
                      GKE
                    </Button>
                    <Button
                      ariaLabel="Report a bug (opens new tab)"
                      href="https://example.com"
                      iconAlign="right"
                      iconName="external"
                      target="_blank"
                      variant="primary"
                    >
                      Linode
                    </Button>
                    {/* <Button
                  ariaLabel="Report a bug (opens new tab)"
                  href="https://example.com"
                  iconAlign="right"
                  iconName="external"
                  target="_blank"
                  variant="primary"
                >
                  Vultr
                </Button> */}
                  </div>
                </div>
              ),
            },
            {
              title: "Connect Your Tools",
              description:
                "Connect your tool with a simple read-only read in Seconds, from Cloud Accounts to Code Repos",
              content: (
                <video
                  className="rounded-xl w-full shadow-2xl dark:shadow-indigo-600/10"
                  autoPlay
                  loop
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ),
              isOptional: true,
            },
            {
              title: "Discover",
              content: (
                <div className="rounded-xl h-full bg-white ring-1 ring-slate-900/5 dark:bg-slate-950 dark:ring-white/15">
                  <iframe
                    height={"400"}
                    width={"100%"}
                    className="rounded-xl  w-full shadow-2xl dark:shadow-indigo-600/10"
                    src={"https://www.youtube.com/embed/ZK-rNEhJIDs"}
                  ></iframe>
                </div>
              ),
              isOptional: true,
            },
          ]}
        />
      </Modal>
    </>
  );
}

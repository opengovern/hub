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
  Pagination,
  Popover,
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
import video2 from "../../videos/2024-10-08-How_to_Customize_Controls.mp4";
import CopyToClipboard from "../../components/CopyToClipboard";
import Definition from "../../images/famework-definition.svg";
import Organization from "../../images/framework-organization.svg";

import {
  RiAppsLine,
  RiArticleLine,
  RiBook3Line,
  RiBracesLine,
  RiBrainLine,
  RiBugLine,
  RiFileCodeLine,
  RiFileZipLine,
  RiFolder2Line,
  RiGitMergeLine,
  RiGroup2Line,
  RiIdCardLine,
  RiInfinityLine,
  RiKeyLine,
  RiPlugLine,
  RiPuzzleLine,
  RiRectangleFill,
  RiRectangleLine,
  RiSearchFill,
  RiSearchLine,
  RiServerLine,
  RiShieldUserLine,
  RiStickyNoteLine,
} from "@remixicon/react";
import { Viewer } from "../Viewer";
import { Col, Grid } from "@tremor/react";
import { useNavigate } from "react-router-dom";
import { ArrowAnimated } from "./ArrowAnimated";
import ThemedImage from "./ThemedImage";
import CustomPagination from "../Pagination";
import { Results } from "../../pages/landing/query_result";
import { title } from "process";
import axios from "axios";
import { Editor } from "../Editor";

const cards = [
  {
    label: "Frameworks",
    icon: RiBook3Line,
  },
  {
    label: "Controls",
    icon: RiStickyNoteLine,
  },
  {
    label: "Integrations",
    icon: RiPuzzleLine,
  },
  {
    label: "Queries",
    icon: RiSearchLine,
  },
  {
    label: "Views",
    icon: RiRectangleLine,
  },

  {
    label: "Parameters",
    icon: RiBracesLine,
  },
  {
    label: "Policies",
    icon: RiServerLine,
  },

  {
    label: "Tasks",
    icon: RiAppsLine,
  },
  {
    label: "Git",
    icon: RiGitMergeLine,
  },
  {
    label: "API",
    icon: RiPlugLine,
  },
  {
    label: "Roles",
    icon: RiShieldUserLine,
  },
  {
    label: "SSO",
    icon: RiIdCardLine,
  },
];

const URLS = [
  "https://tour.opencomply.io/embed/cm5q1ezs60ljjpelfs3zkfzdn?embed_v=2",
  "https://tour.opencomply.io/embed/cm5u6d2uf0eixx30ie910b8ad?embed_v=2",
  "https://tour.opencomply.io/embed/cm5u7317k0ex2x30igug7nxg8?embed_v=2",
];

export default function UseCaseNew2() {
  const [discoverOption, setDiscoverOption] = useState(-1);
  const [open, setOpen] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [page, setPage] = useState(0);
  const [yaml, setYaml] = useState({});
  const [yaml1, setYaml1] = useState({});

  const [video, setVideo] = useState(0);
  const [width, setWidth] = useState({
    0: 0,
    1: 0,
    2: 0,
  });
  const [time, setTime] = useState(0);
  const [selectedCard, setSelectedCard] = useState("");

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      // @ts-ignore
      const video_dur = document.getElementById("hero-video")?.duration;
      if (time >= video_dur) {
        setVideo((video + 1) % 2);
        clearInterval(countdownInterval);
        setWidth({
          0: 0,
          1: 0,
          2: 0,
        });
        setTime(0);
      } else {
        setTime(time + 0.5);
        // @ts-ignore
        const old = width;
        // @ts-ignore

        old[video] = (time / video_dur) * 100;
        setWidth(old);
      }
    }, 500);

    return () => clearInterval(countdownInterval);
  }, [time, video]);

  useEffect(() => {
    if (discoverOption != -1) {
      // setOpen(true);
    }
  }, [discoverOption]);
  const navigate = useNavigate();

  const GetYaml = (url : string,flag: boolean,card : string) => {
   
    axios
      .get(
        url
      )
      .then((resp) => {
        if(flag){
        setYaml({...yaml,[card] : resp.data});

        }
        else{
          setYaml1({ ...yaml1, [card]: resp.data });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const GetSteps = (card: string) => {
    const step: any = [];
    

    switch (card) {
      case "Frameworks":
        GetYaml(
          "https://raw.githubusercontent.com/opengovern/platform-configuration/refs/heads/main/compliance/frameworks/baseline/efficiency.yaml"
        ,true,card);
        step.push({
          title: "Introduction",
          content: (
            <>
              <div className="flex flex-col gap-3">
                <span className="text-lg font-semibold">
                  opencomply lets you specify Compliance Framework in YAML.
                </span>
                <span className="text-base ">Here's an example:</span>
                <Editor
                  height={window.innerWidth > 750 ? 400 : 150}
                  // @ts-ignore
                  obj={yaml[card]}
                />
              </div>
            </>
          ),
        });
        step.push({
          title: "Definition",
          content: (
            <>
              <div className="flex flex-col gap-3 w-full">
                <span className="text-base ">
                  Here's how you Frameworks are defined:
                </span>
                <div className="rounded-2xl w-full mt-2 bg-slate-50/40 p-2 ring-1 ring-inset ring-slate-200/50 dark:bg-gray-900/70 dark:ring-white/10">
                  <div className="rounded-xl w-full  bg-white ring-1 ring-slate-900/5 dark:bg-slate-950 dark:ring-white/15">
                    {" "}
                    <img
                      src={Definition}
                      className=" sm:min-h-[400px] sm:min-w-[350px]"
                    />
                  </div>
                </div>
              </div>
            </>
          ),
        });
        step.push({
          title: "Organization",
          content: (
            <>
              <div className="flex flex-col gap-3">
                <span className="text-base">
                  Here's how Frameworks are organized:
                </span>
                <ul className=" list-disc list-inside ">
                  <li className="mt-2">
                    <b>Compliance Framework:&nbsp;</b>The top-level entity that
                    organizes all Control Groups and their Controls.
                  </li>
                  <li className="mt-2">
                    <b>Control Group 1 and 2:&nbsp;</b> Logical groupings (like
                    folders) under the Compliance Framework.
                  </li>
                  {/* <li className="mt-2">
                     <b>Subgroup (Control Group 1.1): &nbsp;</b>Nested under
                     Control Group 1 for more granular organization.
                   </li> */}
                  <li className="mt-2">
                    <b>Controls: &nbsp;</b>Individual compliance checks or
                    requirements within each group.
                  </li>
                </ul>
                <div className="rounded-2xl w-full mt-2 bg-slate-50/40 p-2 ring-1 ring-inset ring-slate-200/50 dark:bg-gray-900/70 dark:ring-white/10">
                  <div className="rounded-xl w-full  bg-white ring-1 ring-slate-900/5 dark:bg-slate-950 dark:ring-white/15">
                    <img src={Organization} className="w-fit h-full" />
                  </div>
                </div>
              </div>
            </>
          ),
        });
        break;

      case "Controls":
        GetYaml(
          "https://raw.githubusercontent.com/opengovern/platform-configuration/refs/heads/main/compliance/controls/aws/aws_acm_certificate_not_expired.yaml",
          true,card
        );
        GetYaml(
          "https://raw.githubusercontent.com/opengovern/platform-configuration/refs/heads/main/compliance/controls/baseline/aws/IAM/aws_access_keys_rotated_x_days.yaml",
          false,card
        );
         step.push({
           title: "Controls",
           content: (
             <>
               <div className="flex flex-col gap-3">
                 <span className="text-base">
                   Controls represent specific compliance requirements or best
                   practices to assess. Controls are defined in YAML.
                 </span>
                 <span className="text-base">
                   A compliance rule has two parts:
                 </span>
                 <ol className=" list-decimal list-inside  ">
                   <li className="mt-2">
                     <b>Metadata:&nbsp;</b>ID, Title, Description (Optional),
                     Severity
                   </li>
                   <li className="mt-2">
                     <b>Technical Logic: &nbsp;</b> Instructions on how to
                     verify that the control is met
                   </li>
                 </ol>
                 {/* <div className="rounded-2xl w-full mt-2 bg-slate-50/40 p-2 ring-1 ring-inset ring-slate-200/50 dark:bg-gray-900/70 dark:ring-white/10">
                   <div className="rounded-xl w-full  bg-white ring-1 ring-slate-900/5 dark:bg-slate-950 dark:ring-white/15">
                     <img src={Organization} className="w-fit h-full" />
                   </div>
                 </div> */}
               </div>
             </>
           ),
         });
        step.push({
          title: "Inline Policies",
          content: (
            <>
              <div className="flex flex-col gap-3">
                <span className="text-base ">
                  Controls with inline policies contain both the compliance
                  requirement (what must be done) and the technical logic (how
                  to check it) in a single YAML file.
                </span>
                <Editor
                  height={window.innerWidth > 750 ? 400 : 150}
                  // @ts-ignore
                  obj={yaml[card]}
                />
              </div>
            </>
          ),
        });
        step.push({
          title: "Reference Policies",
          content: (
            <>
              <div className="flex flex-col gap-3">
                <span className="text-base">
                  To improve reusability, controls can reference other policies.
                  These are called "Controls with Referenced Policies." This
                  allows for reusability, enables customization, and ensures
                  consistency.
                </span>
                <span className="text-base ">
                  Here's a Control reusing a policy.
                </span>
                <Editor
                  height={window.innerWidth > 750 ? 400 : 150}
                  // @ts-ignore
                  obj={yaml1[card]}
                />
              </div>
            </>
          ),
        });
        break;
      

      case "Integrations":
        step.push({
          title: "Plugins",
          content: (
            <>
              <div className="flex flex-col gap-3 w-full">
                <span className="text-bold text-lg ">
                  OpenComply leverages a modular integration mechanism through
                  Plugins.
                </span>
                <span className="text-base ">
                  Plugins extend OpenComply's capabilities by providing
                  visibility into various workloads, including infrastructure,
                  data stores, configurations, and<b> any technical item</b>{" "}
                  accessible via APIs.
                </span>
                <div className="rounded-2xl w-full mt-2 bg-slate-50/40 p-2 ring-1 ring-inset ring-slate-200/50 dark:bg-gray-900/70 dark:ring-white/10">
                  <div className="rounded-xl w-full  bg-white ring-1 ring-slate-900/5 dark:bg-slate-950 dark:ring-white/15">
                    {" "}
                    <img
                      src={
                        "https://content.opencomply.io/website/architecture/plugins-and-integration.png"
                      }
                      className=" sm:min-h-[400px] sm:min-w-[350px]"
                    />
                  </div>
                </div>
              </div>
            </>
          ),
        });
        break;
        
      default:
      
        break;
    }

    return step;
  };

  return (
    <>
      <section
        aria-labelledby="code-example-title"
        className="mx-auto sm:mt-12 mt-4 w-full max-w-6xl 2xl:max-w-7xl px-3 flex flex-col justify-center items-center"
      >
        <h2
          id="code-example-title"
          className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-3xl font-semibold tracking-tighter text-transparent sm:text-5xl md:text-5xl dark:from-gray-50 dark:to-gray-300"
        >
          Full-Stack Security & Compliance
        </h2>
        <p className="sm:mt-6 mt-4 max-w-2xl text-lg tracking-tighter text-gray-800 dark:text-gray-400 px-2">
          OpenComply makes security & compliance radically simple.
        </p>
      </section>

      <section
        aria-labelledby="code-example-title"
        className="mx-auto sm:mt-28 mt-8 w-full max-w-6xl 2xl:max-w-7xl flex sm:flex-row flex-col sm:p-0 p-6 gap-4 justify-between"
      >
        <div className="w-full max-w-md relative  ">
          <div className=" sticky top-80 w-full sm:pb-80 pb-0 ">
            <div className="flex w-full items-center justify-between space-x-2 mb-1">
              <div className="font-semibold text-slate-900 w-full  dark:text-white sm:text-3xl text-2xl">
                Discover anything, instantly.
              </div>
            </div>

            <div className="text-slate-900 dark:text-white mt-4 w-full">
              <div className="flex flex-col gap-5 w-full">
                <div className="text-slate-900 dark:text-white  text-xl w-full ">
                  Gain a single source of truth across all environments,
                  regions, and platforms.
                  <br />
                  SQL for Your Entire Tech Stack.
                </div>
                {/* <div className="text-slate-900 dark:text-white font-semibold">
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
        <div className="w-full  flex flex-col  text-black">
          <div className="rounded-xl   flex flex-col gap-8 ">
            {/* <div className="font-semibold text-black text-2xl w-full text-center">
              {" "}
              Query Everything, Faster
            </div>
            <div>
              Discover anything, Instantly. SQL for Your Entire Tech Stack.
            </div> */}
            <div className="w-full flex flex-col gap-6 rounded-xl ">
              <Viewer
                height="450px"
                obj={`-- Find all unique Docker base images and counts across all repositories.
SELECT
  image AS "Base Image",
  COUNT(*) AS "Count"
FROM
  (
    SELECT
      DISTINCT sha,
      jsonb_array_elements_text(images) AS image
    FROM
      github_artifact_dockerfile
  ) AS expanded
GROUP BY
  image
ORDER BY
  "Count" DESC;
`}
              />
              <div className="bg-[#282A36] rounded-xl p-4 w-full">
                <div className="flex flex-row flex-wrap w-full justify-between items-center pb-2">
                  <span className="text-white text-xl w-fit ">
                    Results ({Results.results})
                  </span>
                  <div className=" w-fit custom-dark-pagination">
                    <Pagination
                      currentPageIndex={page + 1}
                      pagesCount={Math.ceil(Results.results / 10)}
                      onChange={({ detail }: any) => {
                        setPage(detail.currentPageIndex - 1);
                      }}
                    />
                  </div>
                </div>
                <table className="table-auto w-full border-slate-500 p-4  rounded-lg   border-collapse   ">
                  <thead className="mb-2 rounded-xl w-full">
                    <tr className="  rounded-xl  bg-gray-900">
                      <th className="text-white text-left       p-2 sm:p-4">
                        Base Image
                      </th>
                      <th className="text-white text-left    p-1">Count</th>
                    </tr>
                  </thead>
                  <tbody className="w-full">
                    {Results.image_list
                      .slice(page * 5, (page + 1) * 5)
                      ?.map((image, index) => {
                        return (
                          <tr
                            className={`  ${
                              index <
                              Results.image_list.slice(page * 5, (page + 1) * 5)
                                .length -
                                1
                                ? " border-b border-slate-400 "
                                : ""
                            }  bg-gray-700`}
                          >
                            <td className="text-white    p-2 sm:p-4">
                              {image.image}
                            </td>
                            <td className="text-white    p-1">{image.count}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
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
        </div>
      </section>
      <section
        aria-labelledby="code-example-title"
        className="mx-auto sm:mt-60 mt-8 w-full max-w-6xl  2xl:max-w-7xl flex sm:flex-row flex-col sm:p-0 p-6 gap-4 justify-between"
      >
        <div className="w-full max-w-md relative ">
          <div className=" sticky top-80 ">
            <div className="flex w-full items-center justify-between space-x-2 mb-1">
              <div className="font-semibold text-slate-900 w-full  dark:text-white sm:text-3xl text-2xl">
                Audit for Compliance{" "}
              </div>
            </div>

            <div className="text-slate-900 dark:text-white mt-4">
              <div className="flex flex-col gap-5">
                <div className="text-slate-900 dark:text-white w-full text-xl ">
                  {" "}
                  Centralize security policy management using Policy as Code
                  across all environments, regardless of vendor, platform, or
                  region. Continuously audit to maintain compliance and enhance
                  your security posture.
                </div>
                <div className="text-slate-900 dark:text-white font-semibold">
                  Resources
                </div>

                <div className="flex flex-row gap-2 flex-wrap">
                  <a
                    target="__blank"
                    href="https://opencomply.io/compliance/frameworks/baseline_reliability"
                    className={`p-2 border dark:border-white rounded-3xl cursor-pointer sm:hover:dark:bg-white sm:hover:bg-blue-950 sm:hover:text-white sm:hover:dark:text-black    `}
                  >
                    Reliability Best Practices
                  </a>
                  <a
                    target="__blank"
                    href="https://opencomply.io/compliance/frameworks/baseline_security"
                    className={`p-2 border dark:border-white rounded-3xl cursor-pointer sm:hover:dark:bg-white sm:hover:bg-blue-950 sm:hover:text-white sm:hover:dark:text-black    `}
                  >
                    Security Best Practices
                  </a>
                  <a
                    target="__blank"
                    href="https://opencomply.io/compliance/frameworks/azure_fedramp_high"
                    className={`p-2 border dark:border-white rounded-3xl cursor-pointer sm:hover:dark:bg-white sm:hover:bg-blue-950 sm:hover:text-white sm:hover:dark:text-black    `}
                  >
                    FedRAMP
                  </a>
                  <a
                    href="https://opencomply.io/compliance/frameworks/aws_hipaa_final_omnibus_security_rule_2013"
                    target="__blank"
                    className={`p-2 border dark:border-white rounded-3xl cursor-pointer sm:hover:dark:bg-white sm:hover:bg-blue-950 sm:hover:text-white sm:hover:dark:text-black    `}
                  >
                    HIPAA
                  </a>
                  <a
                    href="https://opencomply.io/compliance/frameworks/azure_cis_v200"
                    target="__blank"
                    className={`p-2 border dark:border-white rounded-3xl cursor-pointer sm:hover:dark:bg-white sm:hover:bg-blue-950 sm:hover:text-white sm:hover:dark:text-black    `}
                  >
                    CIS
                  </a>
                  <a
                    href="https://opencomply.io/compliance/frameworks/aws_cisa_cyber_essentials"
                    target="__blank"
                    className={`p-2 border dark:border-white rounded-3xl cursor-pointer sm:hover:dark:bg-white sm:hover:bg-blue-950 sm:hover:text-white sm:hover:dark:text-black    `}
                  >
                    CISA Cyber Essentials
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  flex flex-col gap-10 text-black">
          {/* <div className="rounded-xl  flex flex-col gap-4 ">
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
          </div> */}
          <div
            className="relative sm:inline hidden       animate-slide-up-fade sm:ml-auto sm:w-full "
            style={{ animationDuration: "1400ms" }}
          >
            <div className="  mb-4 w-full flex flex-row gap-3 justify-between ">
              <div
                className=" w-full flex flex-col justify-center items-center custom-button cursor-pointer "
                onClick={() => {
                  setVideo(0);
                  setTime(0);
                  setWidth({
                    0: 0,
                    1: 0,
                    2: 0,
                  });
                }}
              >
                <span
                  className={`text-center w-full text-black dark:text-white  ${video % 3 == 0 && "text-indigo-500"}`}
                >
                  Automate Audits
                </span>
                <div
                  className={`w-full custom-pg-bar  bg-gray-300 dark:bg-slate-400  ${video % 3 == 0 && "active"} `}
                >
                  <div
                    id="pg-bar-0"
                    className={`bg-indigo-600  custom-pg-bar-var`}
                    style={{ width: `${width[0]}%` }}
                  ></div>
                </div>
              </div>
              <div
                className=" w-full flex flex-col justify-center items-center custom-button cursor-pointer  "
                onClick={() => {
                  setVideo(1);
                  setTime(0);
                  setWidth({
                    0: 0,
                    1: 0,
                    2: 0,
                  });
                }}
              >
                <span
                  className={`text-center w-full text-black dark:text-white  ${video % 3 == 1 && "text-indigo-500"}`}
                >
                  Promote Best Practices
                </span>
                <div
                  className={`w-full custom-pg-bar  bg-gray-300 dark:bg-slate-400  ${video % 3 == 1 && "active"} `}
                >
                  <div
                    id="pg-bar-1"
                    className={`bg-indigo-600  custom-pg-bar-var`}
                    style={{ width: `${width[1]}%` }}
                  ></div>
                </div>
              </div>
              <div
                className=" w-full flex flex-col justify-center items-center custom-button cursor-pointer  "
                onClick={() => {
                  setVideo(2);
                  setTime(0);
                  setWidth({
                    0: 0,
                    1: 0,
                    2: 0,
                  });
                }}
              >
                <span
                  className={`text-center w-full text-black dark:text-white  ${video % 3 == 2 && "text-indigo-500"}`}
                >
                  Detect Risks
                </span>
                <div
                  className={`w-full custom-pg-bar  bg-gray-300 dark:bg-slate-400  ${video % 3 == 2 && "active"} `}
                >
                  <div
                    id="pg-bar-2"
                    className={`bg-indigo-600  custom-pg-bar-var`}
                    style={{ width: `${width[2]}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className=" rounded-xl iframe-div relative sm:mx-auto mx-3 bg-transparent  mt-5 h-fit  max-w-5xl 2xl:max-w-6xl animate-slide-up-fade sm:ml-auto sm:w-full ">
              <iframe
                src={URLS[video]}
                loading="lazy"
                title="Website - Product Tour"
                allow="clipboard-write"
                frameBorder="0"
                allowFullScreen={true}
                className="iframe-div-frame rounded-xl"
              ></iframe>
            </div>
          </div>
          <div
            className="relative sm:hidden  flex flex-col gap-16    animate-slide-up-fade sm:ml-auto sm:w-full "
            style={{ animationDuration: "1400ms" }}
          >
            <div className="flex flex-col gap-4">
              <div className=" w-full flex flex-col justify-center items-center custom-button cursor-pointer ">
                <span
                  className={`text-center w-full text-xl font-semibold text-black dark:text-white `}
                >
                  Automate Audits
                </span>
              </div>
              <div className=" rounded-xl iframe-div relative w-full h-full">
                <iframe
                  src={URLS[0]}
                  loading="lazy"
                  title="Website - Product Tour"
                  allow="clipboard-write"
                  frameBorder="0"
                  allowFullScreen={true}
                  className="iframe-div-frame rounded-xl w-full h-full"
                ></iframe>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className=" w-full flex flex-col justify-center items-center custom-button cursor-pointer  ">
                <span
                  className={`text-center w-full text-xl font-semibold text-black dark:text-white  `}
                >
                  Promote Best Practices
                </span>
              </div>
              <div className=" rounded-xl iframe-div relative w-full h-full">
                <iframe
                  src={URLS[1]}
                  loading="lazy"
                  title="Website - Product Tour"
                  allow="clipboard-write"
                  frameBorder="0"
                  allowFullScreen={true}
                  className="iframe-div-frame rounded-xl w-full h-full"
                ></iframe>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {" "}
              <div className=" w-full flex flex-col justify-center items-center custom-button cursor-pointer  ">
                <span
                  className={`text-center text-xl w-full font-semibold text-black dark:text-white  `}
                >
                  Detect Risks
                </span>
              </div>
              <div className=" rounded-xl iframe-div relative w-full h-full">
                <iframe
                  src={URLS[2]}
                  loading="lazy"
                  title="Website - Product Tour"
                  allow="clipboard-write"
                  frameBorder="0"
                  allowFullScreen={true}
                  className="iframe-div-frame rounded-xl w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
          {/* <div className=" rounded-xl iframe-div hidden sm:inline relative sm:mx-auto mx-3 bg-transparent  mt-20 h-fit  max-w-5xl 2xl:max-w-6xl animate-slide-up-fade sm:ml-auto sm:w-full ">
            <iframe
              src="https://tour.opencomply.io/embed/cm5q1ezs60ljjpelfs3zkfzdn?embed_v=2"
              loading="lazy"
              title="Website - Product Tour"
              allow="clipboard-write"
              frameBorder="0"
              allowFullScreen={true}
              className="iframe-div-frame rounded-xl"
            ></iframe>
          </div>
          <div className="iframe-div rounded-xl  hidden sm:inline relative sm:mx-auto mx-3 bg-transparent  mt-20 h-fit  max-w-5xl 2xl:max-w-6xl animate-slide-up-fade sm:ml-auto sm:w-full ">
            <iframe
              src="https://tour.opencomply.io/embed/cm5u6d2uf0eixx30ie910b8ad?embed_v=2"
              loading="lazy"
              title="Website - Product Tour"
              allow="clipboard-write"
              frameBorder="0"
              allowFullScreen={true}
              className="iframe-div-frame rounded-xl"
            ></iframe>
          </div> */}
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
        </div>
      </section>
      <section
        aria-labelledby="code-example-title"
        className="mx-auto sm:mt-60 mt-8 w-full max-w-6xl  2xl:max-w-7xl flex sm:flex-row flex-col sm:p-0 p-6 gap-4 justify-between"
      >
        <div className="w-full max-w-md relative ">
          <div className=" sticky top-80">
            <div className="flex w-full items-center justify-between space-x-2 mb-1">
              <div className="font-semibold text-slate-900 w-full  dark:text-white sm:text-3xl text-2xl">
                Customize opencomply
              </div>
            </div>

            <div className="text-slate-900 dark:text-white mt-4">
              <div className="flex flex-col gap-5">
                <div className="text-slate-900 dark:text-white w-full text-xl ">
                  {" "}
                  Let opencomply work for you. Here's how we make it happen.{" "}
                </div>
                {/* <div className="text-slate-900 dark:text-white font-semibold">
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
          <div className="rounded-xl   flex flex-col gap-4 ">
            {/* <div className="font-semibold text-black text-2xl w-full text-center">
              {" "}
              See everything in your tech stack
            </div> */}

            {/* <div>
              Gain a unified view of your entire tech stack—across public
              clouds, SaaS vendors, on-prem, and beyond—no matter where your
              workloads run.
            </div> */}
            <div className="flex justify-center w-full">
              <Grid
                numItems={2}
                numItemsMd={4}
                numItemsSm={4}
                className=" justify-between gap-4"
              >
                <>
                  {cards
                    ?.slice(0, window.innerWidth < 738 ? 4 : cards.length)
                    ?.map((card, index) => {
                      return (
                        <>
                          {GetSteps(card.label).length > 0 ? (
                            <>
                              {" "}
                              <Col
                                className="w-full h-full cursor-pointer"
                                onClick={() => {
                                  if (GetSteps(card.label).length > 0) {
                                    setOpen(true);
                                    setSelectedCard(card.label);
                                  }
                                }}
                              >
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
                          ) : (
                            <>
                              <Col
                                className="w-full h-full cursor-pointer"
                                onClick={() => {
                                  if (GetSteps(card.label).length > 0) {
                                    setOpen(true);
                                    setSelectedCard(card.label);
                                  }
                                }}
                              >
                                <Popover
                                  dismissButton={false}
                                   className="w-full h-full cursor-pointer grid "
                                  position="top"
                                  size="small"
                                  triggerType="custom"
                                  content="Content Coming Soon ..."
                                >
                                  <div className="flex w-full flex-col p-4 rounded-xl justify-center items-center gap-3 bg-slate-300 hover:bg-slate-400 cursor-pointer dark:bg-slate-900 hover:dark:bg-slate-950 ">
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
                                </Popover>
                              </Col>
                            </>
                          )}
                        </>
                      );
                    })}
                </>
              </Grid>
            </div>
          </div>
        </div>
      </section>

      <Modal
        size="max"
        visible={open}
        onDismiss={() => {
          setOpen(false);
          setActiveStepIndex(0);
        }}
        header={selectedCard}
        className="p-2"
      >
        <Wizard
          i18nStrings={{
            stepNumberLabel: (stepNumber) => `Step ${stepNumber}`,
            collapsedStepsLabel: (stepNumber, stepsCount) =>
              `Step ${stepNumber} of ${stepsCount}`,
            skipToButtonLabel: (step, stepNumber) => `Skip to ${step.title}`,
            navigationAriaLabel: "Steps",
            cancelButton: "",
            previousButton: "Previous",
            nextButton: "Next",
            submitButton: "Finish",
            optional: "optional",
          }}
          onNavigate={({ detail }) => {
            setActiveStepIndex(detail.requestedStepIndex);
          }}
          className=""
          activeStepIndex={activeStepIndex}
          onCancel={() => {
            setOpen(false);
            setActiveStepIndex(0);
          }}
          onSubmit={() => {
            setOpen(false);
            setActiveStepIndex(0);
          }}
          steps={GetSteps(selectedCard)}
        />
      </Modal>
    </>
  );
}

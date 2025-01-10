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
import { RenderObject } from "../Editor";
import { Col, Grid } from "@tremor/react";
import { useNavigate } from "react-router-dom";
import { ArrowAnimated } from "./ArrowAnimated";
import ThemedImage from "./ThemedImage";
import CustomPagination from "../Pagination";
import { Results } from "../../pages/landing/query_result";

const cards = [
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
    label: "Controls",
    icon: RiStickyNoteLine,
  },
  {
    label: "Frameworks",
    icon: RiBook3Line,
  },
  {
    label: "Integrations",
    icon: RiPuzzleLine,
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

export default function UseCaseNew2() {
  const [discoverOption, setDiscoverOption] = useState(-1);
  const [open, setOpen] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(1);
  const [page,setPage] = useState(0);
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
        className="mx-auto sm:mt-12 mt-4 w-full max-w-6xl 2xl:max-w-7xl px-3 flex flex-col justify-center items-center"
      >
        <h2
          id="code-example-title"
          className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-3xl font-semibold tracking-tighter text-transparent sm:text-5xl md:text-5xl dark:from-gray-50 dark:to-gray-300"
        >
          Full-Stack Compliance{" "}
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
              <RenderObject
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
          <div className=" sticky top-80">
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
          <div className="rounded-xl  flex flex-col gap-4 ">
            {/* <div className="font-semibold text-black text-2xl w-full text-center">
              {" "}
              Simplify Your Audits
            </div>
            <div>
              Conduct audits effortlessly and generate comprehensive,
              evidence-backed reports.
            </div> */}
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
                  Let Opencomply work for you. Here's how we make it happen.{" "}
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

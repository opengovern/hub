import React from "react";
import { Badge } from "../Badge";
// @ts-ignore
import video from "../../videos/2024-10-08-How_to_Customize_Controls.mp4";
import CopyToClipboard from "../CopyToClipboard";
import { Button, Popover } from "@cloudscape-design/components";
import { RiInformationLine } from "@remixicon/react";

const DISCOVER_URLS = [
  "https://www.youtube.com/embed/ZK-rNEhJIDs",
  "https://www.youtube.com/embed/BY2mTMBkuFI",
  "https://www.youtube.com/embed/joiyb6c_Ry4",
];

export default function Steps() {
  const [discoverOption, setDiscoverOption] = React.useState(0);
  return (
    <section
      aria-labelledby="features-title"
      className="mx-auto sm:mt-24 mt-4 w-full mb-16 max-w-6xl 2xl:max-w-7xl px-3 flex flex-col justify-center items-center"
    >
      {/* <Badge>How it works</Badge> */}
      <h2
        id="features-title"
        className="mt-2 mb-5 inline-block dark:text-white bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-3xl font-bold tracking-tighter text-transparent sm:text-5xl md:text-5xl dark:from-gray-50 dark:to-gray-300"
      >
        Get Started
      </h2>

      <p className="mt-2 mb-6 max-w-3xl text-lg leading-7 gap-2 text-gray-900 dark:text-gray-400 flex justify-center items-center">
        Install opencomply using Helm on Kubernetes clusters.
        <Popover
          dismissButton={false}
          position="top"
          className="mt-1"
          size="small"
          triggerType="custom"
          content={
            <span>
              Requires Kubernetes v1.29+ with minimum of 3 nodes (2 vCPUs/8 GB
              RAM).
            </span>
          }
        >
          <RiInformationLine />
        </Popover>
      </p>
      {/*
      <Button classNameName="mt-4">
        <a href="https://opencomply.io/oss" target="__blank">
          See it for yourself
        </a>
      </Button> */}
      <div className="space-y-8 w-full relative before:absolute  ">
        <div className="relative flex gap-5 flex-wrap items-center justify-center md:justify-center md:odd:flex-row group is-active">
          {/* <!-- Icon --> */}

          {/* <!-- Card --> */}
          {/* <div className="flex items-center justify-center w-10 h-10  rounded-full border border-white bg-dark-tremor-background text-slate-500 dark:text-white  group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-0  md:group-even:translate-x-1/2">
            1
          </div> */}
          {/* <div className="w-[calc(100%-4rem)]  md:w-[calc(35%-2.5rem)]  rounded"> */}
          {/* <div className="flex items-center justify-center space-x-2 mb-1"> */}
          {/* <div className="font-bold text-slate-900  dark:text-white text-2xl">
                Install
              </div> */}
          {/* <time className="font-caveat font-medium text-indigo-500">
                08/06/2023
              </time> */}
          {/* </div> */}
          {/* <div className="text-slate-500 dark:text-white  dark:text-white mt-4">
              Deploy to Kubernetes in minutes
            </div> */}
          {/* </div> */}
          <div className="md:hidden w-10 h-10"></div>
          <div className="w-[calc(100%)] md:w-[calc(70%-2.5rem)]   rounded">
            <div className="w-full">
              {/* code to copy */}
              <div className="flex  flex-row gap-2 mt-2 w-full relative">
                <div className="p-5 border dark:border-white  bg-slate-300 dark:bg-gray-900 rounded-xl w-full">
                  <code className=" text-[14px]  text-black dark:text-white">
                    <span className="text-[#8250df]">helm</span> repo add
                    opencomply https://charts.opencomply.io --force-update
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
              <div className="flex text-sm flex-wrap flex-1 justify-start md:justify-center flex-row gap-2 mt-4 ">
                <Button
                  ariaLabel="Report a bug (opens new tab)"
                  href="https://docs.opencomply.io/oss/advanced-setup/deploy-to-aws"
                  iconAlign="right"
                  iconName="external"
                  target="_blank"
                  variant="primary"
                >
                  AWS
                </Button>
                <Button
                  ariaLabel="Report a bug (opens new tab)"
                  href=" https://docs.opencomply.io/oss/advanced-setup/deploy-to-azure"
                  iconAlign="right"
                  iconName="external"
                  target="_blank"
                  variant="primary"
                >
                  Azure
                </Button>
                <Button
                  ariaLabel="Report a bug (opens new tab)"
                  href="https://docs.opencomply.io/oss/advanced-setup/deploy-on-digitalocean-linode "
                  iconAlign="right"
                  iconName="external"
                  target="_blank"
                  variant="primary"
                >
                  DigitalOcean
                </Button>
                <Button
                  ariaLabel="Report a bug (opens new tab)"
                  href="https://docs.opencomply.io/oss/advanced-setup/deploy-to-google-cloud-gke "
                  iconAlign="right"
                  iconName="external"
                  target="_blank"
                  variant="primary"
                >
                  GKE
                </Button>
                <Button
                  ariaLabel="Report a bug (opens new tab)"
                  href="https://docs.opencomply.io/oss/advanced-setup/deploy-on-digitalocean-linode"
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
          </div>
        </div>

        {/* <!-- Item #1 --> */}
        {/* <div className="relative flex flex-wrap gap-5 pt-[3rem] md:pt-[12rem] items-start justify-start md:justify-center md:odd:flex-row group is-active"> */}
        {/* <!-- Icon --> */}

        {/* <!-- Card --> */}
        {/* <div className="flex items-center justify-center w-10 h-10  rounded-full border border-white bg-dark-tremor-background  text-slate-500 dark:text-white  group-[.is-active]:text-emerald-50 shadow shrink-0  ">
            2
          </div> */}
        {/* <div className="w-[calc(100%-4rem)]  md:w-[calc(35%-2.5rem)]  rounded">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900  dark:text-white text-2xl">
                Connectf
              </div> */}
        {/* <time className="font-caveat font-medium text-indigo-500">
                08/06/2023
              </time> */}
        {/* </div>
            <div className="text-slate-500 dark:text-white  dark:text-white mt-4">
              Connect your tool with a simple read-only read in Seconds, from
              Cloud Accounts to Code Repos
            </div>
          </div>
          <div className="md:hidden w-10 h-10"></div> */}

        {/* <div className="w-[calc(100%-4rem)] md:w-[calc(65%-2.5rem)]   rounded">
            <div className="rounded-2xl bg-slate-50/40  ring-1 ring-inset ring-slate-200/50 dark:bg-gray-900/70 dark:ring-white/10">
              <div className="rounded-xl bg-white ring-1 ring-slate-900/5 dark:bg-slate-950 dark:ring-white/15">
                <video
                  className="rounded-xl w-full shadow-2xl dark:shadow-indigo-600/10"
                  autoPlay
                  loop
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="flex text-sm   flex-1 flex-wrap md:justify-start flex-row gap-2 mt-2 ">
              <Button
                ariaLabel="Report a bug (opens new tab)"
                href="/integrations/aws/setup"
                iconAlign="right"
                iconName="external"
                target="_blank"
                variant="primary"
              >
                AWS
              </Button>
              <Button
                ariaLabel="Report a bug (opens new tab)"
                href="/integrations/azure/setup"
                iconAlign="right"
                iconName="external"
                target="_blank"
                variant="primary"
              >
                Azure
              </Button>

              <Button
                ariaLabel="Report a bug (opens new tab)"
                href="/integrations/cloudflare/setup"
                iconAlign="right"
                iconName="external"
                target="_blank"
                variant="primary"
              >
                Cloudflare
              </Button>

              <Button
                ariaLabel="Report a bug (opens new tab)"
                href="/integrations/entraid/setup"
                iconAlign="right"
                iconName="external"
                target="_blank"
                variant="primary"
              >
                EntraId
              </Button>

              <Button
                ariaLabel="Report a bug (opens new tab)"
                href="/integrations/linode/setup"
                iconAlign="right"
                iconName="external"
                target="_blank"
                variant="primary"
              >
                Linode
              </Button>
              <Button
                ariaLabel="Report a bug (opens new tab)"
                href="/integrations/digitalocean/setup"
                iconAlign="right"
                iconName="external"
                target="_blank"
                variant="primary"
              >
                Digital Ocean
              </Button>

            
            </div>
          </div> */}
        {/* </div> */}

        {/* <!-- Item #2 --> */}
        {/* <div className="relative flex flex-wrap  items-start pt-[3rem]  md:pt-[10rem] gap-5 justify-center md:justify-center md:odd:flex-row group is-active"> */}
        {/* <!-- Icon --> */}

        {/* <!-- Card --> */}
        {/* <div className="flex items-center justify-center w-10 h-10  rounded-full border border-white bg-dark-tremor-background  text-slate-500 dark:text-white  group-[.is-active]:text-emerald-50 shadow shrink-0  ">
            3
          </div>
          <div className="w-[calc(100%-4rem)]  md:w-[calc(35%-2.5rem)]  rounded">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900 dark:text-white text-2xl">
                Discover
              </div>
            </div>
            <div className="text-slate-500 dark:text-white mt-4">
              <div className="flex flex-col gap-5">
                <div className="text-slate-500 dark:text-white ">
                  {" "}
                  Gain visibility into over 800+ Types of Assets across vendors,
                  environments, tools, platforms, projects, and regions.
                  Everything from Code to Cloud
                </div>
                <div className="flex flex-row gap-2 flex-wrap">
                  <div
                    className={`p-2 border dark:border-white rounded-3xl cursor-pointer hover:dark:bg-white hover:bg-blue-950 hover:text-white hover:dark:text-black  ${discoverOption == 0 && "text-bold dark:bg-white dark:text-black bg-blue-950 text-white "}  `}
                    onClick={() => {
                      setDiscoverOption(0);
                    }}
                  >
                    AI Datasets
                  </div>
                  <div
                    className={`p-2 border dark:border-white rounded-3xl cursor-pointer hover:dark:bg-white hover:bg-blue-950 hover:text-white hover:dark:text-black  ${discoverOption == 1 && "text-bold dark:bg-white dark:text-black bg-blue-950 text-white "}  `}
                    onClick={() => {
                      setDiscoverOption(1);
                    }}
                  >
                    Identities
                  </div>
                  <div
                    className={`p-2 border dark:border-white rounded-3xl cursor-pointer hover:dark:bg-white hover:bg-blue-950 hover:text-white hover:dark:text-black  ${discoverOption == 2 && "text-bold dark:bg-white dark:text-black bg-blue-950 text-white "}  `}
                    onClick={() => {
                      setDiscoverOption(2);
                    }}
                  >
                    Assets
                  </div>
                  <div
                    className={`p-2 border dark:border-white rounded-3xl cursor-pointer hover:dark:bg-white hover:bg-blue-950 hover:text-white hover:dark:text-black  ${discoverOption == 2 && "text-bold dark:bg-white dark:text-black bg-blue-950 text-white "}  `}
                    onClick={() => {
                      setDiscoverOption(2);
                    }}
                  >
                    Databases
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden w-10 h-10"></div>
          <div className="w-[calc(100%-4rem)]  md:w-[calc(65%-2.5rem)] h-full   rounded">
            <div className="rounded-2xl bg-slate-50/40 p-2 ring-1 h-full ring-inset ring-slate-200/50 dark:bg-gray-900/70 dark:ring-white/10">
              <div className="rounded-xl h-full bg-white ring-1 ring-slate-900/5 dark:bg-slate-950 dark:ring-white/15">
                <iframe
                  height={"400"}
                  width={"100%"}
                  className="rounded-xl  w-full shadow-2xl dark:shadow-indigo-600/10"
                  src={DISCOVER_URLS[discoverOption]}
                ></iframe>
              </div>
            </div>
            {/* <div className="mt-[3rem] ml-4">some texts goes here also</div> */}
        {/* </div>
        </div> */}

        {/* <!-- Item #3 --> */}
        {/* <div className="relative flex flex-wrap pt-[3rem]  md:pt-[10rem] items-start justify-center gap-5 md:justify-center  group is-active"> */}
        {/* <!-- Icon --> */}

        {/* <!-- Card --> */}
        {/* <div className="flex items-center justify-center w-10 h-10  rounded-full border border-white bg-dark-tremor-background  text-slate-500 dark:text-white  group-[.is-active]:text-emerald-50 shadow shrink-0  ">
            4
          </div> */}
        {/* <div className="w-[calc(100%-4rem)]   md:w-[calc(35%-2.5rem)]  rounded">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900 dark:text-white text-2xl">
                Audit
              </div> */}
        {/* <time className="font-caveat font-medium text-indigo-500">
                10/06/2023
              </time> */}
        {/* </div> */}
        {/* <div className="text-slate-500 dark:text-white mt-4">
              Audit your platform against Industry standards, Regulatory
              Frameworks, Developer Best Practices.
            </div>
          </div>
          <div className="md:hidden w-10 h-10"></div>
          <div className="w-[calc(100%-4rem)]  md:w-[calc(65%-2.5rem)]  rounded">
            <div className="rounded-2xl bg-slate-50/40 p-2 ring-1 ring-inset ring-slate-200/50 dark:bg-gray-900/70 dark:ring-white/10">
              <div className="rounded-xl bg-white ring-1 ring-slate-900/5 dark:bg-slate-950 dark:ring-white/15">
                <iframe
                  height={"400"}
                  width={"100%"}
                  className="rounded-xl  w-full shadow-2xl dark:shadow-indigo-600/10"
                  src={DISCOVER_URLS[discoverOption]}
                ></iframe>
              </div>
            </div>
            <div className="flex text-sm flex-wrap  flex-1 justify-center flex-row gap-2 mt-2 ">
              <Button
                ariaLabel="Report a bug (opens new tab)"
                href="https://opencomply.io/compliance/frameworks"
                iconAlign="right"
                iconName="external"
                target="_blank"
                variant="primary"
              >
                40+ Compliance Frameworks
              </Button>
            </div>
          </div>
        </div> */}

        {/* <!-- Item #4 --> */}
        {/* <div className="relative flex flex-wrap items-start gap-5 pt-[3rem]  md:pt-[3rem]   justify-center md:justify-center  group is-active"> */}
        {/* <!-- Icon --> */}
        {/* <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-dark-tremor-background  text-slate-500 dark:text-white  group-[.is-active]:text-emerald-50 shadow shrink-0  ">
            5
          </div> */}
        {/* <div className="w-[calc(100%-4rem)]  md:w-[calc(35%-2.5rem)] rounded">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900 dark:text-white text-2xl">
                Customize
              </div> */}
        {/* <time className="font-caveat font-medium text-indigo-500">
                12/06/2023
              </time> */}
        {/* </div>
            <div className="text-slate-500 dark:text-white mt-4">
              <div className="flex flex-col gap-5">
                <div className="text-slate-500 dark:text-white ">
                  {" "}
                  Customize Compliance Controls, Frameworks as needed
                </div> */}
        {/* <div className="flex flex-row gap-2 flex-wrap">
                  <div
                    className="p-2 border dark:border-white rounded-3xl cursor-pointer"
                    onClick={() => {
                      setDiscoverList(1);
                    }}
                  >
                    Define Frameworks
                  </div>
                  <div
                    className="p-2 border dark:border-white rounded-3xl cursor-pointer"
                    onClick={() => {
                      setDiscoverList(2);
                    }}
                  >
                    Custom Controls
                  </div>
                </div> */}
        {/* </div>
            </div>
          </div> */}
        {/* <div className="md:hidden w-10 h-10"></div> */}
        {/* <!-- Card --> */}
        {/* <div className="w-[calc(100%-4rem)]  md:w-[calc(65%-2.5rem)]  rounded">
            <div className="rounded-2xl bg-slate-50/40 p-2 ring-1 ring-inset ring-slate-200/50 dark:bg-gray-900/70 dark:ring-white/10">
              <div className="rounded-xl bg-white ring-1 ring-slate-900/5 dark:bg-slate-950 dark:ring-white/15">
                <iframe
                  height={"400"}
                  width={"100%"}
                  className="rounded-xl  w-full shadow-2xl dark:shadow-indigo-600/10"
                  src={DISCOVER_URLS[discoverOption]}
                ></iframe>
              </div>
            </div>
            <div className="flex text-sm flex-wrap  flex-1 justify-center flex-row gap-2 mt-2 ">
              <Button
                ariaLabel="Report a bug (opens new tab)"
                href="https://docs.opencomply.io/oss/guide/compliance-framework/write-a-framework"
                iconAlign="right"
                iconName="external"
                target="_blank"
                variant="primary"
              >
                Define Frameworks
              </Button>
              <Button
                ariaLabel="Report a bug (opens new tab)"
                href="https://docs.opencomply.io/oss/guide/controls/write-your-first-control"
                iconAlign="right"
                iconName="external"
                target="_blank"
                variant="primary"
              >
                Custom Controls
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
        {/* </div>
          </div> 
        </div> */}

        {/* <!-- Item #5 --> */}
      </div>
    </section>
  );
}

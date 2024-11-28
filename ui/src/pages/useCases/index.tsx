import { Button, Container, FormField, Header, Input, KeyValuePairs, Link, Modal, SpaceBetween, Wizard } from "@cloudscape-design/components";
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
import { useState } from "react";
// @ts-ignore
import video from "../../videos/2024-10-08-How_to_Customize_Controls.mp4";
import CopyToClipboard from "../../components/CopyToClipboard";
export default function UseCase() {
     const [activeStepIndex, setActiveStepIndex] = useState(0);
     const [open,setOpen] = useState(false)
  return (
    <main className="flex flex-col overflow-hidden">
      <HeroUseCase />

      <section
        aria-labelledby="code-example-title"
        className="mx-auto mt-28 w-full max-w-6xl px-3 flex flex-col justify-center items-center"
      >
        {/* <Badge>Developer-first</Badge> */}
        <h2
          id="code-example-title"
          className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300"
        >
          DevOps
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-center text-gray-600 dark:text-gray-400">
          Unicorn Platform is a powerful website builder for startups,
          solo-entrepreneurs and hackers. Try it for free.
        </p>
        <div
          className="mt-4 flex flex-row items-center gap-10 flex-grow flex-shrink flex-1"
          style={{ flex: "1 1 0" }}
        >
          <UseCaseCard
            title="Update Salesforce records when new or updated Google Sheets rows are detected"
            logo="https://raw.githubusercontent.com/opengovern/website/refs/heads/main/connectors/icons/github.svg"
            logo1="https://raw.githubusercontent.com/opengovern/website/refs/heads/main/connectors/icons/openai.svg"
            onClick={() => {
              setOpen(true);
            }}
            tag="tag1"
          />
          <UseCaseCard
            title="Create Google Sheets spreadsheet rows from new Salesforce custom objects"
            logo="https://raw.githubusercontent.com/opengovern/website/refs/heads/main/connectors/icons/github.svg"
            logo1="https://raw.githubusercontent.com/opengovern/website/refs/heads/main/connectors/icons/openai.svg"
            onClick={() => {
              setOpen(true);
            }}
            tag="tag1"
          />
          <UseCaseCard
            title="Create rows on Google Sheets spreadsheets for new Salesforce opportunities"
            logo="https://raw.githubusercontent.com/opengovern/website/refs/heads/main/connectors/icons/github.svg"
            logo1="https://raw.githubusercontent.com/opengovern/website/refs/heads/main/connectors/icons/openai.svg"
            onClick={() => {
              setOpen(true);
            }}
            tag="tag1"
          />
        </div>
      </section>
      <section
        aria-labelledby="code-example-title"
        className="mx-auto mt-28 w-full max-w-6xl px-3 flex flex-col justify-center items-center"
      >
        {/* <Badge>Developer-first</Badge> */}
        <h2
          id="code-example-title"
          className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300"
        >
          Security
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-center text-gray-600 dark:text-gray-400 ">
          Unicorn Platform is a powerful website builder for startups,
          solo-entrepreneurs and hackers. Try it for free.
        </p>
        <div
          className="mt-4 flex flex-row items-center gap-10  "
          style={{ flex: "1 1 0" }}
        >
          <UseCaseCard
            title="Update Salesforce records when new or updated Google Sheets rows are detected"
            logo="https://raw.githubusercontent.com/opengovern/website/refs/heads/main/connectors/icons/github.svg"
            logo1="https://raw.githubusercontent.com/opengovern/website/refs/heads/main/connectors/icons/openai.svg"
            onClick={() => {
              setOpen(true);
            }}
            tag="tag1"
          />
          <UseCaseCard
            title="Create Google Sheets spreadsheet rows from new Salesforce custom objects"
            logo="https://raw.githubusercontent.com/opengovern/website/refs/heads/main/connectors/icons/github.svg"
            logo1="https://raw.githubusercontent.com/opengovern/website/refs/heads/main/connectors/icons/openai.svg"
            onClick={() => {
              setOpen(true);
            }}
            tag="tag1"
          />
          <UseCaseCard
            title="Create rows on Google Sheets spreadsheets for new Salesforce opportunities"
            logo="https://raw.githubusercontent.com/opengovern/website/refs/heads/main/connectors/icons/github.svg"
            logo1="https://raw.githubusercontent.com/opengovern/website/refs/heads/main/connectors/icons/openai.svg"
            onClick={() => {
              setOpen(true);
            }}
            tag="tag1"
          />
        </div>
      </section>
      <section
        aria-labelledby="code-example-title"
        className="mx-auto mt-28 w-full max-w-6xl px-3 flex flex-col justify-center items-center"
      >
        {/* <Badge>Developer-first</Badge> */}
        <h2
          id="code-example-title"
          className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300"
        >
          CloudOps
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-center text-gray-600 dark:text-gray-400">
          Descript Unicorn Platform is a powerful website builder for startups,
          solo-entrepreneurs and hackers. Try it for free.ion
        </p>
        <div
          className="mt-4 flex flex-row items-center gap-10 flex-1"
          style={{ flex: "1 1 0" }}
        >
          <UseCaseCard
            title="Update Salesforce records when new or updated Google Sheets rows are detected"
            logo="https://raw.githubusercontent.com/opengovern/website/refs/heads/main/connectors/icons/github.svg"
            logo1="https://raw.githubusercontent.com/opengovern/website/refs/heads/main/connectors/icons/openai.svg"
            onClick={() => {
              setOpen(true);
            }}
            tag="tag1"
          />
          <UseCaseCard
            title="Create Google Sheets spreadsheet rows from new Salesforce custom objects"
            logo="https://raw.githubusercontent.com/opengovern/website/refs/heads/main/connectors/icons/github.svg"
            logo1="https://raw.githubusercontent.com/opengovern/website/refs/heads/main/connectors/icons/openai.svg"
            onClick={() => {
              setOpen(true);
            }}
            tag="tag1"
          />
          <UseCaseCard
            title="Create rows on Google Sheets spreadsheets for new Salesforce opportunities"
            logo="https://raw.githubusercontent.com/opengovern/website/refs/heads/main/connectors/icons/github.svg"
            logo1="https://raw.githubusercontent.com/opengovern/website/refs/heads/main/connectors/icons/openai.svg"
            onClick={() => {
              setOpen(true);
            }}
            tag="tag1"
          />
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
    </main>
  );
}

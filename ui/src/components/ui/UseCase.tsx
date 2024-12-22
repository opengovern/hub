import {
  Button,
  Container,
  FormField,
  Header,
  Input,
  KeyValuePairs,
  Link,
  Modal,
  SpaceBetween,
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
import { useState } from "react";
// @ts-ignore
import video from "../../videos/2024-10-08-How_to_Customize_Controls.mp4";
import CopyToClipboard from "../../components/CopyToClipboard";


const CARDS = {
  DevOps: [
    {
      title: "Centralize Visibility",
      description:
        "Aggregate assets/configs in one spot. Query with SQL for rapid oversight.",
    },
    {
      title: "Identify Risky Configurations",
      description: "Spot insecure setups that could expose sensitive data.",
    },
    {
      title: "Identify Vulnerable Deployments ",
      description:
        "Spot vulnerabilities in builds and deployments early for secure releases.",
    },
    {
      title: "Maintain Policy as Code ",
      description:
        "Store compliance rules in Git for easy audits and repeatable enforcement.",
    },
    {
      title: "Eliminate Unused Resources",
      description:
        "Remove idle services to cut costs and reduce hidden security threats.",
    },
    {
      title: "Detect non-compliance in Builds",
      description:
        "Spot vulnerabilities and non-compliance in builds and deployments early for secure releases.",
    },
  ],
  Security: [
    {
      title: "Centralize Visibility",
      description:
        "Aggregate assets/configs in one spot. Query with SQL for rapid oversight.",
    },
    {
      title: "Streamline Incident Response ",
      description:
        "Automate detection/resolution to quickly fix misconfigs and limit damage.",
    },
    {
      title: "Govern Identities",
      description:
        "Track roles/permissions, remove overlaps, and reduce overprivilege.",
    },
    {
      title: "Identify Vulnerable Deployments ",
      description:
        "Spot vulnerabilities in builds and deployments early for secure releases.",
    },
    {
      title: "Maintain Policy as Code ",
      description:
        "Store compliance rules in Git for easy audits and repeatable enforcement.",
    },
    {
      title: "Centralize Compliance",
      description:
        "Centralize compliance across your stack for easy oversight and enforcement.",
    },
  ],
  MLOps: [],
};
const STEPS = {
    0: "DevOps",
    1: "Security",
    2: "MLOps",
}



export default function UseCase() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [open, setOpen] = useState(false);
  return (
    <section
      aria-labelledby="code-example-title"
      className="mx-auto mt-28 w-full max-w-6xl  flex flex-col justify-center items-center"
    >
      {/* <Badge>Developer-first</Badge> */}
      <h2
        id="code-example-title"
        className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300"
      >
        UseCases
      </h2>
      <p className="mt-6 mb-4 max-w-2xl text-lg text-center text-gray-600 dark:text-gray-400">
        Unicorn Platform is a powerful website builder for startups,
        solo-entrepreneurs and hackers. Try it for free.
      </p>
      <div className="p-1 mb-6 mt-4 dark:bg-white bg-[#5c5c5cd5]    w-1/2 rounded-full flex flex-row gap-3">
        <div
          onClick={() => {
            setActiveStepIndex(0);
          }}
          className={`text-white dark:text-black  rounded-full w-full text-center hover:bg-indigo-200 p-3 cursor-pointer ${activeStepIndex == 0 && "bg-indigo-500 text-white dark:text-white"}`}
        >
          DevOps
        </div>
        <div
          onClick={() => {
            setActiveStepIndex(1);
          }}
          className={`text-white dark:text-black  rounded-full w-full text-center hover:bg-indigo-200 p-3 cursor-pointer ${activeStepIndex == 1 && "bg-indigo-500 text-white dark:text-white"}`}
        >
          Security
        </div>
        <div
          onClick={() => {
            setActiveStepIndex(2);
          }}
          className={`text-white dark:text-black  rounded-full w-full text-center hover:bg-indigo-200 p-3 cursor-pointer ${activeStepIndex == 2 && "bg-indigo-500 text-white dark:text-white"}`}
        >
          MLOps
        </div>
      </div>
      <div
        className="mt-4 flex flex-row  flex-wrap gap-10 flex-grow flex-shrink flex-1 justify-start"
        style={{ flex: "1 1 0" }}
      >
        {
          // @ts-ignore
          CARDS[STEPS[activeStepIndex]].map((card, index) => (
            <>
              {/* <div className="bg-[#5c5c5cd5] w-[calc(33%-calc(2rem/3))]  dark:bg-[#3f4344] rounded-xl flex flex-col gap-4 p-4">
                <div className="">
                  <h3 className="text-xl font-bold text-white dark:text-white">
                    {card.title}
                  </h3>
                </div>
                <div>
                  <p className="text-white dark:text-gray-200">
                    {card.description}
                  </p>
                </div>
              </div> */}
              <div className="w-[calc(33%-calc(2rem))]">
                <UseCaseCard
                  title={card.title}
                  description={card.description}
                  logo=""
                  logo1=""
                  onClick={() => {}}
                  // description={card.description}
                />
              </div>
            </>
          ))
        }
      </div>
    </section>
  );
}

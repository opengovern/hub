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
import { RiGroup2Line } from "@remixicon/react";
import { RenderObject } from "../Editor";

export default function UseCaseNew() {
  const [discoverOption, setDiscoverOption] = useState(0);

  return (
    <>
      <section
        aria-labelledby="code-example-title"
        className="mx-auto mt-28 w-full max-w-6xl px-3 flex flex-col justify-center items-center"
      >
        <h2
          id="code-example-title"
          className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300"
        >
          The Advantage
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          Govern your entire stack. See what matters. Secure every deployment
          and change.
        </p>
       
      </section>
      <section
        aria-labelledby="code-example-title"
        className="mx-auto mt-28 w-full max-w-6xl  flex flex-row gap-4 justify-between"
      >
        <div className="w-100 max-w-md relative ">
          <div className=" sticky top-20">
            <div className="flex w-100 items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900  dark:text-white text-2xl">
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  flex flex-col gap-10 text-black">
          <div className="rounded-xl dark:bg-[#e4e3e3] p-8 flex flex-col gap-10 ">
            <div className="font-bold text-black text-2xl w-full text-center">
              {" "}
              Container Vulnerabilities
            </div>
            <div>
              Gain a single source of truth across platforms and
              environments—saving time, reducing overhead, and enabling teams to
              quickly spot and address risks before they escalate.
            </div>
            <div className="flex flex-row justify-between gap-4 ">
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
          </div>
          <div className="rounded-xl dark:bg-[#e4e3e3] p-8 flex flex-col gap-10 ">
            <div className="font-bold text-black text-2xl w-full text-center">
              {" "}
              Automate Threat Detection
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
          <div className="rounded-xl dark:bg-[#e4e3e3] p-8 flex flex-col gap-10 ">
            <div className="font-bold text-black text-2xl w-full text-center">
              {" "}
              Audit for Compliance
            </div>
            <div>
              Define consistent rules with Policy as Code and apply them across
              vendors, platforms, and regions. Continuously audit to maintain
              compliance and strengthen your security posture.
            </div>
            <div>
              <RenderObject
                obj={{
                  repo_full_name: "text",
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <section
        aria-labelledby="code-example-title"
        className="mx-auto mt-28 w-full max-w-6xl  flex flex-row gap-4 justify-between"
      >
        <div className="w-100 max-w-md relative ">
          <div className=" sticky top-20">
            <div className="flex w-100 items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900  dark:text-white text-2xl">
                Automate Threat Detection{" "}
              </div>
            </div>

            <div className="text-slate-500 dark:text-white mt-4">
              <div className="flex flex-col gap-5">
                <div className="text-slate-500 dark:text-white ">
                  {" "}
                  Proactively detect misconfigurations, vulnerabilities, and
                  policy violations in real time—freeing engineering resources
                  to focus on innovation rather than manual security
                  firefighting.
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  flex flex-col gap-10 text-black">
          <div className="rounded-xl dark:bg-[#e4e3e3] p-8 flex flex-col gap-10 ">
            <div className="font-bold text-black text-2xl w-full text-center">
              {" "}
              Container Vulnerabilities
            </div>
            <div>
              Gain a single source of truth across platforms and
              environments—saving time, reducing overhead, and enabling teams to
              quickly spot and address risks before they escalate.
            </div>
            <div className="flex flex-row justify-between gap-4 ">
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
          </div>
          <div className="rounded-xl dark:bg-[#e4e3e3] p-8 flex flex-col gap-10 ">
            <div className="font-bold text-black text-2xl w-full text-center">
              {" "}
              Automate Threat Detection
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
          <div className="rounded-xl dark:bg-[#e4e3e3] p-8 flex flex-col gap-10 ">
            <div className="font-bold text-black text-2xl w-full text-center">
              {" "}
              Audit for Compliance
            </div>
            <div>
              Define consistent rules with Policy as Code and apply them across
              vendors, platforms, and regions. Continuously audit to maintain
              compliance and strengthen your security posture.
            </div>
            <div>
              <RenderObject
                obj={{
                  repo_full_name: "text",
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <section
        aria-labelledby="code-example-title"
        className="mx-auto mt-28 w-full max-w-6xl  flex flex-row gap-4 justify-between"
      >
        <div className="w-100 max-w-md relative ">
          <div className=" sticky top-20">
            <div className="flex w-100 items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900  dark:text-white text-2xl">
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
                <div className="flex flex-row gap-2 flex-wrap">
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  flex flex-col gap-10 text-black">
          <div className="rounded-xl dark:bg-[#e4e3e3] p-8 flex flex-col gap-10 ">
            <div className="font-bold text-black text-2xl w-full text-center">
              {" "}
              Container Vulnerabilities
            </div>
            <div>
              Gain a single source of truth across platforms and
              environments—saving time, reducing overhead, and enabling teams to
              quickly spot and address risks before they escalate.
            </div>
            <div className="flex flex-row justify-between gap-4 ">
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
          </div>
          <div className="rounded-xl dark:bg-[#e4e3e3] p-8 flex flex-col gap-10 ">
            <div className="font-bold text-black text-2xl w-full text-center">
              {" "}
              Automate Threat Detection
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
          <div className="rounded-xl dark:bg-[#e4e3e3] p-8 flex flex-col gap-10 ">
            <div className="font-bold text-black text-2xl w-full text-center">
              {" "}
              Audit for Compliance
            </div>
            <div>
              Define consistent rules with Policy as Code and apply them across
              vendors, platforms, and regions. Continuously audit to maintain
              compliance and strengthen your security posture.
            </div>
            <div>
              <RenderObject
                obj={{
                  repo_full_name: "text",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

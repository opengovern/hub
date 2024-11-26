import React from "react";
import { Badge } from "../Badge";
import { Button } from "../Button";

const stats = [
  {
    name: "Unified Governance",
    value:
      "Govern across your stack, detect flaws instantly across clouds, environments, platforms, and tools.",
  },
  {
    name: "Automated Compliance",
    value:
      "Track drifts, enforce standards, capture evidence. Leverage 50+ frameworks and 2,000+ pre-built controls.",
  },
  {
    name: "Rich Integrations",
    value:
      "Connect your CI/CD, SAST, DAST to see every risks and key events across your entire stack, from code to cloud.",
  },
  {
    name: "Developer Friendly",
    value:
      "Manage policies in Git and embed checks into workflows for continuous governance across any cloud. No DSL, custom extensions, or scripts.",
  },
  {
    name: "Enterprise Ready",
    value:
      "Enterprise-grade security & compliance. SSO, SSL, agentless. Deploy fast.",
  },
];

export default function Advantage() {
  return (
    <section
      aria-labelledby="features-title"
      className="mx-auto mt-44 w-full max-w-6xl px-3 flex flex-col justify-center items-center"
    >
      <Badge>Security at Scale</Badge>
      {/* <h2
        id="features-title"
        className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300"
      >
        Compliance Simplified
      </h2>
      <p className="mt-6 max-w-3xl text-lg leading-7 text-gray-600 dark:text-gray-400">
        Managing code, data, and applications across multiple clouds and
        platforms is complex. Traditional compliance methods can’t keep up.
        That’s why we built opencomply—a centralized solution for your entire
        tech stack. OpenComply gathers all your data and uses simple SQL to
        manage compliance consistently across all environments. With opencomply,
        you can oversee and control deployments, configurations, and networks on
        every platform.
      </p>

      <Button className="mt-4">
        <a href="https://opencomply.io/oss" target="__blank">
          See it for yourself
        </a>
      </Button> */}
      <dl className="mt-12 grid grid-cols-1  gap-y-9 md:grid-cols-5 justify-center items-center md:border-y md:border-gray-200 md:py-14 dark:border-gray-800">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <div className="border-l-2 border-indigo-100 pl-4 pr-8 md:border-l md:text-center lg:border-gray-200 lg:first:border-none dark:border-indigo-900 lg:dark:border-gray-800">
              <dd className="inline-block bg-gradient-to-t from-indigo-900 to-indigo-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent lg:text-4xl dark:from-indigo-700 dark:to-indigo-400">
                {stat.name}
              </dd>
              <dt className="mt-1 text-gray-600 dark:text-gray-400">
                {stat.value}
              </dt>
            </div>
          </React.Fragment>
        ))}
      </dl>
    </section>
  );
}

import React from "react"
import { Badge } from "../Badge"
import { Button } from "../Button";

const stats = [
  {
    name: "Bandwith increase",
    value: "+162%",
  },
  {
    name: "Better storage efficiency",
    value: "2-3x",
  },
  {
    name: "Rows ingested / second",
    value: "Up to 9M",
  },
]

export default function Features() {
  return (
    <section
      aria-labelledby="features-title"
      className=" mt-24 w-full max-w-6xl px-10 mx-auto border dark:border-white ring-1 bg-[#59759c]  ring-tremor-background-emphasis p-3 rounded-xl  flex flex-col justify-start items-start"
    >
      {/* <Badge>Security at Scale</Badge> */}
      <h2
        id="features-title"
        className="mt-2 inline-block text-white text-start w-full bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300"
      >
        The Problem with compliance
      </h2>
      <p className="mt-6   text-lg max-w-xl  text-left leading-7 text-white dark:text-white">
        Managing code, data, and applications across multiple clouds and
        platforms is complex. Traditional compliance methods can’t keep up.
        <br />
        <br />
        That’s why we built opencomply- a centralized solution for your entire
        tech stack. OpenComply gathers all your data and uses simple SQL to
        manage compliance consistently across all environments.
        <br />
        <br />
        With opencomply, you can oversee and control deployments,
        configurations, and networks on every platform.
        <br />
        <br />
        <b className="dark:text-white font-bold">
          Don't take our word for it, experience it.
        </b>
      </p>
      {/* <div className="mt-4 w-full text-center">
        <Button className="mt-4 ">
          <a href="https://opencomply.io/oss" target="__blank">
            See it for yourself
          </a>
        </Button>
      </div> */}
      {/* <dl className="mt-12 grid grid-cols-1 gap-y-8 md:grid-cols-3 md:border-y md:border-gray-200 md:py-14 dark:border-gray-800"> */}
      {/* {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <div className="border-l-2 border-indigo-100 pl-6 md:border-l md:text-center lg:border-gray-200 lg:first:border-none dark:border-indigo-900 lg:dark:border-gray-800">
              <dd className="inline-block bg-gradient-to-t from-indigo-900 to-indigo-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent lg:text-6xl dark:from-indigo-700 dark:to-indigo-400">
                {stat.value}
              </dd>
              <dt className="mt-1 text-gray-600 dark:text-gray-400">
                {stat.name}
              </dt>
            </div>
          </React.Fragment>
        ))} */}
      {/* </dl> */}
    </section>
  );
}

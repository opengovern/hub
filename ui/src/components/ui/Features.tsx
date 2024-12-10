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
      className="custom-container mt-24 w-full max-w-6xl px-3 sm:px-60 py-12 mx-auto border dark:border-white ring-1 bg-white  ring-tremor-background-emphasis  rounded-xl  flex flex-col justify-start items-start"
    >
      {/* <Badge>Security at Scale</Badge> */}
      <h2
        id="features-title"
        className=" inline-block text-black text-start w-full bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter  sm:text-4xl md:text-4xl "
      >
        The Problem with compliance
      </h2>
      <p className="mt-6   text-lg max-w-xl  text-left leading-7 text-black dark:text-black">
        For too long,
        <b>compliance has been a convoluted mess</b>
        {/* <br />
        <br /> */}
        Buried in proprietary tools, tangled in abstract rules, and disconnected
        from how real teams work.{" "}
        <b>
          You’re left guessing what matters, wrestling with black-box mandates,
          and wasting time on SOC2 hoops without any real improvement.
        </b>{" "}
        {/* <br /> */}
        {/* <br /> */}
        That’s not clarity. That’s just busywork. Compliance should guide, not
        confuse. It should align with the way you build and deliver software,
        not impose brittle workflows and vague rules.
        <b>It’s time to move beyond guessing games</b> and treat compliance as
        an integral, empowering part of your process.
        <br />
        <br />
        <b> Welcome to opencomply.</b>
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

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

export default function Features2() {
  return (
    <section
      aria-labelledby="features-title"
      className=" bg-gray-100 dark:bg-gray-900 my-12"
    >
      {/* <Badge>Security at Scale</Badge> */}
      <div className=" sm:mt-24 mt-4 sm:mb-24 mb-4 max-w-6xl 2xl:max-w-7xl px-3 sm:px-36 py-12 mx-auto       rounded-xl  flex flex-col justify-start items-start">
        <h2
          id="features-title"
          className=" inline-block text-slate-950 dark:text-slate-50 text-start w-full bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter  sm:text-4xl md:text-4xl "
        >
          Security and Compliance: It doesn't have to hurt{" "}
        </h2>
        <p className="mt-6   text-lg max-w-3xl  text-left leading-7 text-slate-950 dark:text-slate-50">
          {/* <b>Compliance is painful.</b> <br />
        <br /> */}
          <b>Let's be honest. </b>Security and compliance tools often get in the
          way of progress. They are proprietary, expensive, rigid, and often
          ill-equipped to handle modern tech stacks.
          <br />
          <br />
          We believe security and compliance should&nbsp;
          <b>empower</b> your team, not hold them back. That's why we created
          OpenComply—a platform built by doers, for doers.
          <br />
          <br />
          OpenComply makes security and compliance
          <span className=" cursor-pointer ">
            <b>
              <mark className="bg-gradient-to-br from-indigo-900 to-indigo-600 text-white p-2  mx-1 text-center rounded-xl">
                {" "}
                accessible,
              </mark>
            </b>
          </span>
          <span className=" cursor-pointer ">
            <b>
              <mark className="btn-grad1 p-2  mx-1 text-center rounded-xl">
                {" "}
                agile,
              </mark>
              
            </b>
          </span>{" "}
          <span className=" cursor-pointer ">
            <b>
              <mark className="btn-grad2 p-2  mx-1 text-center rounded-xl">
               and  inclusive.
              </mark>
              
            </b>
          </span>
          <br />
          <br />
          Break down security and compliance barriers. Focus on building
          exceptional products.
          <br />
          <br />
          <b> Welcome to opencomply.</b>
        </p>
      </div>
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

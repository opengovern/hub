import React from "react";
import { Badge } from "../Badge";
import { Button } from "../Button";



export default function Steps() {
  return (
    <section
      aria-labelledby="features-title"
      className="mx-auto mt-44 w-full max-w-6xl px-3 flex flex-col justify-center items-center"
    >
      {/* <Badge>How it works</Badge> */}
      <h2
        id="features-title"
        className="mt-2 mb-5 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300"
      >
        How it works
      </h2>
      {/*
      <p classNameName="mt-6 max-w-3xl text-lg leading-7 text-gray-600 dark:text-gray-400">
        Managing code, data, and applications across multiple clouds and
        platforms is complex. Traditional compliance methods can’t keep up.
        That’s why we built opencomply—a centralized solution for your entire
        tech stack. OpenComply gathers all your data and uses simple SQL to
        manage compliance consistently across all environments. With opencomply,
        you can oversee and control deployments, configurations, and networks on
        every platform.
      </p>

      <Button classNameName="mt-4">
        <a href="https://opencomply.io/oss" target="__blank">
          See it for yourself
        </a>
      </Button> */}
      <div className="space-y-8 w-full relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        {/* <!-- Item #1 --> */}
        <div className="relative flex gap-5 items-center justify-center md:justify-center md:odd:flex-row group is-active">
          {/* <!-- Icon --> */}

          {/* <!-- Card --> */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            {/* <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">Connect</div>
            </div>
            <div className="text-slate-500">140 chat</div> */}
            content
          </div>
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-0  md:group-even:translate-x-1/2">
            1
          </div>
          <div className="w-[calc(100%-4rem)] min-h-[200px] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">Connect</div>
              {/* <time className="font-caveat font-medium text-indigo-500">
                08/06/2023
              </time> */}
            </div>
            <div className="text-slate-500">140 chat</div>
          </div>
        </div>

        {/* <!-- Item #2 --> */}
        <div className="relative flex items-center gap-5 justify-center md:justify-center md:odd:flex-row group is-active">
          {/* <!-- Icon --> */}

          {/* <!-- Card --> */}
          <div className="w-[calc(100%-4rem)] min-h-[200px] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">Discover</div>
            </div>
            <div className="text-slate-500">140 chat</div>
          </div>
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300  text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0  ">
            2
          </div>
          <div className="w-[calc(100%-4rem)]  md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            content
          </div>
        </div>

        {/* <!-- Item #3 --> */}
        <div className="relative flex items-center justify-center gap-5 md:justify-center  group is-active">
          {/* <!-- Icon --> */}

          {/* <!-- Card --> */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            content
          </div>
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300  text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0  ">
            3
          </div>
          <div className="w-[calc(100%-4rem)] min-h-[200px]  md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">Audit</div>
              {/* <time className="font-caveat font-medium text-indigo-500">
                10/06/2023
              </time> */}
            </div>
            <div className="text-slate-500">140 chat</div>
          </div>
        </div>

        {/* <!-- Item #4 --> */}
        <div className="relative flex items-center gap-5 justify-center md:justify-center  group is-active">
          {/* <!-- Icon --> */}
          <div className="w-[calc(100%-4rem)] min-h-[200px] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">Customize</div>
              {/* <time className="font-caveat font-medium text-indigo-500">
                12/06/2023
              </time> */}
            </div>
            <div className="text-slate-500">140 chat</div>
          </div>
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300  text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0  ">
            4
          </div>
          {/* <!-- Card --> */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            content
          </div>
        </div>

        {/* <!-- Item #5 --> */}
        <div className="relative flex items-center w-full gap-5 justify-center md:justify-center  group">
          <div className="w-[calc(100%-4rem)]  md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            content
          </div>
          {/* <!-- Icon --> */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300  text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0  ">
            5
          </div>
          {/* <!-- Card --> */}
          <div className="w-[calc(100%-4rem)] min-h-[200px]  md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">Integrate</div>
              {/* <time className="font-caveat font-medium text-amber-500">
                Exp. 12/08/2023
              </time> */}
            </div>
            <div className="text-slate-500">140 chat</div>
          </div>
        </div>
      </div>
    </section>
  );
}

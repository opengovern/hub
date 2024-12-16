import Balancer from "react-wrap-balancer";
import { ChangeLogText } from "./page.js";
import { MDXProvider } from "@mdx-js/react";
import { useMDXComponents } from "../../components/mdx-components.js";
import { compile } from "@mdx-js/mdx";
import { evaluateSync } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import ReactMarkdown from "react-markdown";


export default  function  ChangeLog() {

  return (
    <main
      className="mx-auto pt-36 max-w-3xl animate-slide-up-fade px-3"
      style={{
        animationDuration: "600ms",
        animationFillMode: "backwards",
      }}
    >
      <div className="text-center">
        <h1 className="inline-block bg-gradient-to-t from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-5xl dark:from-gray-50 dark:to-gray-300">
          Changelog
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          <Balancer>
            Keep yourself informed about the most recent additions and
            improvements we&rsquo;ve made to Database.
          </Balancer>
        </p>
      </div>
      <div className="mt-28 flex sm:flex-row flex-col justify-start items-center flex-1 gap-12" style={{flex: "1 1 0"}}>
        <div className="h-full">
          <div className="relative  justify-start gap-x-14 mt-2 border-b border-gray-200 h-full dark:border-gray-800">
            <div className="mb-4 md:mb-10 md:w-1/3">
              <div className="sticky top-24 flex items-center space-x-2 md:block md:space-x-0 md:space-y-1.5">
                <span className="inline-flex items-center rounded-lg bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 dark:bg-indigo-500/20 dark:text-indigo-400 dark:ring-indigo-400/10">
                  2.0.0
                </span>
                <span className="block whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                  Dec 2024
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          {" "}
          <ReactMarkdown
            // @ts-ignore
            components={useMDXComponents({})}
            children={ChangeLogText}
          />
        </div>
      </div>
    </main>
  );
}

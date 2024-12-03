import Balancer from "react-wrap-balancer";
import Page from "./page.mdx";
import { MDXProvider } from "@mdx-js/react";
import { useMDXComponents } from "../../../mdx-components";
import { compile } from "@mdx-js/mdx";
import { evaluateSync } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

import {
  Bold,
  ChangelogEntry,
  CustomLink,
  H1,
  H2,
  H3,
  P,
  Ul,
} from "../../components/mdx";

import { ChangelogImage } from "../../components/mdx";


export default  function  ChangeLog() {
 
let customComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  Bold: Bold,
  ul: Ul,
  a: CustomLink,
  ChangelogEntry: ChangelogEntry,
  ChangelogImage: ChangelogImage,
};
const { default: MDXContent } =  evaluateSync("./page.mdx", runtime);
console.log(MDXContent)
  return (
    <main
      className="mx-auto mt-36 max-w-3xl animate-slide-up-fade px-3"
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
      <div className="mt-28">
        <MDXProvider components={customComponents}>
          <Page />
        </MDXProvider>
      </div>
    </main>
  );
}

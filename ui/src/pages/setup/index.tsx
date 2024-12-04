import { useParams } from "react-router-dom";
import { Badge } from "../../components/Badge";
import { Button } from "../../components/Button";
import { Label } from "../../components/Label";
import { Switch } from "../../components/Switch";
import { Tooltip } from "../../components/Tooltip";
import { ArrowAnimated } from "../../components/ui/ArrowAnimated";
import { Faqs } from "../../components/ui/Faqs";
import Testimonial from "../../components/ui/Testimonial";
import { cx } from "../../lib/utils";
import {
  RiCheckLine,
  RiCloudLine,
  RiInformationLine,
  RiSubtractLine,
  RiUserLine,
} from "@remixicon/react";
import React, { Fragment, useEffect, useState } from "react";
import Balancer from "react-wrap-balancer";
import ReactMarkdown from "react-markdown";
import { useMDXComponents } from "../../components/mdx-components.js";
import aws from "./aws.md"
import azure from "./azure.md";
import cloudflare from "./cloudflare.md";
import digitalocean from "./digitalocean.md";
import entraid from "./entraid.md";
import linode from "./linode.md";
import googleworkspace from "./googleworkspace.md";

const setupFiles = {
  aws,
  azure,
  cloudflare,
  digitalocean,
  entraid,
  linode,
  googleworkspace,
};


export default function Setup() {
const { id } = useParams();
const [file, setFile] = useState<string>();
const getFile = () => {
    console.log(id)
    // @ts-ignore
    fetch(setupFiles[id]).then((res) => {
      res.text().then((text) => {
        console.log(text);
        setFile(text);
      });
    });

}
useEffect(()=>{
    getFile();
},[])

  return (
    <div className="mx-auto pt-2 max-w-6xl">
      <div className="text-center">
        <h1 className="inline-block bg-gradient-to-t from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-5xl dark:from-gray-50 dark:to-gray-300">
          Setup {id?.split("_")[0].toLocaleUpperCase()}
        </h1>
      </div>
      <div className="mt-5">
        <ReactMarkdown
          // @ts-ignore
          components={useMDXComponents({})}
          children={file}
        />
      </div>
    </div>
  );
}

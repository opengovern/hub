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
import aws_cloud_account from "./aws_cloud_account.md"
import azure_subscription from "./azure_subscription.md";
import cloudflare_account from "./cloudflare_account.md";
import digitalocean_team from "./digitalocean_team.md";
import entraid_directory from "./entraid_directory.md";
import linode_account from "./linode_account.md";

const setupFiles = {
    aws_cloud_account,
    azure_subscription,
    cloudflare_account,
    digitalocean_team,
    entraid_directory,
    linode_account,
}


export default function Setup() {
const { id } = useParams();
const [file, setFile] = useState<string>();
const getFile = () => {
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
    <div className="mx-auto pt-36 max-w-6xl">
      <div className="text-center">
        <h1 className="inline-block bg-gradient-to-t from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-5xl dark:from-gray-50 dark:to-gray-300">
          Setup {id?.split("_")[0].toLocaleUpperCase()}
        </h1>
      </div>
      <div className="mt-28">
        <ReactMarkdown
          // @ts-ignore
          components={useMDXComponents({})}
          children={file}
        />
      </div>
    </div>
  );
}

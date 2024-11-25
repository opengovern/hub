//@ts-nocheck
import * as React from "react"
import type { SVGProps } from "react"
import { ReactComponent as LOGO } from "../images/logo.svg"
import ThemedImage from "./ui/ThemedImage";
export const DatabaseLogo = (props: SVGProps<SVGSVGElement>) => (
    <ThemedImage
      lightSrc={require("../images/logo-light.png")}
      darkSrc={require("../images/logo-dark.png")}
      alt="A preview of app"
      width={120}
      height={160}
      {...props}
    />
);

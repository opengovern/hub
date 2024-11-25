import clsx, { type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cx(...args: ClassValue[]) {
  return twMerge(clsx(...args))
}

// Tremor Raw focusInput [v0.0.1]

export const focusInput = [
  // base
  "focus:ring-2",
  // ring color
  "focus:ring-indigo-200 focus:dark:ring-indigo-700/30",
  // border color
  "focus:border-indigo-500 focus:dark:border-indigo-700",
]

// Tremor Raw focusRing [v0.0.1]

export const focusRing = [
  // base
  "outline outline-offset-2 outline-0 focus-visible:outline-2",
  // outline color
  "outline-indigo-500 dark:outline-indigo-500",
]

// Tremor Raw hasErrorInput [v0.0.1]

export const hasErrorInput = [
  // base
  "ring-2",
  // border color
  "border-red-500 dark:border-red-700",
  // ring color
  "ring-red-200 dark:ring-red-700/30",
]

export const getIntegrationLogo = (name: string[]) => {
  if(name?.length === 0 || !name) {
    return "https://raw.githubusercontent.com/opengovern/website/main/connectors/icons/default.svg";
  }
  const type = name[0];
  const base = "https://raw.githubusercontent.com/opengovern/website/main/connectors/icons/"
  switch (type) {
    case "azure_subscription":
      return `${base}azure.svg`;
    case "aws_cloud_account":
      return `${base}aws.svg`;
    default:
      return `${base}default.svg`;
  }
 
}

const REACT_APP_BASE_URL = "https://hub.opencomply.io";

export const getAPIUrl = () => {
   let url = "";
   if (window.location.origin === "http://localhost:3000") {
     url = REACT_APP_BASE_URL;
   } else {
     url = window.location.origin;
   }
   // @ts-ignore
   return url;
}
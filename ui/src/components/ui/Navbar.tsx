"use client"

import useScroll from "../../lib/use-scroll"
import { cx } from "../../lib/utils"
import { RiCloseLine, RiMenuLine } from "@remixicon/react"

import React, { useContext, useEffect } from "react"
import { DatabaseLogo } from "../DatabaseLogo"
import { Button } from "../Button"
import { Select, SelectItem } from "@tremor/react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../Dropdown";
import { useNavigate } from "react-router-dom"
import ThemedImage from "./ThemedImage"
import { ThemeContext } from "../../Theme"
import axios from "axios"
import {  getAPIUrl, getIntegrationLogo } from "../../lib/utils";



export function Navigation() {
  const scrolled = useScroll(15)
  const [open, setOpen] = React.useState(false)
  const [integrations, setIntegrations] = React.useState()
  const [complianceCount, setComplianceCount] = React.useState()
  const navigate = useNavigate();
  const { theme, changeTheme } = useContext(ThemeContext);
  React.useEffect(() => {
    const mediaQuery: MediaQueryList = window.matchMedia("(min-width: 768px)")
    const handleMediaQueryChange = () => {
      setOpen(false)
    }

    mediaQuery.addEventListener("change", handleMediaQueryChange)
    handleMediaQueryChange()

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
    }


  }, [])
 const getIntegrations = async () => {
   axios
     .get(
       "https://raw.githubusercontent.com/opengovern/opengovernance/refs/heads/main/assets/integrations/integrations.json"
     )
     .then((res) => {
       if (res.data) {
         const arr = res.data;
         // arr.sort(() => Math.random() - 0.5);
         setIntegrations(arr);
        
       }
     })
     .catch((err) => {
     });
 };
  const getPolcies = () => {
    const url = getAPIUrl();
    axios
      .get(`${url}/api/frameworks?per_page=10&cursor=${0}`)
      .then((res) => {
        if (res.data) {
         

          // @ts-ignore
          setComplianceCount(res.data.total);
        }
      })
      .catch((err) => {
      });
  };
  useEffect(()=>{
    getIntegrations()
    getPolcies()
  },[])

  return (
    <header
      className={cx(
        "fixed inset-x-3 top-4 z-50 mx-auto flex max-w-5xl transform-gpu animate-slide-down-fade justify-center overflow-hidden rounded-xl border border-transparent px-3 py-3 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1.03)] will-change-transform",
        open === true ? "h-62" : "h-12 sm:h-14",
        scrolled || open === true
          ? "backdrop-blur-nav max-w-4xl border-gray-100 bg-white/80 shadow-xl shadow-black/5 dark:border-white/15 dark:bg-black/70"
          : "bg-white/0 dark:bg-gray-950/0",
        `${theme}`
      )}
    >
      <div className="w-full md:my-auto">
        <div className="relative flex items-center justify-between w-full">
          <a href={"/"} aria-label="Home">
            <span className="sr-only">Company logo</span>
            <DatabaseLogo className="w-28 md:w-32" />
          </a>
          <nav className="hidden w-f md:absolute md:left-[58%] md:top-1/2 md:block md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
            <div className="flex items-center justify-center gap-10 font-medium">
              {" "}
              <a
                className="px-2 py-1 min-w-fit text-gray-900 dark:text-gray-50"
                href={"https://docs.opencomply.io/"}
                target="_blank"
              >
                Docs
              </a>
              <a
                className="px-2 py-1 min-w-fit text-gray-900 dark:text-gray-50"
                href={"/integrations"}
              >
                {/* @ts-ignore */}
                Integrations {integrations && `(${integrations?.length})`}
              </a>
              <a
                className="px-2 py-1 w-full min-w-fit  text-gray-900 dark:text-gray-50"
                href={"/compliance/frameworks"}
              >
                Frameworks {complianceCount && `(${complianceCount})`}{" "}
              </a>
              <a
                className="px-2 py-1 w-full min-w-fit  text-gray-900 dark:text-gray-50"
                href={"/pricing"}
              >
                Pricing
              </a>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <a
                    className="px-2 py-1 flex flex-row gap-2 text-gray-900 dark:text-gray-50"
                    href={"#"}
                  >
                    More
                    <svg
                      className="-mr-1 size-5 text-gray-400 "
                      viewBox="0 0 20 20"
                      fill={theme === "dark" ? "white" : "black"}
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {/* <DropdownMenuItem
                    onClick={() => {
                      navigate("/about");
                    }}
                  >
                    {" "}
                    <a
                      className="px-2 py-1 text-gray-900 dark:text-gray-50"
                      href={"/about"}
                    >
                      About
                    </a>
                  </DropdownMenuItem> */}
                  {/* <DropdownMenuItem
                    onClick={() => {
                      navigate("/compliance/frameworks");
                    }}
                  >
                    <a
                      className="px-2 py-1 text-gray-900 dark:text-gray-50"
                      href={"/compliance/frameworks"}
                    >
                      Compliance
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator /> */}

                  {/* <DropdownMenuItem
                    onClick={() => {
                      navigate("/use-cases");
                    }}
                  >
                    <a
                      className="px-2 py-1 text-gray-900 dark:text-gray-50"
                      href={"/use-cases"}
                    >
                      Use cases
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator /> */}

                  <DropdownMenuItem
                    onClick={() => {
                      navigate("/changelog");
                    }}
                  >
                    <a
                      className="px-2 py-1 text-gray-900 dark:text-gray-50"
                      href={"/changelog"}
                    >
                      Changelog
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => {
                      navigate("/license");
                    }}
                  >
                    <a
                      className="px-2 py-1 text-gray-900 dark:text-gray-50"
                      href={"/license"}
                    >
                      License
                    </a>
                  </DropdownMenuItem>
                  {/* <DropdownMenuSeparator /> */}
                  {/* <DropdownMenuItem
                    onClick={() => {
                      navigate("/pricing");
                    }}
                  >
                    <a
                      className="px-2 py-1 text-gray-900 dark:text-gray-50"
                      href={"/pricing"}
                    >
                      Pricing
                    </a>
                  </DropdownMenuItem> */}
                </DropdownMenuContent>
              </DropdownMenu>
              <a
                className="w-[20px] h-[20px] min-w-fit py-1 text-gray-900 dark:text-gray-50  flex flex-row gap-1 justify-center items-center align-middle"
                href={"https://github.com/opengovern/opengovernance"}
                target="_blank"
              >
                <ThemedImage
                  lightSrc={require("../../images/github-mark/github-mark.png")}
                  darkSrc={require("../../images/github-mark/github-mark-white.png")}
                  alt="A preview of app"
                  width={20}
                  height={20}
                />
                {/* <span>Github</span> */}
              </a>
            </div>
          </nav>
          {/* <Button className="hidden h-10 font-semibold md:flex">
            Book a demo
          </Button> */}
          <div className="flex gap-x-1 md:hidden dark:text-white">
            {/* <Button
              className="p-1"
            >Book demo</Button> */}
            <Button
              onClick={() => setOpen(!open)}
              variant="light"
              className="aspect-square p-1"
            >
              {open ? (
                <RiCloseLine aria-hidden="true" className="size-4" />
              ) : (
                <RiMenuLine aria-hidden="true" className="size-4" />
              )}
            </Button>
          </div>
        </div>
        <nav
          className={cx(
            "my-6 flex text-lg ease-in-out will-change-transform md:hidden",
            open ? "" : "hidden"
          )}
        >
          <ul className="space-y-4 font-medium">
            <li onClick={() => setOpen(false)}>
              <a
                className="text-black dark:text-white"
                href={"https://docs.opencomply.io/"}
                target="_blank"
              >
                Docs
              </a>
            </li>{" "}
            <li onClick={() => setOpen(false)}>
              <a className="text-black dark:text-white" href={"/integrations"}>
                {/* @ts-ignore */}
                Integrations {integrations && `(${integrations?.length})`}{" "}
              </a>
            </li>{" "}
            <li onClick={() => setOpen(false)}>
              <a
                className="text-black dark:text-white"
                href={"/compliance/frameworks"}
              >
                Frameworks {complianceCount && `(${complianceCount})`}
              </a>
            </li>
            <li onClick={() => setOpen(false)}>
              <a
                className="text-black dark:text-white"
                href={"/pricing"}
              >
               Pricing
              </a>
            </li>
            <li onClick={() => setOpen(false)}>
              <a
                className="w-[20px] h-[20px] text-black dark:text-white flex flex-row gap-2 items-center"
                href={"https://github.com/opengovern/opengovernance"}
              >
                <ThemedImage
                  lightSrc={require("../../images/github-mark/github-mark.png")}
                  darkSrc={require("../../images/github-mark/github-mark-white.png")}
                  alt="A preview of app"
                  width={20}
                  height={20}
                />
                <span>Github</span>
              </a>
            </li>
            <li onClick={() => setOpen(false)}>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <a
                    className="pr-2 py-1 flex flex-row items-center  gap-2 text-gray-900 dark:text-gray-50"
                    href={"#"}
                  >
                    More
                    <svg
                      className="-mr-1 size-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill={theme === "dark" ? "white" : "black"}
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {/* <DropdownMenuItem
                    onClick={() => {
                      navigate("/about");
                    }}
                  >
                    {" "}
                    <a
                      className="px-2 py-1 text-gray-900 dark:text-gray-50"
                      href={"/about"}
                    >
                      About
                    </a>
                  </DropdownMenuItem> */}
                  {/* <DropdownMenuItem
                    className="bg-red-50"
                    onClick={() => {
                      navigate("/compliance/frameworks");
                    }}
                  >
                    <a
                      className="px-2 py-1 text-gray-900 dark:text-gray-50"
                      href={"/compliance/frameworks"}
                    >
                      Compliance
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator /> */}

                  {/* <DropdownMenuItem
                    onClick={() => {
                      navigate("/use-cases");
                    }}
                  >
                    <a
                      className="px-2 py-1 text-gray-900 dark:text-gray-50"
                      href={"/use-cases"}
                    >
                      Use cases
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator /> */}

                  <DropdownMenuItem
                    onClick={() => {
                      navigate("/changelog");
                    }}
                  >
                    <a
                      className="px-2 py-1 text-gray-900 dark:text-gray-50"
                      href={"/changelog"}
                    >
                      Changelog
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => {
                      navigate("/license");
                    }}
                  >
                    <a
                      className="px-2 py-1 text-gray-900 dark:text-gray-50"
                      href={"/license"}
                    >
                      License
                    </a>
                  </DropdownMenuItem>
                  {/* <DropdownMenuSeparator /> */}
                  {/* <DropdownMenuItem
                    onClick={() => {
                      navigate("/pricing");
                    }}
                  >
                    <a
                      className="px-2 py-1 text-gray-900 dark:text-gray-50"
                      href={"/pricing"}
                    >
                      Pricing
                    </a>
                  </DropdownMenuItem> */}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

"use client";
import Balancer from "react-wrap-balancer";
import { Button } from "../Button";
import { Input } from "../Input";
import CopyToClipboard from "../CopyToClipboard";

export default function Cta() {
  return (
    <section
      aria-labelledby="cta-title"
      className="mx-auto mb-28 mt-28 max-w-6xl p-1 px-2 sm:mt-56"
    >
      <div className="relative flex items-center justify-center">
        <div
          className="mask pointer-events-none absolute  select-none opacity-70"
          aria-hidden="true"
        >
          <div className="flex size-full flex-col gap-2">
            {Array.from({ length: 20 }, (_, idx) => (
              <div key={`outer-${idx}`}>
                <div className="flex size-full gap-2">
                  {Array.from({ length: 41 }, (_, idx2) => (
                    <div key={`inner-${idx}-${idx2}`}>
                      <div className="size-5 rounded-md shadow shadow-indigo-500/20 ring-1 dark:custom-shadow ring-black/5 dark:shadow-indigo-500/20 dark:ring-white/5"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-4xl">
          <div className="flex flex-col items-center justify-center text-center">
            <div>
              <h3
                id="cta-title"
                className="inline-block bg-gradient-to-t from-gray-900 to-gray-800 bg-clip-text p-2 text-4xl font-bold tracking-tighter text-transparent md:text-6xl dark:from-gray-50 dark:to-gray-300"
              >
                Ready to take control?
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-gray-600 sm:text-lg dark:text-gray-400">
                <Balancer>
                  Unlock seamless governance across your entire stack. Get
                  started today!
                </Balancer>
              </p>
            </div>
            {window.innerWidth > 768 ? (
              <>
                {" "}
                <div>
                  <div className="">
                    <div className="flex flex-row gap-4 md:gap-8 max-w-5xl w-full mx-auto">
                      <div className="relative select-none">
                        <div className="flex size-[calc(1.75rem+1px)] items-center justify-center rounded-full bg-slate-400 dark:bg-gray-800 tabular-nums font-medium text-primary-800 dark:text-white">
                          1
                        </div>
                        <div className="absolute bottom-2 left-[0.875rem] top-9 w-px bg-slate-400 dark:bg-gray-800"></div>
                      </div>
                      <div className=" pb-6 [&amp;>*+*]:mt-5 w-full">
                        <h4
                          id="add-helm-repo"
                          className="text-base font-semibold text-start mb-5  relative w-full mx-auto decoration-primary/6 "
                        >
                          <div className="grid grid-area-1-1 relative -ml-6 w-7 border-0 opacity-0 hover:opacity-[0] focus:opacity-[0] md:hover:md:opacity-[1] md:group-focus:md:opacity-[1] mt-[0.5em]">
                            <a
                              href="#add-helm-repo"
                              aria-label="Direct link to heading"
                              className="inline-flex h-full text-black items-start dark:text-light/3 dark:shadow-none dark:ring-0 leading-snug"
                            >
                              <svg
                                className="gb-icon w-3.5 h-[1lh] transition-colors text-transparent hover:text-dark-tremor-brand-faint dark:hover:text-light/5 lg:w-4"
                                style={{
                                  maskImage:
                                    'url("https://ka-p.fontawesome.com/releases/v6.6.0/svgs/regular/hashtag.svg?v=2&amp;token=a463935e93"), "maskRepeat": "noReapaet" "maskPosition": "center center"',
                                }}
                              ></svg>
                            </a>
                          </div>
                          <div className=" z-[1] mt-[0.5em] text-black dark:text-white">
                            Add Helm Repo
                          </div>
                        </h4>
                        <div className="group/codeblock grid grid-flow-col w-full mx-auto decoration-primary/6 ">
                          <div className="flex items-center justify-start [grid-area:1/1] text-sm gap-2"></div>
                          <div className="group-hover/codeblock:opacity-[1] transition-opacity duration-75 opacity-0  [grid-area:2/1] z-[2] justify-self-end backdrop-blur-md leading-none self-start  text-dark-tremor-brand-subtle  rounded-md    print:hidden">
                            <CopyToClipboard code="helm repo add opencomply https://charts.opencomply.io && helm repo update" />
                          </div>
                          <pre className="[grid-area:2/1] w-full relative overflow-auto bg-tremor-ring dark:bg-dark-tremor-ring hide-scroll rounded-md straight-corners:rounded-sm">
                            <code
                              id="oGFMNW0BGnw0"
                              className="min-w-full inline-grid [grid-template-columns:auto_1fr] py-2 px-2 [counter-reset:line] whitespace-pre-wrap"
                            >
                              <span className="w-full overflow-hidden  justify-center [grid-template-columns:subgrid] col-span-2 relative ring-1 ring-transparent hover:ring-dark-4/5 hover:z-[1] dark:hover:ring-light-4/4 rounded [&amp;.highlighted:first-child]:rounded-t-md [&amp;.highlighted:first-child>*]:mt-1 [&amp;.highlighted:last-child]:rounded-b-md [&amp;.highlighted:last-child>*]:mb-1 [&amp;:only-child]:hover:ring-transparent [&amp;.highlighted]:rounded-none [&amp;:not(.highlighted)_+_.highlighted]:rounded-t-md [&amp;:not(.highlighted)_+_.highlighted>*]:mt-1 [&amp;.highlighted:has(+:not(.highlighted))]:rounded-b-md [&amp;.highlighted:has(+:not(.highlighted))>*]:mb-1 [&amp;:not(.highlighted)_+_.highlighted:has(+:not(.highlighted))]:rounded-md">
                                <span className="ml-3  text-sm w-full flex justify-start">
                                  {" "}
                                  <span className="text-[#8250df]">
                                    helm{" "}
                                  </span>{" "}
                                  <span className="text-[#8b6d32] dark:text-[#fff]">
                                    repo{" "}
                                  </span>{" "}
                                  <span className="text-[#8b6d32] dark:text-[#fff]">
                                    add{" "}
                                  </span>{" "}
                                  <span className="text-[#8b6d32] dark:text-[#fff]">
                                    opencomply{" "}
                                  </span>{" "}
                                  <span className="text-[#8b6d32] dark:text-[#fff]">
                                    https://charts.opencomply.io{" "}
                                  </span>{" "}
                                  <span className="text-[rgba(255,90,54,0.92)]">
                                    &amp;&amp;{" "}
                                  </span>{" "}
                                  <span className="text-[#8250df]">helm </span>{" "}
                                  <span className="text-[#8b6d32] dark:text-[#fff]">
                                    repo{" "}
                                  </span>{" "}
                                  <span className="text-[#8b6d32] dark:text-[#fff]">
                                    update{" "}
                                  </span>{" "}
                                </span>
                              </span>
                            </code>
                          </pre>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 md:gap-8  w-full mx-auto">
                      <div className="relative select-none">
                        <div className="flex size-[calc(1.75rem+1px)] items-center justify-center rounded-full bg-slate-400 dark:bg-gray-800 tabular-nums font-medium text-primary-800 dark:text-primary-200">
                          2
                        </div>
                        <div className="absolute bottom-2 left-[0.875rem] top-9 w-px bg-slate-400 dark:bg-gray-800"></div>
                      </div>
                      <div className="flex-1 pb-6 [&amp;>*+*]:mt-5 w-full">
                        <h4
                          id="run-helm-install-5-7-mins"
                          className="text-base text-start mb-5 font-semibold group relative w-full mx-auto decoration-primary/6 "
                        >
                          <div className="grid grid-area-1-1 relative -ml-6 w-7 border-0 opacity-0 group-hover:opacity-[0] group-focus:opacity-[0] md:group-hover:md:opacity-[1] md:group-focus:md:opacity-[1] mt-[0.5em]">
                            <a
                              href="#run-helm-install-5-7-mins"
                              aria-label="Direct link to heading"
                              className="inline-flex h-full items-start dark:text-light/3 dark:shadow-none dark:ring-0 leading-snug"
                            >
                              <svg
                                className="gb-icon w-3.5 h-[1lh] transition-colors text-transparent group-hover:text-dark/6 dark:group-hover:text-light/5 lg:w-4"
                                style={{
                                  maskImage:
                                    'url("https://ka-p.fontawesome.com/releases/v6.6.0/svgs/regular/hashtag.svg?v=2&amp;token=a463935e93"), "maskRepeat": "noReapaet" "maskPosition": "center center"',
                                }}
                              ></svg>
                            </a>
                          </div>
                          <div className="grid-area-1-1 z-[1] mt-[0.5em] text-black dark:text-white">
                            Run Helm Install <span className="emoji ">⏱️</span>{" "}
                            5-7 Mins
                          </div>
                        </h4>
                        <div className="group/codeblock grid grid-flow-col w-full mx-auto decoration-primary/6 ">
                          <div className="flex items-center justify-start [grid-area:1/1] text-sm gap-2"></div>
                          <div className="group-hover/codeblock:opacity-[1] transition-opacity duration-75 opacity-0  [grid-area:2/1] z-[2] justify-self-end backdrop-blur-md leading-none self-start  text-dark-tremor-brand-subtle  rounded-md    print:hidden">
                            <CopyToClipboard code="helm install -n opencomply opencomply opencomply/opencomply --create-namespace --timeout=10m" />
                          </div>
                          <pre className="[grid-area:2/1] w-full relative overflow-auto bg-tremor-ring dark:bg-dark-tremor-ring hide-scroll rounded-md straight-corners:rounded-sm">
                            <code
                              id="27j6WEmUOfUQ"
                              className="min-w-full inline-grid [grid-template-columns:auto_1fr] py-2 px-2 [counter-reset:line] whitespace-pre-wrap"
                            >
                              <span className=" overflow-hidden [grid-template-columns:subgrid] col-span-2 relative ring-1 ring-transparent hover:ring-dark-4/5 hover:z-[1] dark:hover:ring-light-4/4 rounded [&amp;.highlighted:first-child]:rounded-t-md [&amp;.highlighted:first-child>*]:mt-1 [&amp;.highlighted:last-child]:rounded-b-md [&amp;.highlighted:last-child>*]:mb-1 [&amp;:only-child]:hover:ring-transparent [&amp;.highlighted]:rounded-none [&amp;:not(.highlighted)_+_.highlighted]:rounded-t-md [&amp;:not(.highlighted)_+_.highlighted>*]:mt-1 [&amp;.highlighted:has(+:not(.highlighted))]:rounded-b-md [&amp;.highlighted:has(+:not(.highlighted))>*]:mb-1 [&amp;:not(.highlighted)_+_.highlighted:has(+:not(.highlighted))]:rounded-md">
                                <span className="ml-3 felx justify-start text-sm ">
                                  <span className="text-[#8250df]">helm </span>

                                  <span className="text-[#8b6d32] dark:text-[#fff]">
                                    install{" "}
                                  </span>

                                  <span className="text-[#8b6d32] dark:text-[#fff]">
                                    -n{" "}
                                  </span>

                                  <span className="text-[#8b6d32] dark:text-[#fff]">
                                    opencomply{" "}
                                  </span>

                                  <span className="text-[#8b6d32] dark:text-[#fff]">
                                    opencomply{" "}
                                  </span>

                                  <span className="text-[#8b6d32] dark:text-[#fff]">
                                    opencomply/opencomply{" "}
                                  </span>

                                  <span className="text-[#8b6d32] dark:text-[#fff]">
                                    --create-namespace{" "}
                                  </span>

                                  <span className="text-[#8b6d32] dark:text-[#fff]">
                                    --timeout=10m{" "}
                                  </span>
                                </span>
                              </span>
                            </code>
                          </pre>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 md:gap-8  w-full mx-auto">
                      <div className="relative select-none">
                        <div className="flex size-[calc(1.75rem+1px)] items-center justify-center rounded-full bg-slate-400 dark:bg-gray-800 tabular-nums font-medium text-primary-800 dark:text-primary-200">
                          3
                        </div>
                        <div className="absolute bottom-2 left-[0.875rem] top-9 w-px bg-slate-400 dark:bg-gray-800"></div>
                      </div>
                      <div className="flex-1 pb-6 [&amp;>*+*]:mt-5 w-full">
                        <h4
                          id="expose-the-app"
                          className="text-base text-start mb-5 font-semibold group relative w-full mx-auto decoration-primary/6 "
                        >
                          <div className="grid grid-area-1-1 relative -ml-6 w-7 border-0 opacity-0 group-hover:opacity-[0] group-focus:opacity-[0] md:group-hover:md:opacity-[1] md:group-focus:md:opacity-[1] mt-[0.5em]">
                            <a
                              href="#expose-the-app"
                              aria-label="Direct link to heading"
                              className="inline-flex h-full items-start dark:text-light/3 dark:shadow-none dark:ring-0 leading-snug"
                            >
                              <svg
                                className="gb-icon w-3.5 h-[1lh] transition-colors text-transparent group-hover:text-dark/6 dark:group-hover:text-light/5 lg:w-4"
                                style={{
                                  maskImage:
                                    'url("https://ka-p.fontawesome.com/releases/v6.6.0/svgs/regular/hashtag.svg?v=2&amp;token=a463935e93"), "maskRepeat": "noReapaet" "maskPosition": "center center"',
                                }}
                              ></svg>
                            </a>
                          </div>
                          <div className="grid-area-1-1 z-[1] mt-[0.5em] text-black dark:text-white">
                            Expose the app
                          </div>
                        </h4>
                        <div className="group/codeblock grid grid-flow-col w-full mx-auto decoration-primary/6 ">
                          <div className="flex items-center justify-start [grid-area:1/1] text-sm gap-2"></div>
                          <div className="group-hover/codeblock:opacity-[1] transition-opacity duration-75 opacity-0  [grid-area:2/1] z-[2] justify-self-end backdrop-blur-md leading-none self-start  text-dark-tremor-brand-subtle  rounded-md    print:hidden">
                            <CopyToClipboard code="kubectl port-forward -n opencomply svc/nginx-proxy 8080:80" />
                          </div>
                          <pre className="[grid-area:2/1] relative overflow-auto bg-tremor-ring dark:bg-dark-tremor-ring hide-scroll rounded-md straight-corners:rounded-sm">
                            <code
                              id="rKQfmcVwt8Te"
                              className="min-w-full inline-grid [grid-template-columns:auto_1fr] py-2 px-2 [counter-reset:line] whitespace-pre-wrap"
                            >
                              <span className=" overflow-hidden [grid-template-columns:subgrid] col-span-2 relative ring-1 ring-transparent hover:ring-dark-4/5 hover:z-[1] dark:hover:ring-light-4/4 rounded [&amp;.highlighted:first-child]:rounded-t-md [&amp;.highlighted:first-child>*]:mt-1 [&amp;.highlighted:last-child]:rounded-b-md [&amp;.highlighted:last-child>*]:mb-1 [&amp;:only-child]:hover:ring-transparent [&amp;.highlighted]:rounded-none [&amp;:not(.highlighted)_+_.highlighted]:rounded-t-md [&amp;:not(.highlighted)_+_.highlighted>*]:mt-1 [&amp;.highlighted:has(+:not(.highlighted))]:rounded-b-md [&amp;.highlighted:has(+:not(.highlighted))>*]:mb-1 [&amp;:not(.highlighted)_+_.highlighted:has(+:not(.highlighted))]:rounded-md">
                                <span className="ml-3  text-sm w-full flex justify-start items-start">
                                  <span className="text-[#8250df]">
                                    kubectl{" "}
                                  </span>

                                  <span className="text-[#8b6d32] dark:text-[#fff]">
                                    port-forward{" "}
                                  </span>

                                  <span className="text-[#8b6d32] dark:text-[#fff]">
                                    -n{" "}
                                  </span>

                                  <span className="text-[#8b6d32] dark:text-[#fff]">
                                    opencomply{" "}
                                  </span>

                                  <span className="text-[#8b6d32] dark:text-[#fff]">
                                    svc/nginx-proxy{" "}
                                  </span>

                                  <span className="text-[#8b6d32] dark:text-[#fff]">
                                    8080:80{" "}
                                  </span>
                                </span>
                              </span>
                            </code>
                          </pre>
                        </div>
                        <p className="w-full text-black dark:text-white mx-auto  justify-start text-start f mt-5">
                          Open{" "}
                          <a
                            className="underline underline-offset-2 text-primary hover:text-primary-700 transition-colors "
                            href="http://localhost:8080/"
                          >
                            {" "}
                            http://localhost:8080/{" "}
                          </a>{" "}
                          in your browser, sign in with{" "}
                          <code className="py-[1px] px-1.5 min-w-[1.625rem] dark:text-black inline-flex justify-center items-center ring-1 ring-inset ring-offset-dark-tremor-background-emphasis bg-dark-tremor-background-emphasis rounded text-dark/8 dark:ring-light/1 dark:bg-light/1  text-[.875em] leading-[calc(max(1.20em,1.25rem))]">
                            <strong className="font-bold">
                              admin@opencomply.io
                            </strong>
                          </code>{" "}
                          as the username and{" "}
                          <code className="py-[1px] px-1.5 min-w-[1.625rem] dark:text-black inline-flex justify-center items-center ring-1 ring-inset ring-dark/1 bg-dark-tremor-background-emphasis rounded text-dark/8 dark:ring-light/1 dark:bg-light/1 dark:text-light/7 text-[.875em] leading-[calc(max(1.20em,1.25rem))]">
                            <strong className="font-bold">password</strong>
                          </code>{" "}
                          as the password.
                        </p>
                        <div className="px-4 mt-5 py-4 transition-colors rounded-md straight-corners:rounded-none bg-[#E8EFFA]  from-periwinkle/6 to-periwinkle/5 ring-1 ring-inset ring-dark/1 dark:ring-periwinkle/1 dark:from-periwinkle/2 dark:to-periwinkle/[0.1] w-full mx-auto decoration-primary/6 ">
                          <div className="flex flex-row">
                            <div className="flex items-start justify-center pr-3 mt-0.5 leading-normal text-black text-periwinkle-700 dark:text-periwinkle-400">
                              <svg
                                className="gb-icon size-4"
                                style={{
                                  maskImage:
                                    'url("https://ka-p.fontawesome.com/releases/v6.6.0/svgs/regular/hashtag.svg?v=2&amp;token=a463935e93"), "maskRepeat": "noReapaet" "maskPosition": "center center"',
                                }}
                              ></svg>
                            </div>
                            <div className="flex-1  text-start space-y-4 [&amp;>p]:text-sm [&amp;>p]:leading-relaxed">
                              <p className="w-full text-start text-black mx-auto  [&amp;>a]:text-periwinkle-700 [&amp;>a:hover]:text-periwinkle-800 [&amp;>code]:bg-periwinkle-700/4 [&amp;>code]:text-inherit [&amp;>code]:shadow-none text-periwinkle-900 dark:text-periwinkle-200 dark:[&amp;>a]:text-periwinkle dark:[&amp;>a:hover]:text-periwinkle-600 dark:[&amp;>code]:bg-periwinkle-200/2 dark:[&amp;>code]:text-inherit decoration-periwinkle-700/6 dark:decoration-periwinkle/6 flip-heading-hash">
                                App comes loaded with sample data.{" "}
                                <a
                                  className="underline underline-offset-2 text-primary hover:text-primary-700 transition-colors "
                                  href="https://docs.opencomply.io/oss/getting-started/setup-integrations"
                                >
                                  Click here you setup your first integrations.
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Button
                  className="w-20 mt-5 w-full sm:w-max sm:flex-none"
                  type="submit"
                  variant="primary"
                >
                  <a href="https://opencomply.io/oss" target="__blank">
                    Get started
                  </a>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

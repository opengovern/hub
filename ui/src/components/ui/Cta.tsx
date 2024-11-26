"use client";
import Balancer from "react-wrap-balancer";
import { Button } from "../Button";
import { Input } from "../Input";
import { CopyToClipboard } from "@cloudscape-design/components";

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
            <div>
              <div>
                <CopyToClipboard
                  className="custom-copy"
                  textToCopy="helm repo add opencomply https://charts.opencomply.io && helm repo update"
                  copyErrorText="failed to copy"
                  copySuccessText="Copied to ClipBoard"
                  variant="inline"
                />
              </div>
            </div>
            {/* {/* <Button
              className="w-20 mt-5 w-full sm:w-max sm:flex-none"
              type="submit"
              variant="primary"
            >
              <a href="https://opencomply.io/oss" target="__blank">
                Get started
              </a>
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}

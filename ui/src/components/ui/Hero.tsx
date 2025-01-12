import { RiPlayCircleFill } from "@remixicon/react";
import HeroImage from "./HeroImage";
// @ts-ignore
import video from "../../videos/2024-10-08-How_to_Customize_Controls.mp4";
import { ProgressBar } from "@tremor/react";
import { useEffect, useState } from "react";
import { DISCOVER_URL } from "../../pages/landing/urls";
import { AUDIT_URL } from "../../pages/landing/urls";
import { CUSTOMIZE_URL } from "../../pages/landing/urls";
import { Button } from "../Button";
import { Modal } from "@cloudscape-design/components";
import Cal from "@calcom/embed-react";
const URLS = {
  0: DISCOVER_URL,
  1: AUDIT_URL,
  2: CUSTOMIZE_URL,
};

export default function Hero() {
  const [video, setVideo] = useState(0);
  const [width, setWidth] = useState({
    0: 0,
    1: 0,
    2: 0,
  });
  const [time, setTime] = useState(0);
  const [open,setOpen] = useState(false)

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      // @ts-ignore
      const video_dur = document.getElementById("hero-video")?.duration;
      if (time >= video_dur) {
        setVideo((video + 1) % 3);
        clearInterval(countdownInterval);
        setWidth({
          0: 0,
          1: 0,
          2: 0,
        });
        setTime(0);
      } else {
        setTime(time + 0.5);
        // @ts-ignore
        const old = width;
        // @ts-ignore

        old[video] = (time / video_dur) * 100;
        setWidth(old);
      }
    }, 500);

    return () => clearInterval(countdownInterval);
  }, [time, video]);

  return (
    <section
      aria-labelledby="hero-title"
      className="mt-32 flex  flex-col items-center justify-center text-center sm:mt-40"
    >
      <h1
        id="hero-title"
        className="inline-block animate-slide-up-fade bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text p-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300"
        style={{ animationDuration: "700ms" }}
      >
        Own your stack. <br />
        Own your security.
      </h1>
      <p
        className="mt-1 max-w-3xl animate-slide-up-fade text-2xl text-gray-700 dark:text-gray-400"
        style={{ animationDuration: "900ms" }}
      >
        opencomply simplifies security and compliance across clouds, platforms,
        and regions. Govern every change, deployment, and asset with ease.
      </p>
      <div
        className="mt-8 flex w-full animate-slide-up-fade flex-col justify-center items-center gap-3 px-3 sm:flex-row"
        style={{ animationDuration: "1100ms" }}
      >
        <Button
          onClick={() => {
            setOpen(true);
          }}
          className=" font-semibold rounded-sm "
        >
          Try cloud for free
        </Button>
        <a
          href="https://docs.opencomply.io/oss"
          className=" border rounded-s border-indigo-600 dark:border-indigo-500 p-2"
          target="__blank"
        >
          Download open-source
        </a>
        {/* <Button
          asChild
          variant="light"
          className="group gap-x-2 bg-transparent font-semibold hover:bg-transparent dark:bg-transparent hover:dark:bg-transparent"
        >
          <a
            href="https://www.youtube.com/watch?v=QRZ_l7cVzzU"
            className="ring-1 ring-gray-200 sm:ring-0 dark:ring-gray-900"
            target="_blank"
          >
            <span className="mr-1 flex size-6 items-center justify-center rounded-full bg-gray-50 transition-all group-hover:bg-gray-200 dark:bg-gray-800 dark:group-hover:bg-gray-700">
              <RiPlayCircleFill
                aria-hidden="true"
                className="size-5 shrink-0 text-gray-900 dark:text-gray-50"
              />
            </span>
            Watch video
          </a>
        </Button> */}
      </div>
      <div className="iframe-div hidden sm:inline relative sm:mx-auto mx-3 bg-transparent  mt-20 h-fit  max-w-5xl 2xl:max-w-6xl animate-slide-up-fade sm:ml-auto sm:w-full ">
        <iframe
          src="https://app.supademo.com/embed/cm5q1ezs60ljjpelfs3zkfzdn?embed_v=2"
          loading="lazy"
          title="Website - Product Tour"
          allow="clipboard-write"
          frameBorder="0"
          allowFullScreen={true}
          className="iframe-div-frame rounded-xl"
        ></iframe>
      </div>
      <div className="rounded-xl sm:hidden flex relative sm:mx-auto mx-3 bg-transparent  mt-20 h-fit  max-w-5xl 2xl:max-w-6xl animate-slide-up-fade sm:ml-auto sm:w-full bg-white ring-1 ring-slate-900/5 dark:bg-slate-950 dark:ring-white/15">
        <video
          id="hero-video"
          className="rounded-xl w-full shadow-2xl dark:shadow-indigo-600/10"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          // @ts-ignore
          src={
            "https://content.opencomply.io/website/product-videos/product-tour-mobile.mp4"
          }
        >
          <source
            src={
              // @ts-ignore
              "https://content.opencomply.io/website/product-videos/product-tour-mobile.mp4"
            }
            type="video/mp4"
          />
        </video>
      </div>
      {/* <div
        className="relative sm:mx-auto mx-3  mt-20 h-fit  max-w-6xl 2xl:max-w-7xl animate-slide-up-fade sm:ml-auto sm:w-full sm:px-2"
        style={{ animationDuration: "1400ms" }}
      >
        <div className="  mb-4 w-full flex flex-row gap-3 justify-between ">
          <div
            className=" w-full flex flex-col justify-center items-center custom-button cursor-pointer "
            onClick={() => {
              setVideo(0);
              setTime(0);
              setWidth({
                0: 0,
                1: 0,
                2: 0,
              });
            }}
          >
            <span
              className={`text-center w-full text-black dark:text-white  ${video % 3 == 0 && "text-indigo-500"}`}
            >
              Integrate
            </span>
            <div
              className={`w-full custom-pg-bar  bg-gray-300 dark:bg-slate-400  ${video % 3 == 0 && "active"} `}
            >
              <div
                id="pg-bar-0"
                className={`bg-indigo-600  custom-pg-bar-var`}
                style={{ width: `${width[0]}%` }}
              ></div>
            </div>
          </div>
          <div
            className=" w-full flex flex-col justify-center items-center custom-button cursor-pointer  "
            onClick={() => {
              setVideo(1);
              setTime(0);
              setWidth({
                0: 0,
                1: 0,
                2: 0,
              });
            }}
          >
            <span
              className={`text-center w-full text-black dark:text-white  ${video % 3 == 1 && "text-indigo-500"}`}
            >
              Audit
            </span>
            <div
              className={`w-full custom-pg-bar  bg-gray-300 dark:bg-slate-400  ${video % 3 == 1 && "active"} `}
            >
              <div
                id="pg-bar-1"
                className={`bg-indigo-600  custom-pg-bar-var`}
                style={{ width: `${width[1]}%` }}
              ></div>
            </div>
          </div>
          <div
            className=" w-full flex flex-col justify-center items-center custom-button cursor-pointer  "
            onClick={() => {
              setVideo(2);
              setTime(0);
              setWidth({
                0: 0,
                1: 0,
                2: 0,
              });
            }}
          >
            <span
              className={`text-center w-full text-black dark:text-white  ${video % 3 == 2 && "text-indigo-500"}`}
            >
              Adopt
            </span>
            <div
              className={`w-full custom-pg-bar  bg-gray-300 dark:bg-slate-400  ${video % 3 == 2 && "active"} `}
            >
              <div
                id="pg-bar-2"
                className={`bg-indigo-600  custom-pg-bar-var`}
                style={{ width: `${width[2]}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white ring-1 ring-slate-900/5 dark:bg-slate-950 dark:ring-white/15">
          <video
            id="hero-video"
            className="rounded-xl w-full shadow-2xl dark:shadow-indigo-600/10"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            // @ts-ignore
            src={URLS[video]}
          >
            <source
              src={
                // @ts-ignore
                URLS[video]
              }
              type="video/mp4"
            />
          </video>
        </div>
      
      </div> */}
      <Modal
        header="Try enterprise Edition"
        size="large"
        visible={open}
        onDismiss={() => setOpen(false)}
      >
        <Cal
          namespace="try"
          calLink="team/opencomply/try"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view" }}
        />
      </Modal>
    </section>
  );
}

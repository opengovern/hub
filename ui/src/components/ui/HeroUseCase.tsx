import { RiPlayCircleFill } from "@remixicon/react"
import { Button } from "../Button"
import HeroImage from "./HeroImage"

export default function HeroUseCase() {
  return (
    <section
      aria-labelledby="hero-title"
      className="mt-32 flex flex-col items-center bg-[#2F2F2F] dark:bg-white py-20 justify-center text-center sm:mt-40"
    >
      <h1
        id="hero-title"
        className="inline-block animate-slide-up-fade bg-gradient-to-br text-white dark:text-black  bg-clip-text p-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-7xl dark:from-gray-50 dark:to-gray-300"
        style={{ animationDuration: "700ms" }}
      >
        Use Cases
      </h1>
      <p
        className="mt-6 max-w-lg animate-slide-up-fade text-lg text-white dark:text-black "
        style={{ animationDuration: "900ms" }}
      >
        Unicorn Platform is a powerful website builder for startups,
        solo-entrepreneurs and hackers. Try it for free.
      </p>
      <div
        className="mt-8 flex w-full animate-slide-up-fade flex-col justify-center gap-3 px-3 sm:flex-row"
        style={{ animationDuration: "1100ms" }}
      >
        <Button className="h-10 font-semibold">
          <a href="https://docs.opencomply.io/oss" target="__blank">
            Download Community edition
          </a>
        </Button>
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
      {/* <div
        className="relative mx-auto ml-3 mt-20 h-fit md:w-[40rem] max-w-6xl animate-slide-up-fade sm:ml-auto sm:w-full sm:px-2"
        style={{ animationDuration: "1400ms" }}
      >
        <HeroImage />
        <div
          className="absolute inset-x-0 -bottom-20 -mx-10 h-2/4 bg-gradient-to-t from-white via-white to-transparent lg:h-1/4 dark:from-gray-950 dark:via-gray-950"
          aria-hidden="true"
        />
      </div> */}
    </section>
  );
}
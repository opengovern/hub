import { Button } from "../Button";
import { Logos } from "./Logos"

export default function LogoCloud() {
  return (
    <section
      id="logo cloud"
      aria-label="Company logos"
      className="mt-24 flex animate-slide-up-fade flex-col items-center justify-center gap-y-6 text-center sm:mt-32"
      style={{ animationDuration: "1500ms" }}
    >
      <p className="text-lg font-medium tracking-tighter text-gray-800 dark:text-gray-200">
        Integrates with Your Favorite Tools
      </p>
      <div className=" grid grid-cols-4 justify-center fill-neutral-500 items-center gap-2 gap-y-4 text-gray-900 md:grid-cols-7 md:gap-x-10 dark:text-gray-200">
        <Logos.AWS className="    w-8 fill-neutral-500 h-8" />
        <Logos.Azure className="   w-8 fill-neutral-500 h-8" />
        <Logos.CloudFlare className="w-8 fill-neutral-500 h-8" />
        <Logos.Github className=" integration-logos  w-8 h-8" />
        <Logos.EntraID className="  w-8 h-8" />
        <Logos.OpenAi className=" integration-logos  w-8 h-8" />
        <Logos.DigitalOcean className="w-8  h-8  " />
        {/* <Logos.OpenConply className="w-14 h-14 " /> */}
      </div>
      <div>
        <Button className="h-10 mt-2">
          <a href="/integrations">See The complete list</a>
        </Button>
      </div>
    </section>
  );
}

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
      <div className=" grid grid-cols-2 justify-center fill-neutral-500 items-center gap-10 gap-y-4 text-gray-900 md:grid-cols-4 md:gap-x-20 dark:text-gray-200">
        <Logos.AWS className="  w-28 fill-neutral-500" />
        <Logos.Azure className="  w-28 fill-neutral-500" />
        <Logos.CloudFlare className="w-28 fill-neutral-500" />
        <Logos.Github className=" integration-logos w-28 h-28" />
        <Logos.EntraID className="  w-28" />
        <Logos.OpenAi className=" integration-logos w-28 h-28" />
        <Logos.DigitalOcean className="w-28 " />
        <Logos.OpenConply className="w-28 " />
      </div>
    </section>
  );
}

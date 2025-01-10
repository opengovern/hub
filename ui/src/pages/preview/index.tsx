import Advantage from "../../components/ui/Advantage";
import Benefits from "../../components/ui/Benefits";
import CodeExample from "../../components/ui/CodeExample";
import Cta from "../../components/ui/Cta";
import { Faqs } from "../../components/ui/Faqs";
import Features from "../../components/ui/Features";
import Features2 from "../../components/ui/Features2";
import { GlobalDatabase } from "../../components/ui/GlobalDatabase";
import Hero from "../../components/ui/Hero";
import LogoCloud from "../../components/ui/LogoCloud";
import LogoCloud2 from "../../components/ui/LogoCloud2";
import Steps from "../../components/ui/Steps";
import UseCase from "../../components/ui/UseCase";
import UseCaseNew from "../../components/ui/UseCaseNew";
import UseCaseNew2 from "../../components/ui/UseCaseNew2";

export default function Preview() {
  return (
    <main className="flex flex-col ">
      <Hero />
      {/* <LogoCloud /> */}
      {/* <GlobalDatabase /> */}
      <Features2 />
      {/* <UseCase /> */}
      <UseCaseNew2 />
      {/* <UseCaseNew /> */}
      {/* <UseCaseNew /> */}
      <LogoCloud2 />

      <Steps />

      <CodeExample />
      {/* <Advantage /> */}

      {/* <Benefits /> */}
      {/* <Cta /> */}
      <Faqs />
    </main>
  );
}

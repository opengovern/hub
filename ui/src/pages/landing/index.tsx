import Advantage from "../../components/ui/Advantage"
import Benefits from "../../components/ui/Benefits"
import CodeExample from "../../components/ui/CodeExample"
import Cta from "../../components/ui/Cta"
import { Faqs } from "../../components/ui/Faqs"
import Features from "../../components/ui/Features"
import { GlobalDatabase } from "../../components/ui/GlobalDatabase"
import Hero from "../../components/ui/Hero"
import LogoCloud from "../../components/ui/LogoCloud"
import Steps from "../../components/ui/Steps"
import UseCase from "../../components/ui/UseCase"

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden">
      <Hero />
      <LogoCloud />
      {/* <GlobalDatabase /> */}
      <Features />
      {/* <UseCase /> */}
      <Steps />

      <CodeExample />
      {/* <Advantage /> */}

      {/* <Benefits /> */}
      {/* <Cta /> */}
      <Faqs />
    </main>
  );
}

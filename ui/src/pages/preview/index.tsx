import Advantage from "../../components/ui/Advantage"
import Benefits from "../../components/ui/Benefits"
import CodeExample from "../../components/ui/CodeExample"
import Cta from "../../components/ui/Cta"
import Features from "../../components/ui/Features"
import { GlobalDatabase } from "../../components/ui/GlobalDatabase"
import Hero from "../../components/ui/Hero"
import LogoCloud from "../../components/ui/LogoCloud"
import Steps from "../../components/ui/Steps"

export default function Preview() {
  return (
    <main className="flex flex-col overflow-hidden">
      <Hero />
      <LogoCloud />
      {/* <GlobalDatabase /> */}
      <Steps  />
      <Features />

      <CodeExample />
      {/* <Advantage /> */}

      {/* <Benefits /> */}
      <Cta />
    </main>
  );
}

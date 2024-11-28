import Advantage from "../../components/ui/Advantage";
import Benefits from "../../components/ui/Benefits";
import CodeExample from "../../components/ui/CodeExample";
import Cta from "../../components/ui/Cta";
import { Faqs } from "../../components/ui/Faqs";
import Features from "../../components/ui/Features";
import { GlobalDatabase } from "../../components/ui/GlobalDatabase";
import Hero from "../../components/ui/Hero";
import HeroUseCase from "../../components/ui/HeroUseCase";
import LogoCloud from "../../components/ui/LogoCloud";
import Steps from "../../components/ui/Steps";
import UseCaseCard from "../../components/UseCaseCard";

export default function UseCase() {
  return (
    <main className="flex flex-col overflow-hidden">
      <HeroUseCase />

      <section
        aria-labelledby="code-example-title"
        className="mx-auto mt-28 w-full max-w-6xl px-3 flex flex-col justify-center items-center"
      >
        {/* <Badge>Developer-first</Badge> */}
        <h2
          id="code-example-title"
          className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300"
        >
          DevOps
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-center text-gray-600 dark:text-gray-400">
          Unicorn Platform is a powerful website builder for startups,
          solo-entrepreneurs and hackers. Try it for free.
        </p>
        <div className="mt-4 flex flex-row items-center gap-10 flex-1">
          <UseCaseCard
            title="Update Salesforce records when new or updated Google Sheets rows are detected"
            logo="https://raw.githubusercontent.com/opengovern/website/refs/heads/main/connectors/icons/github.svg"
            logo1="https://raw.githubusercontent.com/opengovern/website/refs/heads/main/connectors/icons/openai.svg"
            onClick={() => {}}
            tag="tag1"
          />
          <UseCaseCard
            title="Create Google Sheets spreadsheet rows from new Salesforce custom objects"
            logo="https://raw.githubusercontent.com/opengovern/website/refs/heads/main/connectors/icons/github.svg"
            logo1="https://raw.githubusercontent.com/opengovern/website/refs/heads/main/connectors/icons/openai.svg"
            onClick={() => {}}
            tag="tag1"
          />
          <UseCaseCard
            title="Create rows on Google Sheets spreadsheets for new Salesforce opportunities"
            logo="https://raw.githubusercontent.com/opengovern/website/refs/heads/main/connectors/icons/github.svg"
            logo1="https://raw.githubusercontent.com/opengovern/website/refs/heads/main/connectors/icons/openai.svg"
            onClick={() => {}}
            tag="tag1"
          />
        </div>
      </section>
      <section
        aria-labelledby="code-example-title"
        className="mx-auto mt-28 w-full max-w-6xl px-3 flex flex-col justify-center items-center"
      >
        {/* <Badge>Developer-first</Badge> */}
        <h2
          id="code-example-title"
          className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300"
        >
          Security
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-center text-gray-600 dark:text-gray-400 ">
          Unicorn Platform is a powerful website builder for startups,
          solo-entrepreneurs and hackers. Try it for free.
        </p>
        <div className="mt-4 flex flex-row items-center gap-10 flex-1">
          <UseCaseCard
            title="Update Salesforce records when new or updated Google Sheets rows are detected"
            logo="https://raw.githubusercontent.com/opengovern/website/refs/heads/main/connectors/icons/github.svg"
            logo1="https://raw.githubusercontent.com/opengovern/website/refs/heads/main/connectors/icons/openai.svg"
            onClick={() => {}}
            tag="tag1"
          />
          <UseCaseCard
            title="Create Google Sheets spreadsheet rows from new Salesforce custom objects"
            logo="https://raw.githubusercontent.com/opengovern/website/refs/heads/main/connectors/icons/github.svg"
            logo1="https://raw.githubusercontent.com/opengovern/website/refs/heads/main/connectors/icons/openai.svg"
            onClick={() => {}}
            tag="tag1"
          />
          <UseCaseCard
            title="Create rows on Google Sheets spreadsheets for new Salesforce opportunities"
            logo="https://raw.githubusercontent.com/opengovern/website/refs/heads/main/connectors/icons/github.svg"
            logo1="https://raw.githubusercontent.com/opengovern/website/refs/heads/main/connectors/icons/openai.svg"
            onClick={() => {}}
            tag="tag1"
          />
        </div>
      </section>
      <section
        aria-labelledby="code-example-title"
        className="mx-auto mt-28 w-full max-w-6xl px-3 flex flex-col justify-center items-center"
      >
        {/* <Badge>Developer-first</Badge> */}
        <h2
          id="code-example-title"
          className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300"
        >
          CloudOps
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-center text-gray-600 dark:text-gray-400">
          Descript Unicorn Platform is a powerful website builder for startups,
          solo-entrepreneurs and hackers. Try it for free.ion
        </p>
        <div className="mt-4 flex flex-row items-center gap-10 flex-1">
          <UseCaseCard
            title="Update Salesforce records when new or updated Google Sheets rows are detected"
            logo="https://raw.githubusercontent.com/opengovern/website/refs/heads/main/connectors/icons/github.svg"
            logo1="https://raw.githubusercontent.com/opengovern/website/refs/heads/main/connectors/icons/openai.svg"
            onClick={() => {}}
            tag="tag1"
          />
          <UseCaseCard
            title="Create Google Sheets spreadsheet rows from new Salesforce custom objects"
            logo="https://raw.githubusercontent.com/opengovern/website/refs/heads/main/connectors/icons/github.svg"
            logo1="https://raw.githubusercontent.com/opengovern/website/refs/heads/main/connectors/icons/openai.svg"
            onClick={() => {}}
            tag="tag1"
          />
          <UseCaseCard
            title="Create rows on Google Sheets spreadsheets for new Salesforce opportunities"
            logo="https://raw.githubusercontent.com/opengovern/website/refs/heads/main/connectors/icons/github.svg"
            logo1="https://raw.githubusercontent.com/opengovern/website/refs/heads/main/connectors/icons/openai.svg"
            onClick={() => {}}
            tag="tag1"
          />
        </div>
      </section>
    </main>
  );
}

"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../Accordion";

const faqs = [
  {
    question:
      "What are the key differences between the Community and paid versions of OpenComply?",
    answer: `The Community edition of OpenComply offers a valuable open-source foundation, but it differs from the paid versions (Professional and Enterprise) in several key areas:
Data Migration: Updates in the Community edition that change the database structure require manual data migration, which can be time-consuming. The Professional and Enterprise editions streamline this process with built-in tools for seamless upgrades.
Hosting: The Community edition is self-hosted, requiring you to manage the infrastructure. The Professional and Enterprise editions offer flexible hosting options, including SaaS and managed hosting within your preferred cloud environment.
Audit History: The Community edition provides limited audit history, which may not meet the needs of organizations with stringent compliance requirements. The Professional and Enterprise editions offer comprehensive audit trails to enhance security and compliance.
Connectors:
Community: Access to open-source connectors.
Professional: Access to all open-source connectors and up to 5 Premium Connectors.
Enterprise: Access to all available connectors.
`,
  },
  {
    question: "How is OpenComply licensed?",
    answer: `OpenComply Community is licensed under the Business Source License (BSL) v1.1. This open-source license allows for:
Copying and modification: You can freely copy and modify the OpenComply source code.
Redistribution: You can freely redistribute the modified or unmodified source code.
Non-commercial use: You can use OpenComply for non-commercial purposes without restrictions.
Commercial use: Commercial use is permitted under certain conditions, primarily to prevent direct competition with OpenComply's paid offerings.
The BSL ensures that the OpenComply community can effectively use and contribute to the open-source version while protecting the company's commercial interests. Please see https://www.opencomply.io/license or reach out to licensing@opencomply.io


`,
  },
  
];

export function FaqsPrice() {
  return (
    <section
      className="mx-auto mb-8 mt-28 max-w-6xl p-1 px-2 sm:mt-56"
      aria-labelledby="faq-title"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-14">
        <div className="col-span-full sm:col-span-5">
          <h2
            id="faq-title"
            className="inline-block scroll-my-24 bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 pr-2 text-2xl font-bold tracking-tighter text-transparent lg:text-3xl dark:from-gray-50 dark:to-gray-300"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-400">
            Do you have any questions? Your answer might be below!
            {/* Don&rsquo;t
            hesitate to get in touch with our{" "}
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-300 dark:text-indigo-400"
            >
              customer support
            </a>{" "}
            team. */}
          </p>
        </div>
        <div className="col-span-full mt-6 lg:col-span-7 lg:mt-0">
          <Accordion type="multiple" className="mx-auto">
            <AccordionItem
              value={
                "What are the key differences between the Community and paid versions of OpenComply?"
              }
              key={
                "What are the key differences between the Community and paid versions of OpenComply?"
              }
              className="py-3 first:pb-3 first:pt-0"
            >
              <AccordionTrigger>
                What are the key differences between the Community and paid
                versions of OpenComply?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-400">
                The Community edition of OpenComply offers a valuable
                open-source foundation, but it differs from the paid versions
                (Professional and Enterprise) in several key areas:
                <br />
                <ul>
                  <li>
                    <b>Data Migration:</b> Updates in the Community edition that
                    change the database structure require manual data migration,
                    which can be time-consuming. The Professional and Enterprise
                    editions streamline this process with built-in tools for
                    seamless upgrades.
                  </li>
                  <li>
                    <b>Hosting:</b>The Community edition is self-hosted,
                    requiring you to manage the infrastructure. The Professional
                    and Enterprise editions offer flexible hosting options,
                    including SaaS and managed hosting within your preferred
                    cloud environment.
                  </li>
                  <li>
                    <b>Audit History: </b>The Community edition provides limited
                    audit history, which may not meet the needs of organizations
                    with stringent compliance requirements. The Professional and
                    Enterprise editions offer comprehensive audit trails to
                    enhance security and compliance.
                  </li>
                  <li>
                    <b>Connectors:</b>
                    <ul className="pl-5">
                      <li>
                        <b>Community:</b>Access to open-source connectors.
                      </li>
                      <li>
                        <b>Professional:</b>Access to all open-source connectors
                        and up to 5 Premium Connectors.
                      </li>
                      <li>
                        <b>Enterprise:</b>Access to all available connectors.
                      </li>
                    </ul>
                  </li>
                </ul>
               
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value={"Are there any usage limits in the Community Edition?"}
              key={"Are there any usage limits in the Community Edition?"}
              className="py-3 first:pb-3 first:pt-0"
            >
              <AccordionTrigger>
                Are there any usage limits in the Community Edition?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-400">
                We want to make the Community Edition as valuable as possible,
                especially to startups and small teams. It includes a
                comprehensive set of features, such as API, WebUI, and
                enterprise-level capabilities like SSO. Importantly, there are
                no pre-set usage limits imposed on the features.
                <br />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value={"How is OpenComply licensed?"}
              key={"How is OpenComply licensed?"}
              className="py-3 first:pb-3 first:pt-0"
            >
              <AccordionTrigger>How is OpenComply licensed?</AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-400">
                OpenComply Community is licensed under the Business Source
                License (BSL) v1.1. This open-source license allows for:
                <br />
                <ul>
                  <li>
                    <b>Copying and modification:</b>You can freely copy and
                    modify the OpenComply source code.
                  </li>
                  <li>
                    <b>Redistribution</b>You can freely redistribute the
                    modified or unmodified source code.
                  </li>
                  <li>
                    <b>Non-commercial use: </b>You can use OpenComply for
                    non-commercial purposes without restrictions.
                  </li>
                  <li>
                    <b>Commercial use:</b>Commercial use is permitted under
                    certain conditions, primarily to prevent direct competition
                    with OpenComply's paid offerings.
                  </li>
                </ul>
                The BSL ensures that the OpenComply community can effectively
                use and contribute to the open-source version while protecting
                the company's commercial interests. Please see
                <a href="https://www.opencomply.io/license" target="__blank">
                  {" "}
                  https://www.opencomply.io/license
                </a>{" "}
                or reach out to licensing@opencomply.io
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

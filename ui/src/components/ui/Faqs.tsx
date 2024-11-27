"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../Accordion"

const faqs = [
  {
    question: "What does Governance mean?",
    answer: `Governance, or Cloud Governance, refers to the rules, policies, and procedures that help organizations manage and optimize cloud services.

A Governance Framework provides a structured approach to applying these guidelines across the organization, ensuring compliance, security, and cost-efficiency.

For instance, if your app uses AWS S3 or Google Blob for storing documents, the framework dictates encryption, lifecycle management, and tagging policies to apply. You may also need approval via GitHub or JIRA before production deployment, depending on team requirements.

Governance frameworks optimize costs, reduce waste, enhance security, improve reliability, and ensure compliance.

Note: "Governance" and "Cloud Governance" are used interchangeably on our platform.`,
  },
  {
    question: "What is OpenComply?",
    answer: `OpenComply is an open-source project that streamlines governance across multiple cloud providers providers, platforms, and tools with a vendor-neutral policy language.

It offers comprehensive visibility, risk assessment, and policy definition frameworks to tackle governance challenges and conduct compliance audits.

The product is available in both the Community Edition, which is open source, and the Enterprise Edition, featuring over 50+ security, operational, and best practices policy frameworks, along with the capability to inspect numerous assets and attributes.
`,
  },
  {
    question: "How can this help me?",
    answer: `OpenComply is designed for Engineering, DevOps, and Security teams to simplify their workflows.


Visibility: Consolidates visibility of cloud assets, identities, configurations, repositories, and incidents across more than 50 cloud providers and tools, enhancing management and oversight. 



Improve Security: Audit against recognized security frameworks such as CIS, NIST CSF, Cloud Security Alliance (CSA), FedRAMP, and more. Captures evidence and tracks drifts.



Audit for Best Practices: Assesses cloud workloads against the Well-Architected Frameworks to identify reliability gaps in data, network, application, and cloud compliance. Ensures infrastructure alignment with vendor-recommended best practices to boost efficiency, security, and reliability.

`,
  },
  {
    question:
      "What are key differences between the Community and Enterprise editions?",
    answer: `The Community Edition is open-source and licensed under the Elastic License V2. It includes three connectors: AWS, Azure, and Entra ID (Azure AD). While limited to these three connectors, there are no restrictions on the number of integrations you can create within them.


There is no support and SLAs available for Community Edition.

Under the Elastic License V2, you can't resell, repackage, or offer the software or any derivative works as a service without explicit permission. You are free to use it internally without any limits.



The Enterprise Edition on your own infrastructure or as SaaS, supporting over 50 tools and platforms like GitHub, GitLab, Snyk, and CloudFlare. It retains audit history across major upgrades, which occur every six months.
Both Managed and SaaS hosted options are available for the Enterprise Edition, with the Managed option ensuring data remains with the customer.
`,
  },
  {
    question: "What is Steampipe and why is it important?",
    answer: `Steampipe is an open-source tool that turns your cloud infrastructure into a queryable database. Use familiar SQL to explore and analyze your cloud environment in real-time. Think of it as a developer-friendly, always up-to-date catalog of everything in your cloud.
OpenGovernance takes Steampipe's power further, adding a layer of governance and control. We enable you to save query history, visualize results in dashboards, manage policies across multiple accounts, and collaborate with your team - all within an intuitive UI. 

We also extend Steampipe's vendor-agnostic SQL-based language to seamlessly integrate with over 50+ DevOps, Cloud, Kubernetes, Identity Providers, and other platforms and tools. It's like Steampipe, supercharged for security, compliance, and operational excellence.
`,
  },
];

export function Faqs() {
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
            {faqs.map((item) => (
              <AccordionItem
                value={item.question}
                key={item.question}
                className="py-3 first:pb-3 first:pt-0"
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

// @ts-nocheck
// import Code from "../Code"
import {
  RiCodeBlock,
  RiContractUpDownLine,
  RiGitBranchLine,
  RiGroup2Line,
  RiGroupLine,
  RiLink,
  RiLinksLine,
  RiLockStarLine,
  RiOpenSourceLine,
  RiP2pLine,
  RiPlugLine,
  RiShieldKeyholeLine,
  RiShieldStarLine,
  RiStackLine,
} from "@remixicon/react";
import { Badge } from "../Badge";
import CodeExampleTabs from "./CodeExampleTabs";

const code = `CREATE TABLE Customers (
    customer_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    gender CHAR(1),
    rewards_member BOOLEAN
);

CREATE TABLE Orders (
    order_id SERIAL PRIMARY KEY,
    sales_date DATE,
    customer_id INT REFERENCES Customers(customer_id)
);

CREATE TABLE Items (
    item_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    price DECIMAL(10, 2)
);

CREATE TABLE Order_Items (
    order_id INT REFERENCES Orders(order_id),
    item_id INT REFERENCES Items(item_id),
);`;

const code2 = `async function fetchCustomerOrders() {
    const result = await prisma.orders.findMany({
        where: {
            customer: {
                name: 'Jack Beanstalk'
            },
            segmentation: {
                type: 'young professional',
                joinedYear: 2024,
                region: 'us-west-01',
            }
        },
        include: {
            customer: true,
            order_items: {
                include: {
                    item: true
                }
            }
        }
    });
    return result;
}`;

const features = [
  // {
  //   name: "Adopt Inside Your Workflows",
  //   description:
  //     "Integrate compliance into daily operations and share real-time insights for faster, aligned decisions.",
  //   icon: RiGitBranchLine,
  // },
  {
    name: "Policy-as-Code",
    description:
      "Manage policies in Git, no scripts required—streamline compliance and audits.",
    icon: RiCodeBlock,
  },
  {
    name: "Open Platform",
    description:
      "Customize and extend freely with a flexible, open architecture",
    icon: RiOpenSourceLine,
  },
  {
    name: "Extensible",
    description:
      "Connect DevOps, AI/ML, and SecOps tools for full-stack visibility.",
    icon: RiPlugLine,
  },

  {
    name: "Single Source of Truth",
    description:
      "Eliminate silos with a single data plane for consistent, reliable insights.",
    icon: RiStackLine,
  },
  {
    name: "Enterprise Security",
    description:
      "Scale confidently with SSO, SSL, and robust APIs—no agents or disruptions needed.",
    icon: RiLockStarLine,
  },
  {
    name: "Vendor-Agnostic",
    description:
      "Audit compliance across clouds, environments, and tools without lock-in.",
    icon: RiP2pLine,
  },

  // {
  //   name: "Full Stack Governance",
  //   description:
  //     "Cover your entire stack and secure every change—no blind spots, no guesswork.",
  //   icon: RiGroupLine,
  // },
];

export default function CodeExample() {
  return (
    <section
      aria-labelledby="code-example-title"
      className="mx-auto sm:mt-28 mt-4 w-full  px-3 flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900"
    >
      <div className="w-full max-w-6xl 2xl:max-w-7xl my-12 flex flex-col justify-center items-center">
        <h2
          id="code-example-title"
          className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-3xl font-bold tracking-tighter text-transparent sm:text-5xl md:text-5xl dark:from-gray-50 dark:to-gray-300"
        >
          Why opencomply?
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-gray-900 dark:text-gray-400">
          Govern your entire stack. See what matters. Secure every deployment
          and change.
        </p>

        <dl className="sm:mt-24 mt-4 grid grid-cols-3 gap-10">
          {features.map((item) => (
            <div
              key={item.name}
              className="col-span-full sm:col-span-2 lg:col-span-1"
            >
              <div className="w-fit rounded-lg p-2 shadow-md shadow-indigo-400/30 ring-1 ring-black/5 dark:shadow-indigo-600/30 dark:ring-white/5">
                <item.icon
                  aria-hidden="true"
                  className="size-6 text-indigo-600 dark:text-indigo-400"
                />
              </div>
              <dt className="mt-6 font-semibold text-gray-900 dark:text-gray-50">
                {item.name}
              </dt>
              <dd className="mt-2 leading-7 text-gray-600 dark:text-gray-400">
                {item.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

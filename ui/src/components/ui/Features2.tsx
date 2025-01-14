import React, { useState } from "react";
import { Badge } from "../Badge";
import { Button } from "../Button";
import { Modal } from "@cloudscape-design/components";
import { title } from "process";

const stats = [
  {
    name: "Bandwith increase",
    value: "+162%",
  },
  {
    name: "Better storage efficiency",
    value: "2-3x",
  },
  {
    name: "Rows ingested / second",
    value: "Up to 9M",
  },
];

export default function Features2() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const getContent = (selected: string) => {
    const cards = [];
    var content = {};
    switch (selected) {
      case "accessible":
        cards.push(
          {
            title: "User-Friendly",
            description:
              "A clean interface and intuitive navigation make OpenComply easy for teams of any skill level to use.",
            link: "https://tour.opencomply.io/embed/cm5wy9adt0166010iznzlqg0v?embed_v=2",
          },
          {
            title: "Easy to Adopt",
            description:
              "Get up and running quickly, minimizing disruptions to existing processes.",
            link: "https://tour.opencomply.io/embed/cm5wyjq2t01i01d0hib0buuxk?embed_v=2",
          },
          {
            title: "Customizable",
            description:
              "Tailor OpenComply to your specific needs, ensuring seamless alignment with organizational goals.",
            link: "https://tour.opencomply.io/embed/cm5wylkzs01iu1d0h5k6tcbzg?embed_v=2",
          },
          // {
          //   title: "Customizable",
          //   description:
          //     "Tailor OpenComply to your specific needs, ensuring seamless alignment with organizational goals.",
          //   link: "https://tour.opencomply.io/embed/cm5wylkzs01iu1d0h5k6tcbzg?embed_v=2",
          // }
        );
        content = {
          title: "Security & Compliance Made Easy",
          cards: cards,
        };
        break;
      case "agile":
        cards.push(
          {
            title: "Policies as Queries",
            description:
              "Define and enforce compliance with dynamic, query-based rules that adapt as your environment evolves.",
            link: "https://tour.opencomply.io/embed/cm5wz0utr01gd010ic1r7i9z5?embed_v=2",
          },
          {
            title: "Modular",
            description:
              "Implement features as needed—expand or refine functionality without disrupting your existing setup",
            link: "https://tour.opencomply.io/embed/cm5wyzm5901fj010iufslb7bm?embed_v=2",
          },
          {
            title: "Scalable",
            description:
              "Easily handle growing demands with Git-based version control for transparent tracking and reliable rollbacks.",
            link: "https://tour.opencomply.io/embed/cm5wyv3ob01c3010iidin7nm5?embed_v=2",
          }
        );
        content = {
          title: "Agile & Adaptable for Evolving Needs",
          cards: cards,
        };
        break;
      case "inclusive":
        cards.push(
          {
            title: "Support Multiple Functions",
            description:
              "Streamline DevOps, SecOps, & MLOps with integrated compliance checks throughout the entire application lifecycle.",
            link: "text",
          },
          {
            title: "Versatile",
            description:
              "Address diverse compliance requirements through a single, flexible platform that adapts to your evolving needs.",
            link: "text",
          },
          {
            title: "Integrates with Existing Tools",
            description:
              "Seamlessly integrates with your existing tools and stacks, improving efficiency and collaboration across teams.",
            link: "text",
          }
        );
        content = {
          title: "Security and Compliance for Every Team",
          cards: cards,
        };
        break;

      default:
        break;
    }
    return content;
  };

  return (
    <section
      aria-labelledby="features-title"
      className=" bg-gray-100 dark:bg-gray-900 my-12"
    >
      {/* <Badge>Security at Scale</Badge> */}
      <div className=" sm:mt-24 mt-4 sm:mb-24 mb-4 max-w-6xl 2xl:max-w-7xl px-3 sm:px-36 py-12 mx-auto       rounded-xl  flex flex-col justify-start items-start">
        <h2
          id="features-title"
          className=" inline-block text-slate-950 dark:text-slate-50 text-start w-full bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter  sm:text-4xl md:text-4xl "
        >
          Security and Compliance: it doesn't have to hurt{" "}
        </h2>
        <p className="mt-6   text-lg max-w-3xl  text-left leading-7 text-slate-950 dark:text-slate-50">
          {/* <b>Compliance is painful.</b> <br />
        <br /> */}
          <b>Let's be honest. </b>Security and compliance tools are often a
          barrier to progress. They are proprietary, expensive, rigid, and often
          struggle to handle modern tech stacks.
          <br />
          <br />
          We believe security and compliance should&nbsp;
          <b>empower,&nbsp;</b>not hinder,&nbsp; progress. That's why we created
          OpenComply, a platform designed by practitioners for practitioners.
          <br />
          <br />
          OpenComply makes security and compliance
          <span
            className=" cursor-pointer rounded-md  "
            onClick={() => {
              setOpen(true);
              setSelected("accessible");
            }}
          >
            <b>
              <mark className="bg-gradient-to-br from-indigo-900 to-indigo-600 text-white p-0.5 sm:py-2  mx-1 text-center rounded-md">
                {" "}
                accessible
              </mark>
            </b>
          </span>
          <span
            className=" cursor-pointer rounded-md "
            onClick={() => {
              setOpen(true);
              setSelected("agile");
            }}
          >
            <b>
              <mark className="btn-grad1 p-0.5 sm:py-2  mx-1 text-center rounded-md">
                {" "}
                agile
              </mark>
            </b>
          </span>{" "}
          <span
            className=" cursor-pointer sm:mt-0 rounded-md "
            onClick={() => {
              setOpen(true);
              setSelected("inclusive");
            }}
          >
            and
            <b>
              <mark className="btn-grad2  p-0.5  sm:py-2  mx-1 text-center rounded-md">
                inclusive
              </mark>
            </b>
          </span>
          <br />
          <br />
          Simplify security and compliance. Focus on building exceptional
          products.
          <br />
          <br />
          Welcome to
          <b> opencomply.</b>
        </p>
      </div>
      {/* <div className="mt-4 w-full text-center">
        <Button className="mt-4 ">
          <a href="https://opencomply.io/oss" target="__blank">
            See it for yourself
          </a>
        </Button>
      </div> */}
      {/* <dl className="mt-12 grid grid-cols-1 gap-y-8 md:grid-cols-3 md:border-y md:border-gray-200 md:py-14 dark:border-gray-800"> */}
      {/* {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <div className="border-l-2 border-indigo-100 pl-6 md:border-l md:text-center lg:border-gray-200 lg:first:border-none dark:border-indigo-900 lg:dark:border-gray-800">
              <dd className="inline-block bg-gradient-to-t from-indigo-900 to-indigo-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent lg:text-6xl dark:from-indigo-700 dark:to-indigo-400">
                {stat.value}
              </dd>
              <dt className="mt-1 text-gray-600 dark:text-gray-400">
                {stat.name}
              </dt>
            </div>
          </React.Fragment>
        ))} */}
      {/* </dl> */}
      <Modal
        header={selected.slice(0, 1).toUpperCase() + selected.slice(1)}
        size="max"
        visible={open}
        onDismiss={() => setOpen(false)}
      >
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-xl font-bold">
              {/* @ts-ignore */}
              {/* {getContent(selected)?.title} */}
            </span>
          </div>
          <div className="flex sm:flex-row flex-col h-full  gap-2">
            <div className="flex flex-col sm:w-1/6 w-full gap-5 justify-between   items-start ">
              {/* @ts-ignore */}
              {getContent(selected).cards?.map(
                (content: any, index: number) => {
                  return (
                    <>
                      <div
                        onClick={() => setSelectedIndex(index)}
                        className={`rounded-xl w-full cursor-pointer  hover:border-slate-500 border border-transparent      bg-slate-300 sm:p-4 p-2 flex flex-col gap-2 ${selectedIndex == index && 'bg-slate-500'}`}
                      >
                        <span className="sm:text-lg text-base font-bold">
                          {content.title}
                        </span>
                        <span className="sm:text-base text-sm">{content.description}</span>

                        {/* {index == selectedIndex && (
                        )} */}
                      </div>
                    </>
                  );
                }
              )}
            </div>
            <div className="iframe-div     bg-transparent w-full  h-full min-h-72       animate-slide-up-fade  sm:w-full ">
              <iframe
                // @ts-ignore
                src={
                  // @ts-ignore

                  getContent(selected)?.cards
                    ? // @ts-ignore
                      getContent(selected).cards[selectedIndex].link
                    : ""
                }
                loading="lazy"
                title="Website - Product Tour"
                allow="clipboard-write"
                frameBorder="0"
                allowFullScreen={true}
                className="iframe-div-frame rounded-xl w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
}

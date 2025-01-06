import axios from "axios";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";
import { useMDXComponents } from "../../components/mdx-components.js";
import { Spinner } from "@cloudscape-design/components";
import rehypeRaw from "rehype-raw";
export default function License() {
  const [licence, setLicence] = useState("");
  const [loding, setLoading] = useState(false);

  const fetchLicence = () => {
    setLoading(true);
    axios
      .get(
        "https://raw.githubusercontent.com/opengovern/opencomply/refs/heads/main/LICENSE.md"
      )
      .then((res) => {
        setLicence(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);

        setLoading(false);
      });
  };
  useEffect(() => {
    fetchLicence();
  }, []);
  return (
    <main
      className="mx-auto pt-36 max-w-3xl animate-slide-up-fade px-3"
      style={{
        animationDuration: "600ms",
        animationFillMode: "backwards",
      }}
    >
      <div className="text-center">
        <h1 className="inline-block bg-gradient-to-t from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-5xl dark:from-gray-50 dark:to-gray-300">
          Business Source License
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          <Balancer>
            © 2025 open governance Inc. d/b/a opencomply.io. All rights
            reserved.
          </Balancer>
        </p>
      </div>
      <div
        className="mt-5 flex sm:flex-row flex-col justify-start items-center flex-1 gap-12"
        style={{ flex: "1 1 0" }}
      >
        {loding ? (
          <>
            <Spinner />
          </>
        ) : (
          <>
            <div className="">
              {" "}
              <ReactMarkdown
                // @ts-ignore
                components={useMDXComponents({})}
                children={licence}
                skipHtml={false}
                rehypePlugins={[rehypeRaw]}
              />
            </div>
          </>
        )}
      </div>
    </main>
  );
}

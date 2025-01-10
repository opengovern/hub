import { Logos } from "./Logos"
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual ,Autoplay} from "swiper/modules";
import { RiArrowRightDoubleLine } from "@remixicon/react";
// Import Swiper styles
import  AWSSVG  from "../../images/integration-logos/aws.svg";
import  AZURESVG  from "../../images/integration-logos/azure.svg";
import  ENTRASVG  from "../../images/integration-logos/entraid.svg";
import  CLOUDSVG  from "../../images/integration-logos/cloudflare.svg";
import  DIGITALSVG  from "../../images/integration-logos/DigitalOcean_logo.svg";
import  GITUBSVG  from "../../images/integration-logos/github.svg";
import  OPENCOMPLYSVG  from "../../images/integration-logos/opencomply.svg";
import  OPENAISVG  from "../../images/integration-logos/openai.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Grid } from "@tremor/react";
import { ArrowAnimated } from "./ArrowAnimated";
import { Button } from "@cloudscape-design/components";



export default function LogoCloud2() {
    const [integrations, setIntegrations] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
  

    const getIntegrations = async () => {
      setLoading(true);
      axios
        .get(
          "https://raw.githubusercontent.com/opengovern/opengovernance/refs/heads/main/assets/integrations/integrations.json"
        )
        .then((res) => {
          if (res.data) {
            const arr = res.data;
            // arr.sort(() => Math.random() - 0.5);
            setIntegrations(arr);
           
          }
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });
    };
    useEffect(()=>{getIntegrations
      ()
    },[])
  return (
    <section
      aria-labelledby="code-example-title"
      className="mx-auto sm:mt-28 mt-4 w-full   flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900   "
    >
      {/* <Badge>Developer-first</Badge> */}
      <div className="max-w-6xl 2xl:max-w-7xl w-full px-3 flex flex-col sm:my-10 my-5 justify-center items-center">
        {" "}
        <h2
          id="code-example-title"
          className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-3xl font-bold tracking-tighter text-transparent sm:text-5xl md:text-5xl dark:from-gray-50 dark:to-gray-300"
        >
          Integrates with your tools{" "}
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-gray-900 dark:text-gray-400 w-full text-center">
          Seamlessly integrate OpenComply with your technology stack—across
          Infrastructure, DevOps, AI, and SecOps platforms.
        </p>
        <Grid
          numItems={3}
          numItemsSm={3}
          className="mt-4 sm:mt-20  gap-5 flex-wrap"
        >
          {integrations.slice(0, 9)?.map((item, index) => {
            return (
              <Col>
                <div className="dark:bg-gray-900 hover:dark:bg-gray-600 bg-slate-300 hover:bg-slate-400 w-full flex flex-row justify-start rounded-xl items-start gap-4 py-6 px-4">
                  <div className=" min-w-fit bg-white rounded-xl p-2">
                    <img
                      className="w-8 h-8"
                      src={`https://raw.githubusercontent.com/opengovern/website/main/connectors/icons/${item.Icon}`}
                    />
                  </div>
                  <div className="flex flex-col gap-1 justify-center items-start">
                    <span className="text-base text-slate-900 dark:text-slate-100 overflow-hidden text-nowrap w-full text-ellipsis">
                      {item.name}
                    </span>
                    <span className="text-sm overflow-hidden text-nowrap w-full text-ellipsis text-slate-800 dark:text-slate-300">
                      {item.tags?.usage?.join(",", "")}
                    </span>
                  </div>
                </div>
              </Col>
            );
          })}
        </Grid>
        <div className="mt-12">
          <Button
            // onClick={() => {
            //   navigate("/integrations");
            // }}
            href="/integrations"
            iconAlign="right"
            iconName="external"
            target="_blank"
            variant="primary"
          >
            See all integrations
            {/* <ArrowAnimated /> */}
          </Button>
        </div>
      </div>
    </section>
  );
}

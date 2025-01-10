import { Button } from "../Button";
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
      className="mx-auto sm:mt-28 mt-4 w-full max-w-6xl 2xl:max-w-7xl px-3 flex flex-col justify-center items-center"
    >
      {/* <Badge>Developer-first</Badge> */}
      <h2
        id="code-example-title"
        className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-gray-50 dark:to-gray-300"
      >
        Explore Integrations
      </h2>
      <p className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
        Sources, destinations, transformations and visualizations.
      </p>
      <Grid numItems={4} numItemsSm={4} className="mt-24 sm:mt-4  gap-2 flex-wrap">
        {integrations.slice(0, 12)?.map((item, index) => {
          return (
            <Col>
              <div className="dark:bg-[#081027] hover:dark:bg-[#313541] bg-slate-300 hover:bg-slate-400 w-full flex flex-row justify-start rounded-xl items-start gap-2 p-6">
                <div className=" bg-white rounded-xl p-2">
                  <img
                    className="w-8 h-8"
                    src={`https://raw.githubusercontent.com/opengovern/website/main/connectors/icons/${item.Icon}`}
                  />
                </div>
                <div className="flex flex-col gap-1 justify-center items-start">
                  <span className="text-base text-slate-900 dark:text-slate-100 overflow-hidden text-nowrap w-full text-ellipsis">
                    {item.name}
                  </span>
                  <span className="text-sm w-full text-slate-800 dark:text-slate-300">
                    {item.tags?.usage?.join(",", "")}
                  </span>
                </div>
              </div>
            </Col>
          );
        })}
      </Grid>
      <div className="mt-8">
        <Button onClick={()=>{
          navigate("/integrations")
        }}>
          See more integrations
        </Button>
      </div>
    </section>
  );
}

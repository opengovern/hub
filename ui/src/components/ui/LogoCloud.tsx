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



export default function LogoCloud() {
  return (
    <section
      id="logo cloud"
      aria-label="Company logos"
      className="mt-24 flex animate-slide-up-fade flex-col items-center justify-center gap-y-6 text-center sm:mt-32"
      style={{ animationDuration: "1500ms" }}
    >
      <p className="text-lg flex flex-row gap-2 items-center font-medium tracking-tighter text-gray-800 dark:text-gray-200">
        Integrates with Your Favorite Tools
        <RiArrowRightDoubleLine color="white" />
      </p>
      <div className=" w-[80%] sm:w-1/3 flex  justify-center fill-neutral-500 items-center  text-gray-900  dark:text-gray-200">
        <Swiper
          spaceBetween={window.innerWidth > 640 ? 60 : 20}
          modules={[Autoplay]}
          // virtual
          slidesPerView={window.innerWidth > 640 ? 4 : 3}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          centerInsufficientSlides={true}
          centeredSlides={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper: any) => console.log("swiper")}
        >
          <SwiperSlide>
            <img
              src={AWSSVG}
              className=" integration-logos   w-32 fill-neutral-500 h-12"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src={AZURESVG} className="   w-32 fill-neutral-500 h-12" />
            {/* <Logos.Azure className="   w-12 fill-neutral-500 h-12" /> */}
          </SwiperSlide>
          <SwiperSlide>
            <img src={CLOUDSVG} className="   w-32 fill-neutral-500 h-16" />

            {/* <Logos.CloudFlare className="w-12 fill-neutral-500 h-12" /> */}
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={GITUBSVG}
              className="  integration-logos  w-32 fill-neutral-500 h-12"
            />

            {/* <Logos.Github className=" integration-logos  w-12 h-12" /> */}
          </SwiperSlide>
          <SwiperSlide>
            <img src={ENTRASVG} className=" w-32   fill-neutral-500 h-12" />

            {/* <Logos.EntraID className="  w-12 h-12" /> */}
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={OPENAISVG}
              className="    w-30 integration-logos fill-neutral-500 h-12"
            />

            {/* <Logos.OpenAi className=" integration-logos  w-12 h-12" /> */}
          </SwiperSlide>
          <SwiperSlide>
            <img src={DIGITALSVG} className="w-32   fill-neutral-500 h-12" />

            {/* <Logos.DigitalOcean className="w-12  h-12  " /> */}
          </SwiperSlide>
        </Swiper>

        {/* <Logos.OpenConply className="w-14 h-14 " /> */}
      </div>
      {/* <div>
        <Button className="h-10 mt-2">
          <a href="/integrations">See The complete list</a>
        </Button>
      </div> */}
    </section>
  );
}

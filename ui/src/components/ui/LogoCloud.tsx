import { Button } from "../Button";
import { Logos } from "./Logos"
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual ,Autoplay} from "swiper/modules";
import { RiArrowRightDoubleLine } from "@remixicon/react";
// Import Swiper styles

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
      <div className=" w-1/3 flex  justify-center fill-neutral-500 items-center  text-gray-900  dark:text-gray-200">
        <Swiper
          spaceBetween={window.innerWidth > 640 ? 20 : 30}
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
            <Logos.AWS className="    w-8 fill-neutral-500 h-8" />{" "}
          </SwiperSlide>
          <SwiperSlide>
            <Logos.Azure className="   w-8 fill-neutral-500 h-8" />
          </SwiperSlide>
          <SwiperSlide>
            <Logos.CloudFlare className="w-8 fill-neutral-500 h-8" />
          </SwiperSlide>
          <SwiperSlide>
            <Logos.Github className=" integration-logos  w-8 h-8" />
          </SwiperSlide>
          <SwiperSlide>
            <Logos.EntraID className="  w-8 h-8" />
          </SwiperSlide>
          <SwiperSlide>
            <Logos.OpenAi className=" integration-logos  w-8 h-8" />
          </SwiperSlide>
          <SwiperSlide>
            <Logos.DigitalOcean className="w-8  h-8  " />
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

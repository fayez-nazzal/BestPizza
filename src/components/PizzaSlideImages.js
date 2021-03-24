import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "swiper/swiper-bundle.min.css";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideText from "./SlideText";

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

const PizzaSlideImages = () => {
  return (
    <div className="relative h-96 md:h-140 -mt-18">
      <div className="absolute top-0 left-0 right-0" dir="rtl">
        <Swiper
          id="main"
          effect="fade"
          navigation
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 7200,
            disableOnInteraction: true,
          }}
        >
          <SwiperSlide>
            <StaticImage
              className="w-screen h-96 md:h-140"
              alt="pizza show"
              src="../images/pizzaShowLeft.jpg"
              loading="eager"
            />
            <SlideText title="اعرف المعنى الحقيقي للبيتزا">
              مع <span className="text-red-dark">بيست بيـتـزا</span> طعم البيتزا
              بكون غير, وعذوقك!
            </SlideText>
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              className="w-screen h-96 md:h-140"
              alt="peproni pizza"
              src="../images/peproni.jpg"
              loading="lazy"
              placeholder="blurred"
            />
            <SlideText title="بيتزا وعكيفك">
              شو ما كان ذوقك,{" "}
              <span className="text-red-dark">بيست بيـتـزا</span> بتوفره!
            </SlideText>
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              className="w-screen h-96 md:h-140"
              alt="professional chef"
              src="../images/profChef.jpg"
              loading="lazy"
              placeholder="blurred"
            />
            <SlideText title="محضرة من قبل محترفين">
              فريق مكون من مجموعة من عباقرة البيتزا!
            </SlideText>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PizzaSlideImages;

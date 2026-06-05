"use client";

import { useEffect, useState } from "react";
import { getHeroSlides } from "@/lib/HeroApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Hero() {
  const [heroData, setHeroData] = useState([]);

  useEffect(() => {
    async function HeroData() {
      const data = await getHeroSlides();
      setHeroData(data);
    }

    HeroData();
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#FFF8EA]">
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-[#FFF8EA]
          via-[#F8E9B8]
          to-[#F4D98A]
        "
      />

      <div
        className="
          absolute
          -top-24 -right-24
          w-[300px] h-[300px]
          rounded-full
          bg-[#FFE8A3]/20
          blur-[90px]
        "
      />

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        className="relative z-10"
      >
        {heroData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="
                max-w-[1500px]
                mx-auto
                px-4 sm:px-6 lg:px-8
                py-8 md:py-10 lg:py-14
                grid
                md:grid-cols-2
                items-center
                gap-8
              "
            >
              <div className="space-y-5 text-center md:text-left">
                <p className="text-[#7B9B3A] font-medium text-sm">
                  {slide.subtitle}
                </p>

                <h1
                  className="
                    font-bold
                    text-[#2E1F12]
                    leading-tight
                    text-4xl
                    sm:text-5xl
                    lg:text-6xl
                  "
                >
                  {slide.title}
                </h1>

                <p
                  className="
                    text-[#6D5B45]
                    text-sm
                    sm:text-base
                    max-w-md
                    mx-auto
                    md:mx-0
                  "
                >
                  {slide.description}
                </p>

                <button
                  className="
                    px-6 py-3
                    rounded-full
                    bg-[#E88A17]
                    hover:bg-[#d97706]
                    text-white
                    shadow-md
                    transition
                  "
                >
                  {slide.buttonText}
                </button>
              </div>

              <div
                className="
                  relative
                  flex
                  justify-center
                  md:justify-end
                  items-center
                "
              >
                <div
                  className="
                    absolute
                    bottom-[12%]
                    w-[180px]
                    sm:w-[240px]
                    lg:w-[300px]
                    h-[35px]
                    rounded-full
                    bg-black/10
                    blur-3xl
                  "
                />

              <div
  className="
    relative
    h-[260px]
    sm:h-[320px]
    md:h-[380px]
    lg:h-[420px]
    flex
    items-center
    justify-center
  "
>
  <img
    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${slide.image.url}`}
    alt={slide.title}
    className="
      max-h-full
      max-w-full
      object-contain
    "
  />
</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
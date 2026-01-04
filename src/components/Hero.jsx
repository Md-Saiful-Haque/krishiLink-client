import React from 'react';
import { Link } from "react-router";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Hero = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/736x/17/8d/9b/178d9bd35d762085f2a6e234c9848064.jpg",
      title: "Your Farm, Your Network",
      description:
        "Take control of your agricultural business. Manage your crops, connect with interested buyers, and grow your network — all in one place.",
        btnText: "Explore Listings",
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/1200x/9c/b6/e1/9cb6e1b1b793a101da1b7406f3690a45.jpg",
      title: "Digital Farming for a Better Tomorrow",
      description:
        "Using technology to modernize agriculture, KrishiLink helps farmers move from traditional trade to a digital, connected marketplace.",
      btnText: "Browse All Properties",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/1200x/e9/77/5d/e9775d09feceb563c87fb9baed86101b.jpg",
      title: "Empowering Every Farmer",
      description:
        "Krishi supports every farmer by simplifying communication, trade, and access to market information — ensuring fair opportunities for all.",
      btnText: "Browse All Properties",
    },
  ];

  return (
    <div className="w-full h-[60vh] relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover brightness-[0.50]"
              />

              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 md:px-10">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mb-6 drop-shadow-md">
                  {slide.description}
                </p>
                <Link
                  
                  className="btn bg-[#f1cf69] border-none text-[#334b35] text-base px-6"
                >
                  {slide.btnText}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
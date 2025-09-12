import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";

import img1 from "../assets/clipboard-image-1757680854.png";
import img2 from "../assets/clipboard-image-1757680909.png";
import img3 from "../assets/clipboard-image-1757690337.png";
import img4 from "../assets/clipboard-image-1757680989.png";
import img5 from "../assets/clipboard-image-1757681024.png";

export default function TopSwiper() {
  const slides = [
    { img: img1, text: "Create Your Car" },
    { img: img2, text: "Add Your Car" },
    { img: img3, text: "Find Beautiful Designs" },
    { img: img4, text: "Customize Freely" },
    { img: img5, text: "Drive With Style" },
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* faqat swiper ni google dan oldim ustoz olishingiz mumkin dedilar */}
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="w-full h-[800px]"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              <img
                src={slide.img}
                alt={`Slide ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover blur-md brightness-75"
              />

              <div className="relative z-10 flex items-center justify-center h-full">
                <h2
                  className="text-4xl md:text-6xl font-extrabold italic 
             text-white 
             drop-shadow-[0_0_20px_rgba(255,255,255,0.9)]"
                >
                  {slide.text}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="grid grid-cols-2 gap-[40px] p-[40px]">
        <div className="text-white border border-white rounded-2xl bg-gray-900/60 h-[200px] mt-[30px] p-[20px] text-5xl italic font-mono">
          Start your work now!
        </div>
        <div className="text-white border border-white  bg-gray-900/60 h-[200px] mt-[30px] p-[70px]">
          <button
            className="w-full h-full rounded-full text-3xl 
             bg-blue-600 text-white font-semibold 
             hover:bg-blue-900 active:scale-95 
             transition duration-300"
          >
            start
          </button>
        </div>
      </div>
    </div>
  );
}

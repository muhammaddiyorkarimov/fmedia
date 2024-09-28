import React, { useEffect, useRef } from "react";
import "./WorldCard.css";
import ViewAllButton from "../ViewAllButton/ViewAllButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import images from "../../images";
import { useNavigate } from "react-router-dom";

const WorldCard = ({ data }) => {
  const navigate = useNavigate();

  const isHeadlineLong = (headline) => {
    const wordCount = headline.split(" ").length;
    return wordCount > 12;
  };

  // Refs for custom navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperInstanceRef = useRef(null);

  useEffect(() => {
    if (swiperInstanceRef.current && prevRef.current && nextRef.current) {
      swiperInstanceRef.current.params.navigation.prevEl = prevRef.current;
      swiperInstanceRef.current.params.navigation.nextEl = nextRef.current;
      swiperInstanceRef.current.navigation.destroy();
      swiperInstanceRef.current.navigation.init();
      swiperInstanceRef.current.navigation.update();
    }
  }, [prevRef, nextRef]);

  const handleNavigate = (headline) => {
    navigate("/news", { state: { headline } });
  };

  return (
    <div className="world-card-wrapper">
      <div className="world-card-name">
        <h1>Jahon</h1>
        <div className="swiper-btns">
          <div ref={prevRef} className="custom-prev">
            <img src={images.left} alt="Previous" />
          </div>
          <div ref={nextRef} className="custom-next">
            <img src={images.right} alt="Next" />
          </div>
        </div>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={false}
        modules={[Navigation, Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          730: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1078: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1425: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="world-card">
              <div className="world-card-image">
                <img
                  src="https://images.ctfassets.net/kftzwdyauwt9/6Hpmny9K2Z8Xxget5bmlWa/66634b4c69faef5600e5ea48f499ba5e/Anastronautridingahorseinaphotorealisticstyle6.jpg?w=3840&q=90&fm=webp"
                  alt={item.title}
                />
              </div>
              <div className="world-card-content">
                <p className="world-card-date">{item.date}</p>
                <h2 className="world-card-title">{item.headline}</h2>
                {!isHeadlineLong(item.headline) && (
                  <p className="world-card-description">{item.description}</p>
                )}
              </div>
              <div className="detailed-button-wrapper"  onClick={() => handleNavigate(item.headline)}>
                <p className="detailed-button" >
                  <span>Batafsil</span>
                  <span className="detailed-arrow">→</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WorldCard;

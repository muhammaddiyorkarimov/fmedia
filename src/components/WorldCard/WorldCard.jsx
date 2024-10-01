import React, { useEffect, useRef, useState } from "react";
import "./WorldCard.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import { Link, useNavigate } from "react-router-dom";
import SkeletonContent from "../SkeletonContent/SkeletonContent";

const WorldCard = ({ data, category }) => {
  const [descriptions, setDescriptions] = useState({});

  const navigate = useNavigate();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const isHeadlineLong = (headline) => {
    const wordCount = (headline?.split(" ") || []).length;
    return wordCount > 12;
  };

  const shortenDescription = (id, description, maxLines) => {
    const lines = description.split("\n").length;
    if (lines > maxLines) {
      return description.split("\n").slice(0, maxLines).join(" ") + "...";
    }
    return description;
  };

  useEffect(() => {
    if (data?.results?.length) {
      const newDescriptions = data.results.reduce((acc, item) => {
        acc[item.id] = shortenDescription(item.id, item.content, 2);
        return acc;
      }, {});
      setDescriptions(newDescriptions);
    }
  }, [data]);

  const formDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const year = date.getFullYear();
    const months = [
      "yanvar",
      "fevral",
      "mart",
      "aprel",
      "may",
      "iyun",
      "iyul",
      "avgust",
      "sentabr",
      "oktyabr",
      "noyabr",
      "dekabr",
    ];
    const month = months[date.getMonth()];
    return `${day} ${month} ${year}`;
  };

  return (
    <div className="world-card-wrapper">
      <div className="world-card-name">
        <h1>{category.title}</h1>
        <div className="swiper-btns">
          <div ref={prevRef} className="custom-prev">
            <i className="fa-solid fa-arrow-left-long"></i>
          </div>
          <div ref={nextRef} className="custom-next">
            <i className="fa-solid fa-arrow-right-long"></i>
          </div>
        </div>
      </div>

      {Array.isArray(data?.results) && data.results.length > 0 ? (
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          navigation={{ nextEl: nextRef.current, prevEl: prevRef.current }}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            730: { slidesPerView: 2, spaceBetween: 15 },
            1078: { slidesPerView: 3, spaceBetween: 20 },
            1425: { slidesPerView: 4, spaceBetween: 30 },
          }}
        >
          {data?.results.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="world-card">
                <div className="world-card-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="world-card-content">
                  <p className="world-card-date">{formDate(item.created_at)}</p>
                  <Link to={`/news/${item.id}`}>
                    <h2 className="world-card-title">{item.intro}</h2>
                    {!isHeadlineLong(item.headline) && (
                      <p className="world-card-description">
                        {" "}
                        {descriptions[item.id]}
                      </p>
                    )}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : null}
    </div>
  );
};

export default WorldCard;

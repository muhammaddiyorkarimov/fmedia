import React from "react";
import "./NewsCard.css";

const NewsCard = ({ data }) => {
  return (
    <div className="news-card-wrapper">
      <h1>So'ngi yangiliklar</h1>
      {data?.map((newsItem, index) => (
        <div key={index} className="news-card">
          <img
            src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
            alt="news"
          />
          <div className="news-card-content">
            <div className="news-card-tag-date">
              <span className="news-card-tag">Jamiyat</span>
              <p className="news-card-date">{newsItem.date}</p>
            </div>
            <h3>{newsItem.headline}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;

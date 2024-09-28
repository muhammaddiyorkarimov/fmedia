import React from "react";
import "./ArticleCard.css";

const ArticleCard = ({ data }) => {
  return (
    <div className="article-container">
      <h1 className="article-header">Uzbekistan yangiliklari</h1>

      <div className="article-image-container">
        <img
          src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
          alt="news"
          className="article-image"
        />
        <h2 className="article-image-title">{data.imageTitle}</h2>
      </div>

      <p className="article-date">{data.date}</p>
      <h2 className="article-title">{data.headline}</h2>

      <p className="article-content">{data.content}</p>
    </div>
  );
};

export default ArticleCard;

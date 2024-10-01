import React from "react";
import "./ArticleCard.css";
import images from "../../images";

const ArticleCard = ({ data, type }) => {
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

  const getYouTubeVideoId = (url) => {
    const videoIdMatch = url?.match(
      /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    );
    return videoIdMatch ? videoIdMatch[1] : null;
  };

  const videoId = getYouTubeVideoId(data?.url); // Extract videoId from the URL
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : null;


  const isVideo = type === "video";
  const isWorld = type === "world";

  return (
    <div className="article-container">
      <h1 className="article-header">{data?.title}</h1>

      {isVideo && videoId ? (
        <div className="video-wrapper">
          <iframe
            src={embedUrl} // Use the extracted video ID to form the embed URL
            title={data?.title}
            width="100%"
            height="400"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : isWorld ? (
        <>
          <div className="article-image-container">
            <img
              src={data?.image || images.placeholder}
              alt="news"
              className="article-image"
            />
          </div>
          <p className="article-date">{formDate(data?.created_at)}</p>
          <p className="article-title">{data?.intro}</p>
          <p className="article-content">{data?.content}</p>
        </>
      ) : (
        <div>No data available.</div>
      )}
    </div>
  );
};

export default ArticleCard;

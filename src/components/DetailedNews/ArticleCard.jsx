import React, { useEffect, useState } from "react";
import "./ArticleCard.css";
import images from "../../images";
import LandingService from "../../services/landing/landingService"; // Ensure LandingService is imported

const ArticleCard = ({ data }) => {
  const [categoryData, setCategoryData] = useState([]);

  // Function to format date
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

  useEffect(() => {
    const loadCategory = async () => {
      try {
        const results = await LandingService.getNavbar();
        setCategoryData(results?.results || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    loadCategory();
  }, []);

  const articleCategory = categoryData?.find(
    (category) =>
      Array.isArray(data?.categories) && data?.categories?.includes(category.id)
  );

  return (
    <div className="article-container">
      <h1 className="article-header">{articleCategory?.title}</h1>

      <div className="article-image-container">
        <img
          src={data?.image || images.placeholder}
          alt="news"
          className="article-image"
        />
      </div>
      <p className="article-date">{formDate(data?.created_at)}</p>
      <h2 className="article-title">{data?.intro}</h2>

      <p className="article-content">{data?.content}</p>
    </div>
  );
};

export default ArticleCard;

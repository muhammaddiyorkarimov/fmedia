import React, { useEffect, useState } from "react";
import "./NewsCard.css";
import LandingService from "../../services/landing/landingService";
import { Link } from "react-router-dom";

const NewsCard = ({ data, type }) => {
  const [categoryData, setCategoryData] = useState([]);
  console.log(data, type);

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

  const getCategoryTitle = (categoryId) => {
    const category = categoryData?.find((item) => item.id === categoryId);
    return category ? category.title : "Unknown Category";
  };

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

  const today = new Date();
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(today.getMonth() - 1);

  const filteredData = data?.results?.filter((newsItem) => {
    const newsDate = new Date(newsItem.created_at);
    return newsDate >= oneMonthAgo && newsDate <= today;
  });

  const randomSixNews = filteredData
    ?.sort(() => Math.random() - 0.5)
    .slice(0, 6);

  return (
    <div className="news-card-wrapper">
      <h1>{type === "video" ? "So'ngi videolar" : "So'ngi yangiliklar"}</h1>{" "}
      <div className="new-card-wrapper">
        {randomSixNews?.map((newsItem, index) => (
          <div key={index} className="news-card">
            <img
              src={
                newsItem.image ||
                "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
              }
              alt={type === "video" ? "video" : "news"} // Adjust alt text based on type
            />
            <div className="news-card-content">
              <div className="news-card-tag-date">
                <span className="news-card-tag">
                  {newsItem.categories && newsItem.categories.length > 0
                    ? getCategoryTitle(newsItem.categories[0])
                    : "No Category"}
                </span>
                <p className="news-card-date">{formDate(newsItem.created_at)}</p>
              </div>
              <Link to={`/news/${newsItem.id}?type=${type}`}>
                <h3>{newsItem.title}</h3>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCard;

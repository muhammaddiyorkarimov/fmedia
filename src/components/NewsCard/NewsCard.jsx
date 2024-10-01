import React from 'react';
import { useEffect, useState } from "react";
import "./NewsCard.css";
import LandingService from "../../services/landing/landingService";
import { Link } from "react-router-dom";

const NewsCard = ({ data }) => {
  const [categoryData, setCategoryData] = useState([]);

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

  // Format the date into "day month year" format
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

  // Get the current date and the date 1 month ago
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
      <div className="container">
        <h1>So'ngi yangiliklar</h1>
        {randomSixNews?.map((newsItem, index) => (
          <div key={index} className="new-card">
            <img
              src={
                newsItem.image ||
                "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
              }
              alt="news"
            />
            <div className="news-card-content">
              <div className="news-card-tag-date">
                <span className="news-card-tag">
                  {newsItem.categories.length > 0
                    ? getCategoryTitle(newsItem.categories[0])
                    : "No Category"}
                </span>
                <p className="news-card-date">{formDate(newsItem.created_at)}</p>
              </div>
              <Link to={`/news/${newsItem.id}`}>
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

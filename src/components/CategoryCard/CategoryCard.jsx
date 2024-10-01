import React, { useEffect, useState } from "react";
import "./CategoryCard.css";
import { Link } from "react-router-dom";
import SkeletonContent from './../SkeletonContent/SkeletonContent';

const CategoryCard = ({ data, category, loading }) => {
  const [descriptions, setDescriptions] = useState({});

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
    <div className="category-card-wrapper">
      <div className="category-card-name">
        <h1>{category.title}</h1> {/* Kategoriya nomi */}
      </div>

      {Array.isArray(data?.results) && data.results.length > 0 ? (
        <div className="category-card-container">
          {data.results.map((item) => (
            <div className="category-card" key={item.id}>
              <div className="category-card-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="category-card-content">
                <p className="category-card-date">
                  {formDate(item.created_at)}
                </p>
                <Link to={`/news/${item.id}`}>
                  <Link to={`/news/${item.id}?type=world`} className="category-card-title">{item.intro}</Link>
                  {!isHeadlineLong(item.headline) && (
                    <p className="category-card-description">
                      {descriptions[item.id]}
                    </p>
                  )}
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>Bu kategoriyada maqolalar mavjud emas.</div>
      )}
    </div>
  );
};

export default CategoryCard;

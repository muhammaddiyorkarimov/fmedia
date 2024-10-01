import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import LandingService from "../../services/landing/landingService";
import CategoryCard from "../../components/CategoryCard/CategoryCard";

function Sport() {
  const [categoryData, setCategoryData] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryId = searchParams.get("categoryId");

  const {
    data: worldData,
    loading: worldDataLoading,
    error: worldDataError,
  } = useFetch(LandingService.getAllArticles, false);

  useEffect(() => {
    const loadCategory = async () => {
      try {
        const results = await LandingService.getNavbar();
        setCategoryData(results);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
    loadCategory();
  }, []);

  return (
    <div>
      {!worldDataLoading &&
        !worldDataError &&
        categoryData?.results?.map((category) =>
          category.id === parseInt(categoryId) ? (
            <CategoryCard
              key={category.id}
              category={category}
              data={{
                results: worldData.results.filter((item) =>
                  item.categories.includes(category.id)
                ),
              }}
            />
          ) : null
        )}
    </div>
  );
}

export default Sport;

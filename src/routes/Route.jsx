import React from "react";  // React'ni import qildik
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "./../pages/home/Home";
import News from "./../pages/News/News";
import WorldPage from "../pages/WorldPage/WorldPage";
import Economics from "../pages/Economics/Economics";
import Society from "../pages/Society/Society";
import Technology from "../pages/Technology/Technology";
import Audio from "../pages/Audio/Audio";
import Sport from "../pages/Sport/Sport";
import PageNotFound from './../components/pageNotFound/PageNotFound';

function RoutesWrap() {
  return createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/news/:id" element={<News />} />
          <Route path="/world-news" element={<WorldPage />} />
          <Route path="/jamiyat" element={<Society />} />
          <Route path="/iqtisodiyot" element={<Economics />} />
          <Route path="/sport" element={<Sport />} />
          <Route path="/audio" element={<Audio />} />
          <Route path="/texnologiya" element={<Technology />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </>
    )
  );
}

export default RoutesWrap;

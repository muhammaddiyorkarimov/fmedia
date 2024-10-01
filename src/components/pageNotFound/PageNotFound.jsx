import React from 'react';
import { Link } from "react-router-dom";
import './PageNotFound.css'; // CSS faylini ajratamiz

function PageNotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <p>Sahifa topilmadi</p>
        <Link to="/">
          <button className="back-button">Bosh sahifaga qaytish</button>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;

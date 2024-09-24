import { NavLink, Outlet } from 'react-router-dom';
import './rootLayout.css';
import images from './../images/index';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function RootLayout() {
  const { t, i18n } = useTranslation();
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false); // State to manage dark mode

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setActiveDropdown(false);
  };

  const toggleDropdown = () => {
    setActiveDropdown(!activeDropdown);
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className="root-layout">
      <header>
        <div className="header-top">
          <div className="container">
            <div className="weather">
              <img width={20} src={images.sunny} alt="weather icon" />
              <span>{t('grade')}</span>
              <span>{t('location')}</span>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div className="logo">
              <img src={images.logo} alt="site's logo" />
            </div>
            <div className="language">
              <i className="fa-solid fa-globe"></i>
              <div className="language-selector">
                <span onClick={toggleDropdown} className="dropdown-toggle">
                  {t('language')}
                </span>
                <i className="fa-solid fa-chevron-down"></i>
                <div className={`dropdown-menu ${activeDropdown ? 'active' : ''}`}>
                  <span onClick={() => changeLanguage('uz')}>{t('Uzbek')}</span>
                  <span onClick={() => changeLanguage('en')}>{t('English')}</span>
                  <span onClick={() => changeLanguage('ru')}>{t('Russian')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-main">
          <div className="container">
            <div className="dark-mode-toggle">
              <i
                onClick={toggleTheme}
                className={`fa-regular fa-${isDarkMode ? 'moon' : 'sun'}`}></i>
            </div>
            <nav>
              <ul>
                {[
                  { path: '/', label: 'Home' },
                  { path: '/uzbekistan', label: 'Uzbekistan' },
                  { path: '/jaxon', label: 'Jaxon' },
                  { path: '/iqtisodiyot', label: 'Iqtisodiyot' },
                  { path: '/jamiyat', label: 'Jamiyat' },
                  { path: '/sport', label: 'Sport' },
                  { path: '/audio', label: 'Audio' },
                  { path: '/texnologiya', label: 'Texnologiya' },
                ].map((item, index) => (
                  <li
                    key={index}
                    className={activeIndex === index ? 'active' : ''}
                    onClick={() => handleItemClick(index)}
                  >
                    <NavLink to={item.path}>{item.label}</NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="search">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="Qidirish..." />
            </div>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default RootLayout;

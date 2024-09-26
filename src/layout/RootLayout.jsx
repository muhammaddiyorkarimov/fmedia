import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './rootLayout.css';
import images from './../images/index';
import { useTranslation } from 'react-i18next';

function RootLayout() {
  const { t, i18n } = useTranslation();
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  return (
    <div className="root-layout">
      <header>
        <div className="header-top">
          <div className="container">
            <div className="logo">
              <img src={images.logo} alt="site's logo" />
            </div>
            <div className="logo-center">
              <p>Fergana Media.uz</p>
            </div>
            <div onClick={toggleDropdown} className="language">
              <img src={images.globe} alt="globe icon" />
              <div className="language-selector">
                <span className="dropdown-toggle">
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

            <div className={`search ${isSearchOpen ? 'open' : ''}`}>
              <input
                type="text"
                placeholder="Qidirish..."
                className={`${isSearchOpen ? 'active' : ''}`}
              />
              <i
                className={`fa-solid fa-${isSearchOpen ? 'xmark rotate' : 'magnifying-glass'}`}
                onClick={toggleSearch}></i>

            </div>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="container">
          <div className="items">
            <div className="item">
              <img src={!isDarkMode ? images.logo2 : images.logoDark} alt="logo" />
              <p>Yangiliklarimiz xalq uchun</p>
              <div className="social-networks">
                <i className='fab fa-instagram'></i>
                <i className='fab fa-telegram'></i>
                <i className='fab fa-facebook'></i>
                <i className='fab fa-youtube'></i>
              </div>
            </div>
            <div className="item">
              <div className="title">Kontaktlarimiz</div>
              <ul>
                <li>Manzil: Toshkent shaxar, Gulistonv</li>
                <li>Ferganamedia@gmail.uz</li>
                <li>+998 (93) 123-45-67</li>
              </ul>
            </div>
            <div className="item">
              <div className="title">Sayt xaqida</div>
              <ul>
                <li>Veb sayt OAV sifatida 2018 yil 28 oktyabr kuni Uzbekistan
                  Respublikasi Prezidenti Adminstratsiyasi xuzuridagi Axborot
                  va ommaviy kommunikatsiyalar agentligidan 1089 raqam
                  ro’yxatga olingan.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom">
          <p>© created by <a target='_blank' href="https://fassco.uz">Fassco</a> company</p>
        </div>
      </footer>
    </div>
  );
}

export default RootLayout;

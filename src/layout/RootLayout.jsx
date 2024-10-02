import React from "react";
import { useEffect, useState } from "react";
import api from "../services/api";
import { NavLink, Outlet } from "react-router-dom";
import "./rootLayout.css";
import images from "./../images/index";
import { useTranslation } from "react-i18next";
import SearchModal from "../components/searchModal/SearchModal";
import useFetch from "./../hooks/useFetch";
import LandingService from "../services/landing/landing";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";

function RootLayout() {
  const { t, i18n } = useTranslation();
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const { data, loading, error } = useFetch(LandingService.getNavbar);

  const changeLanguage = async (lang) => {
    try {
      i18n.changeLanguage(lang);
      setActiveDropdown(false);

      const response = await api.get(`/${lang}`);

      if (response.status === 200) {
        console.log("Language updated on backend");
      } else {
        console.error("Failed to update language on backend");
      }
    } catch (error) {
      console.error("Error updating language:", error);
    }
  };

  const toggleDropdown = () => {
    setActiveDropdown(!activeDropdown);
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    document.body.classList.toggle("dark-mode");
  };

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  const toggleOpenSidebar = () => {
    setIsOpen((prev) => {
      if (!prev) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
      return !prev;
    });
  };

  useEffect(() => {
    const handleBodyClick = (event) => {
      if (!event.target.closest(".sidebar") && !event.target.closest(".hamburger-menu")) {
        setIsOpen(false);
        document.body.style.overflow = "auto";
      }
    };

    if (isOpen) {
      document.body.addEventListener("click", handleBodyClick);
    } else {
      document.body.removeEventListener("click", handleBodyClick);
    }

    return () => document.body.removeEventListener("click", handleBodyClick);
  }, [isOpen]);



  // const navItems = data?.results?.map((item) => ({
  //   path: item.path,
  //   label: t(item.title),
  // })) || [];
  const navItems = [
    { path: "/", label: t("home") },
    { path: "/uzbekistan", label: t("uzbekistan"), categoryId: 1 },
    { path: "/world-news", label: t("jaxon"), categoryId: 2 },
    { path: "/iqtisodiyot", label: t("iqtisodiyot"), categoryId: 3 },
    { path: "/jamiyat", label: t("jamiyat"), categoryId: 4 },
    { path: "/sport", label: t("sport"), categoryId: 5 },
    { path: "/audio", label: t("audio"), categoryId: 6 },
    { path: "/texnologiya", label: t("texnologiya"), categoryId: 7 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <div className="root-layout">
      <div className={`sidebar ${isOpen ? "active" : ""}`}>
        <div className="logo">
          <img
            width={150}
            src={!isDarkMode ? images.logoDark : images.logo2}
            alt="logo"
          />
          <div className="hamburger-menu">
            <i onClick={toggleOpenSidebar} className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </div>
        </div>
        <nav>
          <ul>
            {/* <li
              className={activeIndex === -2 ? 'active' : ''}
              onClick={() => setActiveIndex(-2)}
            >
              <NavLink to="/">{t('home')}</NavLink>
            </li> */}


            {navItems.map((item, index) => (
              <li
                key={index}
                className={activeIndex === index ? "active" : ""}
                onClick={() => setActiveIndex(index)}
              >
                <NavLink
                  onClick={() => {
                    setIsOpen(false);
                    document.body.style.overflow = "auto"; 
                  }}
                  to={item.path === "/" ? "/" : `/category/${item.categoryId}`}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}

          </ul>
        </nav>
        <div className="language">
          <div onClick={toggleDropdown} className="language-selector">
            <span className="dropdown-toggle">{t("language")}</span>
            <i className="fa-solid fa-chevron-down"></i>
            <div className={`dropdown-menu ${activeDropdown ? "active" : ""}`}>
              <span onClick={() => changeLanguage("uz-latn")}>
                {t("Uzbek")}
              </span>
              <span onClick={() => changeLanguage("uz-kril")}>
                {t("Uzbek")}
              </span>
              <span onClick={() => changeLanguage("en")}>{t("English")}</span>
              <span onClick={() => changeLanguage("ru")}>{t("Russian")}</span>
            </div>
          </div>

          <div className="dark-mode-toggle">
            <img
              width={20}
              onClick={toggleTheme}
              src={isDarkMode ? images.moon : images.sun}
              alt="logo"
            />
          </div>
        </div>
      </div>
      <header className={`header ${isHeaderVisible ? "" : "hidden"}`}>
        <div className="header-top">
          <div className="container">
            <div className="logo">
              <img src={images.logo} alt="site's logo" />
            </div>
            <div className="logo-center">
              <p>Fergana Media.uz</p>
            </div>
            <div className="language">
              <img src={images.globe} alt="globe icon" />
              <div onClick={toggleDropdown} className="language-selector">
                <span className="dropdown-toggle">{t("language")}</span>
                <i className="fa-solid fa-chevron-down"></i>
                <div
                  className={`dropdown-menu ${activeDropdown ? "active" : ""}`}
                >
                  <span onClick={() => changeLanguage("uz-latn")}>
                    {t("Uzbek")}
                  </span>
                  <span onClick={() => changeLanguage("latn")}>
                    {t("Uzbek")}
                  </span>
                  <span onClick={() => changeLanguage("en")}>
                    {t("English")}
                  </span>
                  <span onClick={() => changeLanguage("ru")}>
                    {t("Russian")}
                  </span>
                </div>
              </div>

              <div className="hamburger-menu">
                <i
                  className="fa-solid fa-magnifying-glass"
                  onClick={toggleSearch}
                ></i>
                <i onClick={toggleOpenSidebar} className="fa-solid fa-bars"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="header-main">
          <div className="container">
            <div className="dark-mode-toggle">
              <i
                onClick={toggleTheme}
                className={`fa-regular fa-${isDarkMode ? "moon" : "sun"}`}
              ></i>
            </div>
            <nav>
              <ul>
                {/* <li
                  className={activeIndex === -1 ? 'active' : ''}
                  onClick={() => setActiveIndex(-1)}
                >
                  <NavLink to="/">{t('home')}</NavLink>
                </li> */}


                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className={activeIndex === index ? "active" : ""}
                    onClick={() => setActiveIndex(index)}
                  >
                    <NavLink
                      onClick={() => setIsOpen(false)}
                      to={
                        item.path === "/" ? "/" : `/category/${item.categoryId}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="search">
              <i
                className="fa-solid fa-magnifying-glass"
                onClick={toggleSearch}
              ></i>
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
              <img
                src={!isDarkMode ? images.logoDark : images.logo2}
                alt="logo"
              />
              <p>Yangiliklarimiz xalq uchun</p>
              <div className="social-networks">
                <i className="fab fa-instagram"></i>
                <i className="fab fa-telegram"></i>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-youtube"></i>
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
                <li>
                  Veb sayt OAV sifatida 2018 yil 28 oktyabr kuni Uzbekistan
                  Respublikasi Prezidenti Adminstratsiyasi xuzuridagi Axborot va
                  ommaviy kommunikatsiyalar agentligidan 1089 raqam ro’yxatga
                  olingan.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom">
          <p>
            © created by{" "}
            <a target="_blank" href="https://fassco.uz">
              Fassco
            </a>{" "}
            company
          </p>
        </div>
      </footer>

      <ScrollToTopButton />
      <SearchModal isOpen={isSearchOpen} onClose={toggleSearch} />
    </div>
  );
}

export default RootLayout;

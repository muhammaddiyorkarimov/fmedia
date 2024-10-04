import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import './searchModal.css';
import LandingService from '../../services/landing/landing';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SearchModal = ({ isOpen, onClose }) => {
  const { i18n } = useTranslation(); 
  const [searchTerm, setSearchTerm] = useState('');
  const [articles, setArticles] = useState([]);

  const fetchArticles = useCallback(() => {
    if (searchTerm.trim()) {
      return LandingService.getArticles(searchTerm);
    }
    return Promise.resolve([]); 
  }, [searchTerm]);

  const { data, loading, error } = useFetch(fetchArticles, { search: searchTerm });

  useEffect(() => {
    if (data?.results) {
      setArticles(data.results);
    } else {
      setArticles([]);
    }
  }, [data]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const query = params.get('search') || '';
    setSearchTerm(query);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (searchTerm) {
      params.set('search', searchTerm);
    } else {
      params.delete('search');
    }

    window.history.pushState({}, '', `${window.location.pathname}?${params.toString()}`);
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const getTitleByLanguage = (item) => {
    switch (i18n.language) {
      case "en":
        return item?.title_en_us || item?.title;
      case "uz-latn":
        return item?.title_uz_Latn || item?.title;
      case "ru":
        return item?.title_ru || item?.title;
      default:
        return item?.title;
    }
  };



  return (
    <div className={`modal-backdrop ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className={`modal-content ${isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ul>
            {loading ? (
              <p>Yuklanmoqda...</p>
            ) : error ? (
              <p>{error.message}</p>
            ) : (
              <>
                {articles.length > 0 ? (
                  articles.map((result, index) => (
                    <li key={index}>
                      <span>{getTitleByLanguage(result.category)}</span>
                      <Link onClick={onClose} to={`/news/${result.id}?type=world`}>{getTitleByLanguage(result.title)}</Link>
                    </li>
                  ))
                ) : (
                  <p></p>
                )}
              </>
            )}
          </ul>
          <button type="submit">Search</button>
        </form>

        {error && <p>Error fetching articles: {error.message}</p>}
      </div>
    </div>
  );
};

export default SearchModal;

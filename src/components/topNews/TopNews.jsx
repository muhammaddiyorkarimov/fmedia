import React from 'react';
import { Link } from 'react-router-dom';
import './topNews.css';
import useFetch from './../../hooks/useFetch';
import LandingService from '../../services/landing/landing';
import SkeletonContent from './../SkeletonContent/SkeletonContent';

function TopNews() {
    const { data, loading, error } = useFetch(LandingService.getTopNews);

    if (loading) return <div style={{marginTop: '150px'}}>{<SkeletonContent />}</div>;
    if (error) return <div>{error.message}</div>;

    const topNews = data?.results?.slice(0, 2);
    const bottomNews = data?.results?.slice(2, 5);
    const sideNews = data?.results?.slice(5, 8);

    return (
        <div className='top-news-wrap'>
            <div className='container'>
                <h1 className='title'>Top yangiliklar</h1>
                <div className='news-layout'>
                    <div className="main-news-wrapper">
                        <div className="top-news">
                            <section className='main-news' >
                                {topNews?.map((news, index) => (
                                    <div className='top-news-card' key={index}>
                                        <div className="img-wrapper">
                                            <img src={news.image || 'default_image_path.jpg'} alt={news.title} />
                                        </div>
                                        <div className='news-info'>
                                            <Link to={`/news/${news.id}?type=world`}>{news.title}</Link>
                                            <p className='description'>
                                                {news.intro.split(' ').slice(0, 50).join(' ')}...
                                            </p>
                                        </div>
                                    </div>
                                ))}

                            </section>
                        </div>
                        <div className='bottom-news'>
                            {bottomNews?.map((news, index) => (
                                <div className='news-card' key={index}>
                                    <div className="img-wrapper">
                                        <img src={news.image || 'default_image_path.jpg'} alt={news.title} />
                                    </div>
                                    <div className='news-info'>
                                        {/* <div className='category'>
                                            <p>{news.category}</p>
                                            <span>{news.date}</span>
                                        </div> */}
                                        <Link to={`/news/${news.id}?type=world`}>{news.title.split(' ').slice(0, 10).join(' ')}</Link>
                                        <p className='description'>
                                            {news.intro.split(' ').slice(0, 50).join(' ')}...
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                    <aside className='side-news'>
                        {sideNews?.map((news, index) => (
                            <div className='side-news-card' key={index}>
                                <div className="img-wrapper">
                                    <img src={news.image || 'default_image_path.jpg'} alt={news.title} />
                                </div>
                                <div className='news-info'>
                                    {/* <div className='category'>
                                        <p>{news.category}</p>
                                        <span>{news.date}</span>
                                    </div> */}
                                    <Link to={`/news/${news.id}?type=world`}>{news.title}</Link>
                                </div>
                            </div>
                        ))}
                    </aside>
                </div>
            </div>
        </div>
    );
}

export default TopNews;

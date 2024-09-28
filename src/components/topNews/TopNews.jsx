import { Link } from 'react-router-dom';
import images from '../../images';
import './topNews.css';

function TopNews() {
    return (
        <div className='top-news'>
            <div className='container'>
                <h1 className='title'>Top yangiliklar</h1>
                <div className='news-layout'>
                    <section className='main-news'>
                        <div className='top-news-card'>
                            <div className="img-wrapper">
                                <img src={images.rais} alt="Top yangilik" />
                            </div>
                            <div className='news-info'>
                                <div className='category'>
                                    <p>Iqtisodiyot</p>
                                    <span>11 sentyabr 2024</span>
                                </div>
                                <Link>Yangi hamkorlik loyihamizni elon qilamiz!</Link>
                                <p className='description'>
                                    Inflyatsiya zarari kuchaymoqda: Yaqin kelajakda global inflyatsiya korsatkichlari osishda davom etishi kutilmoqda. Markaziy banklar bunga qarshi kurash uchun stavkalarini kotarishi mumkin, bu esa istemolchilar va uchun yangi ishlab chiqarishni ishlab chiqaradi.
                                </p>
                            </div>
                        </div>

                        {/* Pastda 3 ta yangilik card */}
                        <div className='bottom-news'>
                            <div className='news-card'>
                                <img src="image-1.jpg" alt="Yangilik 1" />
                                <div className='news-info'>
                                    <span className='category'>Jahon</span>
                                    <h3>Jahon ot ochiruvchilari haftaligi: qahramonlarimizni sharaflaymiz!</h3>
                                    <span className='date'>11 sentyabr 2024</span>
                                </div>
                            </div>
                            <div className='news-card'>
                                <img src="image-2.jpg" alt="Yangilik 2" />
                                <div className='news-info'>
                                    <span className='category'>Ukraina</span>
                                    <h3>Rossiya va Ukraina Mojorasi: Songgi Voqealar va Muzokaralar!</h3>
                                    <span className='date'>11 sentyabr 2024</span>
                                </div>
                            </div>
                            <div className='news-card'>
                                <img src="image-3.jpg" alt="Yangilik 3" />
                                <div className='news-info'>
                                    <span className='category'>Texnologiya</span>
                                    <h3>Ilon Mask: 2024-yilda tesla robotlar ishlab chiqarishi boshlanadi!</h3>
                                    <span className='date'>11 sentyabr 2024</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Aside: Qo'shimcha yangiliklar */}
                    <aside className='side-news'>
                        <div className='side-news-card'>
                            <img src="side-image-1.jpg" alt="Side news 1" />
                            <div className='news-info'>
                                <span className='category'>Sport</span>
                                <h4>Stanley kubogi finalida dramatik toqnashuv: kim chempion boladi?</h4>
                                <span className='date'>11 sentyabr 2024</span>
                            </div>
                        </div>
                        <div className='side-news-card'>
                            <img src="side-image-2.jpg" alt="Side news 2" />
                            <div className='news-info'>
                                <span className='category'>Texnologiya</span>
                                <h4>Suniy intellekt inqilobi: ai global ish kuchini qanday ozgartiradi?</h4>
                                <span className='date'>11 sentyabr 2024</span>
                            </div>
                        </div>
                        <div className='side-news-card'>
                            <img src="side-image-3.jpg" alt="Side news 3" />
                            <div className='news-info'>
                                <span className='category'>Sport</span>
                                <h4>Lebron va lakers yangi yutuqlar izida: NBA chempionligi yolida</h4>
                                <span className='date'>11 sentyabr 2024</span>
                            </div>
                        </div>
                    </aside>

                </div>
            </div>
        </div>
    );
}

export default TopNews;

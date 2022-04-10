import React from 'react';
import Exp_img from '../src/static/images/exp-img.png';
import Home_img from '../src/static/images/home.png';
import Sosial_img from '../src/static/images/social.png';
import Games_img from '../src/static/images/games.png';
import Edukasi_img from '../src/static/images/book.png';
import Entertain_img from '../src/static/images/entertainment.png';
import Olahraga_img from '../src/static/images/ball.png';
import Bisnis_img from '../src/static/images/buisness.png';
import Seni_img from '../src/static/images/control.png';

function Home() {
    return (
        <div class="container">

            <section class="explore-sec">
                <div class="exp-text">
                    <h2 class="exp-h2">Let’s explore</h2>
                    <div class="one-line">
                        <h2 class="exp-h2">your own</h2>
                        <h2 class="exp-cl">metaverse</h2>
                    </div>
                    <h2 class="exp-h2"> world.</h2>

                    <p class="cont">Ruang 3D di metaverse untuk bersosialisasi, belajar, kolaborasi,
                        dan bermain melampaui apa yang bisa kita bayangkan.
                        The Metaverse is the next evolution of social connection.</p>
                    <div class="exp-btn-box">
                        <a class="exp-btn" href="#">Explore Now</a>
                        <a class="more-btn" href="#">Learn more</a>
                    </div>
                </div>

                <div class="exp-img-box">
                    <img src={Exp_img} alt="" width={585} height={404}/>
                </div>
            </section>


            <section class="category-sec">
                <h4 class="cat-hd text-center">Temukan semua yang<br/>
                    bisa dilakukan di <span>metaverse</span></h4>

                <div class="icon-main-box">
                    <div class="icon-top-box">
                        <div class="icon-box">
                            <img src={Home_img} alt="" class="icon-img"/>
                                <p class="icon-text">Komersial</p>
                        </div>
                        <div class="icon-box">
                            <img src={Sosial_img} alt="" class="icon-img"/>
                                <p class="icon-text">Sosial</p>
                        </div>
                        <div class="icon-box games-box">
                            <img src={Games_img} alt="" class="icon-img games-icon"/>
                                <p class="icon-text">Games</p>
                        </div>
                        <div class="icon-box">
                            <img src={Edukasi_img} alt="" class="icon-img"/>
                            <p class="icon-text">Edukasi</p>
                        </div>
                    </div>

                    <div class="icon-bottom-box">
                        <div class="icon-box">
                            <img src={Entertain_img} alt="" class="icon-img" />
                            <p class="icon-text">Entertainment</p>
                        </div>
                        <div class="icon-box">
                            <img src={Olahraga_img} alt="" class="icon-img" />
                            <p class="icon-text">Olahraga</p>
                        </div>
                        <div class="icon-box">
                            <img src={Bisnis_img} alt="" class="icon-img" />
                            <p class="icon-text">Bisnis</p>
                        </div>
                        <div class="icon-box">
                            <img src={Seni_img} alt="" class="icon-img" />
                            <p class="icon-text">Seni</p>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Home;
"use client"

// React
import { useEffect } from "react";

// -------------------------------------------------------------------------------------------------
  // Swiper imports
import { register } from 'swiper/element/bundle';
register();
import Swiper from 'swiper';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from "swiper/modules";
// -------------------------------------------------------------------------------------------------

// Components import 
import CardLink from './components/CardLink';
import CardImg from './components/CardImg';

export default function GenderCarrousel(){

  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      
      direction: 'horizontal',
      loop: true,
      slidesPerView: 3,
      
      effect: "coverflow",
      coverflowEffect: {
        depth: 300,
        slideShadows: false,
      },

      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },      
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      modules: [Navigation, Pagination]
    });
  }, [])

  return (
    <>
      <h1 className="
        p-5 
        rounded-lg shadow-md shadow-black 
        font-mono italic  
        bg-gradient-to-r from-purple-500 to-orange-400"> Wanna explore? Pic a gender and make it happen 🍿🍿🎥 </h1>
        <div 
          className="swiper"
          style={{width: "800px", height: "500px"}}>
            
            <div className="swiper-wrapper">
    
             {/* <!-- Cards Slides --> */}
              <CardLink gender="action">
                <CardImg src={"/siteImg/genders/ACTION.png"} alt="Action Card">
                </CardImg>
              </CardLink>

              <CardLink gender="adventure">
                <CardImg src={"/siteImg/genders/ADVENTURE.png"} alt="Adventure Card">
                </CardImg>
              </CardLink>

              <CardLink gender="animation">
                <CardImg src={"/siteImg/genders/ANIMATION.png"} alt="Animation Card">
                </CardImg>
              </CardLink>

              <CardLink gender="comedy">
                <CardImg src={"/siteImg/genders/COMEDY.png"} alt="Comedy Card">
                </CardImg>
              </CardLink>

              <CardLink gender="crime">
                <CardImg src={"/siteImg/genders/CRIME.png"} alt="Crime Card">
                </CardImg>
              </CardLink>
              
              <CardLink gender="documentary">
                <CardImg src={"/siteImg/genders/DOCUMENTARY.png"} alt="Documentary Card">
                </CardImg>
              </CardLink>

              <CardLink gender="drama">
                <CardImg src={"/siteImg/genders/DRAMA.png"} alt="Drama Card">
                </CardImg>
              </CardLink>

              <CardLink gender="family">
                <CardImg src={"/siteImg/genders/FAMILY.png"} alt="Family Card">
                </CardImg>
              </CardLink>

              <CardLink gender="fantasy">
                <CardImg src={"/siteImg/genders/FANTASY.png"} alt="Fantasy Card">
                </CardImg>
              </CardLink>

              <CardLink gender="history">
                <CardImg src={"/siteImg/genders/HISTORY.png"} alt="History Card">
                </CardImg>
              </CardLink>

              <CardLink gender="horror">
                <CardImg src={"/siteImg/genders/HORROR.png"} alt="Horror Card">
                </CardImg>
              </CardLink>

              <CardLink gender="mistery">
                <CardImg src={"/siteImg/genders/MISTERY.png"} alt="Mistery Card">
                </CardImg>
              </CardLink>

              <CardLink gender="music">
                <CardImg src={"/siteImg/genders/MUSIC.png"} alt="Mistery Card">
                </CardImg>
              </CardLink>

              <CardLink gender="romance">
                <CardImg src={"/siteImg/genders/ROMANCE.png"} alt="Romance Card">
                </CardImg>
              </CardLink>

              <CardLink gender="science_fiction">
                <CardImg src={"/siteImg/genders/SCIENCE FICTION.png"} alt="Science Fiction Card">
                </CardImg>
              </CardLink>

              <CardLink gender="thriller">
                <CardImg src={"/siteImg/genders/THRILLER.png"} alt="Thriller Card">
                </CardImg>
              </CardLink>

              <CardLink gender="war">
                <CardImg src={"/siteImg/genders/WAR.png"} alt="War Card">
                </CardImg>
              </CardLink>

              <CardLink gender="western">
                <CardImg src={"/siteImg/genders/WESTERN.png"} alt="Western Card">
                </CardImg>
              </CardLink>
            </div>

            {/* <!-- Pagination --> */}
            <div className="swiper-pagination"></div>

            {/* <!-- Navegation --> */}
            <div className="swiper-button-prev p-8 border-2 rounded-full border-red-500 bg-white opacity-80 hover:opacity-100"></div>
            <div className="swiper-button-next p-8 border-2 rounded-full border-red-500 bg-white opacity-80 hover:opacity-100"></div>
        
        </div>

    </>
  )
}

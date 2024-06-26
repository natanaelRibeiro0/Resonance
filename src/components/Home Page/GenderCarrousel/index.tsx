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
              <CardLink gender="ACTION">
                <CardImg src={"/Images/genders/ACTION.png"} alt="Action Card">
                </CardImg>
              </CardLink>

              <CardLink gender="ADVENTURE">
                <CardImg src={"/Images/genders/ADVENTURE.png"} alt="Adventure Card">
                </CardImg>
              </CardLink>

              <CardLink gender="ANIMATION">
                <CardImg src={"/Images/genders/ANIMATION.png"} alt="Animation Card">
                </CardImg>
              </CardLink>

              <CardLink gender="COMEDY">
                <CardImg src={"/Images/genders/COMEDY.png"} alt="Comedy Card">
                </CardImg>
              </CardLink>

              <CardLink gender="CRIME">
                <CardImg src={"/Images/genders/CRIME.png"} alt="Crime Card">
                </CardImg>
              </CardLink>
              
              <CardLink gender="DOCUMENTARY">
                <CardImg src={"/Images/genders/DOCUMENTARY.png"} alt="Documentary Card">
                </CardImg>
              </CardLink>

              <CardLink gender="DRAMA">
                <CardImg src={"/Images/genders/DRAMA.png"} alt="Drama Card">
                </CardImg>
              </CardLink>

              <CardLink gender="FAMILY">
                <CardImg src={"/Images/genders/FAMILY.png"} alt="Family Card">
                </CardImg>
              </CardLink>

              <CardLink gender="FANTASY">
                <CardImg src={"/Images/genders/FANTASY.png"} alt="Fantasy Card">
                </CardImg>
              </CardLink>

              <CardLink gender="HISTORY">
                <CardImg src={"/Images/genders/HISTORY.png"} alt="History Card">
                </CardImg>
              </CardLink>

              <CardLink gender="HORROR">
                <CardImg src={"/Images/genders/HORROR.png"} alt="Horror Card">
                </CardImg>
              </CardLink>

              <CardLink gender="MISTERY">
                <CardImg src={"/Images/genders/MISTERY.png"} alt="Mistery Card">
                </CardImg>
              </CardLink>

              <CardLink gender="MUSIC">
                <CardImg src={"/Images/genders/MUSIC.png"} alt="Mistery Card">
                </CardImg>
              </CardLink>

              <CardLink gender="ROMANCE">
                <CardImg src={"/Images/genders/ROMANCE.png"} alt="Romance Card">
                </CardImg>
              </CardLink>

              <CardLink gender="SCIENCE FICTION">
                <CardImg src={"/Images/genders/SCIENCE FICTION.png"} alt="Science Fiction Card">
                </CardImg>
              </CardLink>

              <CardLink gender="THRILLER">
                <CardImg src={"/Images/genders/THRILLER.png"} alt="Thriller Card">
                </CardImg>
              </CardLink>

              <CardLink gender="WAR">
                <CardImg src={"/Images/genders/WAR.png"} alt="War Card">
                </CardImg>
              </CardLink>

              <CardLink gender="WESTERN">
                <CardImg src={"/Images/genders/WESTERN.png"} alt="Western Card">
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

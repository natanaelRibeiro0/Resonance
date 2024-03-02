"use client"
import Image from "next/image"
import Link from "next/link"

export default function Home(){
  return (
    <>
      <div className="devChoicesContainer">
        <div className="imgConatiner grid place-items-center">
        <Link 
          href="">
            <Image className="shadow-lg shadow-slate-900"
              src = "/siteImg/DEVCHOICES.png"
              alt = "Dev-Choices"
              width = {1000}
              height = {0}
            />
        </Link>
        </div>
      </div>

      <h2 className="py-10 px-24 font-light text-4xl">Search your movie by genders</h2>

      <div className="genderChoicesContainer flex justify-center flex-wrap place-items-center">
        <Link href={{pathname: "/searchPage", query: { gender: "Action"} }}>
          <Image className = "hover:-translate-y-2 ease-in duration-150"
            src={"/siteImg/genders/ACTION.png"}
            alt="Action-Banner"
            width={300}
            height={300}
          />
        </Link>

        <Link href={{pathname: "/searchPage", query: { gender: "Adventure"} }}>
          <Image className = "hover:-translate-y-2 ease-in duration-150"
            src={"/siteImg/genders/ADVENTURE.png"}
            alt="Adventure-Banner"
            width={300}
            height={300}
          />
        </Link>

        <Link href={{pathname: "/searchPage", query: { gender: "Animation"} }}>
          <Image className = "hover:-translate-y-2 ease-in duration-150"
            src={"/siteImg/genders/ANIMATION.png"}
            alt="Animation-Banner"
            width={300}
            height={300}
          />
        </Link>

        <Link href={{pathname: "/searchPage", query: { gender: "Comedy"} }}>
          <Image className = "hover:-translate-y-2 ease-in duration-150"
            src={"/siteImg/genders/COMEDY.png"}
            alt="Comedy-Banner"
            width={300}
            height={300}
          />
        </Link>

        <Link href={{pathname: "/searchPage", query: { gender: "Crime"} }}>
          <Image className = "hover:-translate-y-2 ease-in duration-150"
            src={"/siteImg/genders/CRIME.png"}
            alt="Crime-Banner"
            width={300}
            height={300}
          />
        </Link>

        <Link href={{pathname: "/searchPage", query: { gender: "Documentary"} }}>
          <Image className = "hover:-translate-y-2 ease-in duration-150"
            src={"/siteImg/genders/DOCUMENTARY.png"}
            alt="Documentation-Banner"
            width={300}
            height={300}
          />
        </Link>

        <Link href={{pathname: "/searchPage", query: { gender: "Drama"} }}>
          <Image className = "hover:-translate-y-2 ease-in duration-150"
            src={"/siteImg/genders/DRAMA.png"}
            alt="Drama-Banner"
            width={300}
            height={300}
          />
        </Link>

        <Link href={{pathname: "/searchPage", query: { gender: "Family"} }}>
          <Image className = "hover:-translate-y-2 ease-in duration-150"
            src={"/siteImg/genders/FAMILY.png"}
            alt="Family-Banner"
            width={300}
            height={300}
          />
        </Link>

        <Link href={{pathname: "/searchPage", query: { gender: "History"} }}>
          <Image className = "hover:-translate-y-2 ease-in duration-150"
            src={"/siteImg/genders/HISTORY.png"}
            alt="History-Banner"
            width={300}
            height={300}
          />
        </Link>

        <Link href={{pathname: "/searchPage", query: { gender: "Horror"} }}>
          <Image className = "hover:-translate-y-2 ease-in duration-150"
            src={"/siteImg/genders/HORROR.png"}
            alt="Horror-Banner"
            width={300}
            height={300}
          />
        </Link>

        <Link href={{pathname: "/searchPage", query: { gender: "Mistery"} }}>
          <Image className = "hover:-translate-y-2 ease-in duration-150"
            src={"/siteImg/genders/MISTERY.png"}
            alt="Mistery-Banner"
            width={300}
            height={300}
          />
        </Link>

        <Link href={{pathname: "/searchPage", query: { gender: "Music"} }}>
          <Image className = "hover:-translate-y-2 ease-in duration-150"
            src={"/siteImg/genders/MUSIC.png"}
            alt="Music-Banner"
            width={300}
            height={300}
          />
        </Link>

      
        <Link href={{pathname: "/searchPage", query: { gender: "Romance"} }}>
          <Image className = "hover:-translate-y-2 ease-in duration-150"
            src={"/siteImg/genders/ROMANCE.png"}
            alt="Romance-Banner"
            width={300}
            height={300}
          />
        </Link>

        <Link href={{pathname: "/searchPage", query: { gender: "Science Fiction"} }}>
          <Image className = "hover:-translate-y-2 ease-in duration-150"
            src={"/siteImg/genders/SCIENCE FICTION.png"}
            alt="Science Fiction-Banner"
            width={300}
            height={300}
          />
        </Link>

        <Link href={{pathname: "/searchPage", query: { gender: "Thriller"} }}>
          <Image className = "hover:-translate-y-2 ease-in duration-150"
            src={"/siteImg/genders/THRILLER.png"}
            alt="Thriller-Banner"
            width={300}
            height={300}
          />
        </Link>

        <Link href={{pathname: "/searchPage", query: { gender: "War"} }}>
          <Image className = "hover:-translate-y-2 ease-in duration-150"
            src={"/siteImg/genders/WAR.png"}
            alt="War-Banner"
            width={300}
            height={300}
          />
        </Link>

        <Link href={{pathname: "/searchPage", query: { gender: "Western"} }}>
          <Image className = "hover:-translate-y-2 ease-in duration-150"
            src={"/siteImg/genders/WESTERN.png"}
            alt="Western-Banner"
            width={300}
            height={300}
          />
        </Link>
      </div>


      <hr />

      <h2 className="text-center"> Trending </h2>

      <hr />

      <div className="trendingContainer flex gap-5 justify-center">
        <Link href="/movie" className="genderCard bg-blue-100 w-52 h-64">
          {/* Background img === imagem do card */}
          <h2>Trending Movie name</h2>
        </Link>
        
        <Link href="/movie" className="genderCard bg-blue-300 w-52 h-64">
          {/* Background img === imagem do card */}
          <h2>Trending Movie name</h2>
        </Link>
        
        <Link href="/movie" className="genderCard bg-blue-300 w-52 h-64">
          {/* Background img === imagem do card */}
          <h2>Trending Movie name</h2>
        </Link>

        <Link href={"/trendingMovies"}> see more... </Link>
      </div>
      


  </>
  )
}
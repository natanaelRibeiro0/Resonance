"use client"
import Link from "next/link"
import Image from "next/image";

interface Section {
  poster_path: string;
  title: string;
  genre_ids: Array<number>; 
  vote_avarage: number;
}

interface GendersIds { 
  28: string,
  12 : string,
  16 : string,
  35 : string,
  80 : string,
  99 : string,
  18 : string,
  10751 : string,
  14 : string,
  36 : string,
  27 : string,
  10402 : string,
  9648 : string,
  10749 : string,  
  878 : string,  
  53 : string,
  10752 : string,
  37: string,
}


const gendersIds: GendersIds = { 
  28: "ACTION",
  12 : "ADVENTURE",
  16 : "ANIMATION",
  35 : "COMEDY",
  80 : "CRIME",
  99 : "DOCUMENTARY",
  18 : "DRAMA",
  10751 : "FAMILY",
  14 : "FANTASY",
  36 : "HISTORY",
  27 : "HORROR",
  10402 : "MUSIC",
  9648 : "MYSTERY",
  10749 : "ROMANCE",  
  878 : "SCIENCE FICTION",  
  53 : "THRILLER",
  10752 : "WAR",
  37: "WESTERN"
}


export default function Aside( {poster_path, title, genre_ids, vote_avarage }: Section){  
  return(
      <aside  className="p-5 pb-30 min-w-[25%] h-max flex flex-col items-start justify-start text-white bg-gradient-to-b from-gray-600 to-black rounded-xl shadow-lg shadow-black">
          <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`}  alt={`${title} poster`} className="w-full h-auto object-cover rounded-lg"/>
          <div className="w-10/12 pt-5 flex items-baseline gap-2 flex-wrap italic text-sm font-mono font-extralight">
            { genre_ids.map( (number: number) => {
              return (<> <Link  className="p-1 bg-gradient-to-b from-purple-600 to-orange-600 rounded-full ease-out hover:text-black hover:from-purple-300 hover:to-orange-300" href={{ pathname: "/GendersPage", query: { gender : gendersIds[number] }}}> { gendersIds[number]} </Link> </>)
            })}
          </div> 
          <div className="pt-3 flex flex-wrap justify-between items-baseline">
            <h1 className="font-light font-sans text-[30px]"> {title} </h1>
          </div>
          <div className="flex items-baseline">
            <h1 className="font-light font-sans text-[60px]"> { vote_avarage.toFixed() } </h1>
            <span className="font-light font-sans text-[20px]">  / 10  ★ ★ ★ </span>
          </div>
    </aside>
  )
}
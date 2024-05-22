"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
  
interface Props {
  key: number,
  genre_ids: Array<number>
  id: number,
  original_title: string,
  overview: string,
  poster_path: string,
  release_date: string,
  title: string,
  video: Boolean,
  vote_average: number,
}

export default function TrendingMovieCard( { key, genre_ids, id, original_title, overview, poster_path, release_date, title, vote_average }: Props){
  const params = JSON.stringify({genre_ids, id, original_title, overview, poster_path, release_date, title, vote_average})

  const [ showMovieDetails, setShowMovieDetails] = useState(false)
  return(
    <>
      <Link 
        href={{ pathname: "/MoviePage", query : { movieDetails: params }}} key={key}
        className=" 
        w-[300px] h-[430px] border-4 border-black backdrop-blur-sm shadow-2xl shadow-black"  
        onMouseEnter={ () =>  setShowMovieDetails(true)}
        onMouseLeave={ () =>  setShowMovieDetails(false)}
        >
        
        { showMovieDetails ? 
          <div className="
            p-2 h-full
            absolute flex flex-col gap-2
            text-white 
            bg-zinc-950 bg-opacity-0
            z-10
            transition ease-in-out 
            hover:bg-opacity-80"
          >
          <p className="font-bold text-center line-clamp-1 transition ease-in-out hover:-translate-y-1 hover:scale-110"> {title}</p>
          <hr/>
          <p className="font-tin line-clamp-[9]"> {overview}</p>
          <p >{release_date}</p>
        </div>  : null }
        
        <img 
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}  
          alt="movie image"
          className="w-full h-auto object-cover rounded-lg"
        />
      </Link>
  </>
  )
}  

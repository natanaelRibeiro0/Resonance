"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Movie } from "..";
  
interface Props {
  key: number,
  props: Movie 
}

export default function TrendingMovieCard( { key, props }: Props){
  const [ showMovieDetails, setShowMovieDetails] = useState(false)
  return(
    <>
      <Link 
        href={""} key={key}
        className=" 
        border-4 border-red-500 backdrop-blur-sm"  
        onMouseEnter={ () =>  setShowMovieDetails(true)}
        onMouseLeave={ () =>  setShowMovieDetails(false)}
        >
        
        { showMovieDetails ? 
          <div className="
            p-2 pb-[4.7rem]
            absolute flex flex-col gap-2
            text-white 
            bg-zinc-950 bg-opacity-85"
          >
          <p className="font-bold text-center line-clamp-1"> {props.title}</p>
          <hr/>
          <p className="font-tin line-clamp-6"> {props.overview}</p>
          <p >({props.releaseDate}) </p>
        </div>  : null }
        
        <Image 
          src={`https://image.tmdb.org/t/p/w400/${props.posterPath}`} 
          width={200} 
          height={200} 
          alt="movie image"
        />
      </Link>
  </>
  )
}  
// h-60 overflow-hidden whitespace-nowrap text-ellipsis 

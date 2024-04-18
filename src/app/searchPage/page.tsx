"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import LoadingScreen from "@/app/loading"
import querryResults from "@/components/SearchPage/FetchComponent/fetch"

interface Movie {
  adult: Boolean ,
  backdrop_path: string,
  genre_ids: Array<number>
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: Boolean,
  vote_average: number,
  vote_count: number 
}

export interface GenderObjectInterface {
  id: number, 
  name: string
}

export default function Teste(){
  const searchParams = useSearchParams()
  const querry: string | null = searchParams.get("gender")
  const [movies, setMovies] = useState([])

  useEffect(() => {
    if (!querry) return; 

    const fetchMovies = async () => {
      try {
        const response = await querryResults(querry);
        setMovies(response.results)
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    };

    fetchMovies();
  }, [querry, movies]); 
  return(
    <div className="
      pl-48
      grid grid-cols-4 justify-between gap-10 place-items-center
    "
    >
        { 
          movies === undefined ? <h1 className="text-9xl text-red-500 p-64"></h1>:  
          movies.map((element: Movie) => {
            return (
              <div key={element.id} className="border-4 border-black rounded-lg
              ">
                <img 
                  src={`https://image.tmdb.org/t/p/w400/${element.poster_path}`} 
                  alt="movie poster"
                  />
              </div>
              )
          })}
    </div>
    )
}
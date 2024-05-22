"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import LoadingScreen from "@/app/loading"
import fetchGendersMovies from "@/app/GendersPage/fetchGendersMovies"
import Header from "@/components/GendersPage/Header"
import LeftArrow from "@/components/GendersPage/LeftrArrow"
import RightArrow from "@/components/GendersPage/RightArrow"
import MovieCard from "@/components/GendersPage/MovieCard"

interface Movie {
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

export interface GenderObjectInterface {
  id: number, 
  name: string
}

export default function SearchPage(){
  const searchParams = useSearchParams()

  const querry: string | null = searchParams.get("gender")

  const [page, setPage] = useState(1)
  const [movies, setMovies] = useState([])
  const [loadState, setLoadState] = useState(false)

  useEffect(() => {
      if (!querry) return 
    
      const fetchMovies = async () => {
        try {
          const response = await fetchGendersMovies(querry, page)
          setMovies(response.results)

        } catch (error) {
          console.error("Error finding the movies", error)
        }
      }
      
      fetchMovies()
      setLoadState(true)
      console.log(movies)
    }, [page, querry, movies]) 

  return(
  <>
    {
      loadState === true && movies.length > 1 ? 
        <Header>
          {
            movies.map((element: Movie) => {
              return (
              <MovieCard
              key={element.id}
              genre_ids={element.genre_ids}
              id={element.id}
              original_title={element.original_title}
              overview={element.overview}
              poster_path={`https://image.tmdb.org/t/p/w300/${element.poster_path}`}
              release_date={element.release_date}
              title={element.title}
              vote_average={element.vote_average}/>
              )
            })
          }

          <div className="pages-container gap-12 flex items-center">
            <div onClick={() => { 
              if(page === 1) {
                return null
              }

              setMovies([]) 
              setPage(prevPage => prevPage -1) 
              window.scrollTo(0,0) 
              }}> <LeftArrow /> </div>

            <div className="actual-page font-semibold text-xl text-red-800">{page}</div>

            <div onClick={() => { 
              setMovies([]) 
              setPage(prevPage => prevPage +1) 
              window.scrollTo(0,0) 
            }}> <RightArrow/> </div>
          </div>
        </Header>            

      : <LoadingScreen />
    }
    </>
  )
}


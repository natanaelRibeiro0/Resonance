import { useEffect, useState } from "react";
import TrendingMovieCard from "./Components/TrendingMovieCard";
import getTrendingMovies from "./getTrendingMovies";

export interface Movie {
  id: number;
  title: string, 
  overview: string, 
  poster_path: string, 
  genre_ids: Array<number>,
  original_title: string,
  release_date: string,
  vote_average: number
}

export default function Trendings(){

  const [trendingMovies, setTrendingMovies] = useState([])
  const [loadState, setLoadState] = useState(false)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getTrendingMovies()
        setTrendingMovies(response)

      } catch (error) {
        console.error("Error finding the trending movies", error)
      }
    }
    fetchMovies()
    setLoadState(true)
  }, [trendingMovies, loadState]) 
  

  return(
  <>
    { loadState === true ? 
        <>
        <h1 className="
          p-5 
          shadow-md shadow-black
          font-mono italic 
          rounded-lg bg-gradient-to-r from-purple-500 to-orange-400"> Trending today everywhere </h1>

        <div className="grid grid-cols-3 gap-10">
          {trendingMovies.map((content: Movie) => {
            return(
              <TrendingMovieCard
              key={ content.id }
              genre_ids={content.genre_ids}
              id={content.id}
              original_title={content.title}
              overview={content.overview}
              poster_path={content.poster_path}
              title={content.title}
              vote_average={content.vote_average}
              />
            )
          })}
        </div>
      </>
    : null}
      </> 
  )
}



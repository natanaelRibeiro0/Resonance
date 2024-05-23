"use client"

import { useEffect, useState } from "react";
import TrendingMovieCard from "./Components/TrendingMovieCard";
import getTrendingMovies from "./getTrendingMovies";

interface Movie {
  id: number;
  title: string; 
  overview: string; 
  poster_path: string; 
  genre_ids: Array<number>;
  original_title: string;
  release_date: string;
  vote_average: number,
}

export default function Trendings() {

  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([])
  const [loadState, setLoadState] = useState(false)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response : Movie[] = await getTrendingMovies()
        setTrendingMovies(response)
        setLoadState(true)
      } catch (error) {
        console.error("Error finding the trending movies", error)
      }
    };
    fetchMovies()
  }, [])

  return (
    <>
      {loadState ? 
        <>
          <h1 className="
            p-5 
            shadow-md shadow-black
            font-mono italic 
            rounded-lg bg-gradient-to-r from-purple-500 to-orange-400">
            Trending today everywhere
          </h1>

          <div className="grid grid-cols-3 gap-10">
            {trendingMovies.map((content: Movie) => (
              <TrendingMovieCard
                key={content.id}
                genre_ids={content.genre_ids}
                id={content.id}
                original_title={content.title}
                overview={content.overview}
                poster_path={content.poster_path}
                release_date={content.release_date}
                title={content.title}
                vote_average={content.vote_average}
              />
            ))}
          </div>
        </>
      : null}
    </>
  );
}

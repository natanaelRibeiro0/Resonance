import TrendingMovieCard from "./Components/TrendingMovieCard";

interface PromiseResponse { 
  id: number,
  title: string,
  overview: string,
  poster_path: string,
  release_date: string,
}

interface Movie {
id: number;
title: string, 
overview: string, 
posterPath: string, 
releaseDate: string
}



export default async function Trendings(){
  

  const options = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTc5OTIzY2NmMWYwOWI5NTUxMmMzODMxMTQ5ZDgzNiIsInN1YiI6IjY1ZDNmZGNmMGYzNjU1MDE2M2U3ZTIxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kond84J8FQwHaBNTkFA-1UHuK8ZSqMmHt_aqakAQsjE'
    }
  };
  
  // Fetch operation to return trending movies
  const promise = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(response => response.json())
  
  const data: Array<Movie> = promise.results.map((element: PromiseResponse) => {
      const movie: Movie = {
        id: element.id,
        title: element.title,
        overview: element.overview,
        posterPath: element.poster_path,
        releaseDate: element.release_date,
      }
      return movie
    })
  
    // Will slice elements from lenght > 9
    data.splice((9))

  return(
  <>
    
    <h1 className="
        p-5 
        shadow-md shadow-black
        font-mono italic 
        rounded-lg bg-gradient-to-r from-purple-500 to-orange-400"> Trending today everywhere </h1>

    <div className="grid grid-cols-3 gap-10">
      {data.map((content: Movie) => {
        return(
          <TrendingMovieCard
          key={ content.id }
          props={ content }
          />
        )
      })}
    </div>
  </> 
  )
}



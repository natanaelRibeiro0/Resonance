interface PromiseResponse { 
  page:string,
  results: Array<Movie>,
  total_pages:number,
  total_results:number
}

export interface Movie {
  id: number;
  title: string, 
  overview: string, 
  posterPath: string, 
  releaseDate: string,
  genre_ids: string,
  original_title: string,
  release_date: string,
  vote_average: string
}

export default async function getTrendingMovies(){
  const options = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTc5OTIzY2NmMWYwOWI5NTUxMmMzODMxMTQ5ZDgzNiIsInN1YiI6IjY1ZDNmZGNmMGYzNjU1MDE2M2U3ZTIxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kond84J8FQwHaBNTkFA-1UHuK8ZSqMmHt_aqakAQsjE'
    }
  };
  
  const promise: PromiseResponse = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(response => response.json())
  
  const data = promise.results.slice(0, 15)
  return (data)
}

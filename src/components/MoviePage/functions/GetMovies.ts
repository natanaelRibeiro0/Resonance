import { useSearchParams } from "next/navigation"

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

export default function Getmovies(){
  const useParams = useSearchParams() 
  const movieDetails = useParams.get('movieDetails')
  const movieDetailsJSON: Movie = JSON.parse(movieDetails)
  return movieDetailsJSON
}
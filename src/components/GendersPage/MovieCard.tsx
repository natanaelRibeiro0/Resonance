import Link from "next/link"

interface Props {
  key: number,
  genre_ids: Array<number>
  id: number,
  original_title: string,
  overview: string,
  poster_path: string,
  release_date: string,
  title: string,
  vote_average: number
}

export default function MovieCard({genre_ids, id, original_title, overview, poster_path, release_date, title, vote_average}: Props){
  const params = JSON.stringify({genre_ids, id, original_title, overview, poster_path, release_date, title, vote_average})

  return (
    <div key={id} 
    className="
    border-4 border-black rounded-lg 
    transition-shadow shadow-gray-800 
    hover:shadow-2xl hover:shadow-black 
  ">
    <Link 
      href={{ pathname: "/MoviePage", query : { movieDetails: params }}} className=" className=w-[300] h-[300]">
      <img className="w-fit h-fit" src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt="movie poster"/>
    </Link>
  </div>
    )
}

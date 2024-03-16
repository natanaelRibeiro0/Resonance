import Image from "next/image";

interface Movie {
  id: string;
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

const result = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  .then(response => response.json())

  const data: Array<Movie> = result.results.map((element: Movie) => {
    const movie: Movie = {
      id: element.id,
      title: element.title,
      overview: element.overview,
      posterPath: element.posterPath,
      releaseDate: element.releaseDate
    }
    return movie
  })


return(
  <>
    <h1 className="p-5 bg-white rounded-lg font-mono italic bg-gradient-to-r from-purple-500 to-orange-400"> Trending today </h1>
      <div className="grid grid-cols-3 gap-10">
        {data.map((content) => {
          return(
            <div  key={content.id} className="bg-red-500 w-52 h-3/4">
              <Image 
              src={`https://image.tmdb.org/t/p/w500/${content.posterPath}`} 
              width={200} 
              height={0} 
              alt="movie image"/>
              <h1>{content.title}</h1>
              <h1>{content.overview}</h1>
              <h1>{content.releaseDate}</h1>
            </div>
            )
          })}
      </div>
  </>
  )
}



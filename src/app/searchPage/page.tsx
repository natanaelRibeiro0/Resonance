"use client"
import { useSearchParams } from "next/navigation"

const dataGenders: Array<{id: Number; name: String}>  = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]
  

export default function SearchPage(){
  // Usado para pegar o parametro passado na pagina home
  const searchParams = useSearchParams()
  // Genero selecionado
  const anchor: String = (searchParams.get('gender'))
  console.log(anchor)
  const id = dataGenders.find((element: any) => {
    const x: any = element.name === anchor
    return x.id
  })

  return(
    <>
      <h1>{anchor}</h1>
    </>
  )
}

// https://api.themoviedb.org/3/discover/movie?api_key=[MY_KEY]&language=en-US&page=1&primary_release_year=2019&with_genres=28,12,80

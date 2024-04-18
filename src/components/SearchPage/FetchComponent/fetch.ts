export interface GenderObjectInterface {
  id: number, 
  name: string
}

const gendersObject: Array<GenderObjectInterface>  = [
  {
    "id": 28,
    "name": "ACTION"
  },
  {
    "id": 12,
    "name": "ADVENTURE"
  },
  {
    "id": 16,
    "name": "ANIMATION"
  },
  {
    "id": 35,
    "name": "COMEDY"
  },
  {
    "id": 80,
    "name": "CRIME"
  },
  {
    "id": 99,
    "name": "DOCUMENTARY"
  },
  {
    "id": 18,
    "name": "DRAMA"
  },
  {
    "id": 10751,
    "name": "FAMILY"
  },
  {
    "id": 14,
    "name": "FANTASY"
  },
  {
    "id": 36,
    "name": "HISTORY"
  },
  {
    "id": 27,
    "name": "HORROR"
  },
  {
    "id": 10402,
    "name": "MUSIC"
  },
  {
    "id": 9648,
    "name": "MYSTERI"
  },
  {
    "id": 10749,
    "name": "ROMANCE"
  },
  {
    "id": 878,
    "name": "SCIENCE FICTION"
  },
  {
    "id": 53,
    "name": "THRILLER"
  },
  {
    "id": 10752,
    "name": "WAR"
  },
  {
    "id": 37,
    "name": "WESTERN"
  }
]

export default async function querryResults( query: string ){

  const key = gendersObject.find((element: GenderObjectInterface) => element.name === query)

  if (!key){
    throw new Error("Could not find this gender :(")
  }
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTc5OTIzY2NmMWYwOWI5NTUxMmMzODMxMTQ5ZDgzNiIsInN1YiI6IjY1ZDNmZGNmMGYzNjU1MDE2M2U3ZTIxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kond84J8FQwHaBNTkFA-1UHuK8ZSqMmHt_aqakAQsjE'
    }
  };

  try {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=${key.id}`, options)
    .then( result => { return result.json()})
    return (response)
  } catch (error) {
    console.log(error)
  } 
}
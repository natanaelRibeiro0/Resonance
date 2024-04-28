interface Props{
  key: number,
  src: string
}

export default function MovieCard({ key, src}: Props){
  return (
    <div key={key} 
    className="
    border-4 border-black rounded-lg 
    transition-shadow shadow-gray-800 
    hover:shadow-2xl hover:shadow-black 
  ">
    <img 
      className="w-[330px] h-[480px]"
      src={`https://image.tmdb.org/t/p/w300/${src}`} 
      alt="movie poster"
      />
  </div>
    )
}
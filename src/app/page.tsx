import Image from "next/image"
import Link from "next/link"
import GenderCarrousel from "@/components/gendersCarrousel"
import Trendings from "./trendings/page"

export default function Home(){
  return (
    <main className="flex flex-col items-center justify-center gap-20">
      <div className="devChoicesContainer">
        <div className="imgConatiner grid place-items-center">
        <Link 
          href="">
            <Image className="shadow-lg shadow-slate-900"
              src = "/siteImg/DEVCHOICES.png"
              alt = "Dev-Choices"
              width = {1000}
              height = {0}
            />
        </Link>
        </div>
      </div>

      <hr />

      <GenderCarrousel/>

      <hr />

      <Trendings/>

  </main>
  )
}


// <div className="trendingContainer flex gap-5 justify-center">
// <Link href="/movie" className="trendingCard bg-blue-100 w-52 h-64">
//   {/* Background img === imagem do card */}
//   <h2>Trending Movie name</h2>
// </Link>

// <Link href="/movie" className="trendingCard bg-blue-400 w-52 h-64">
//   {/* Background img === imagem do card */}
//   <h2>Trending Movie name</h2>
// </Link>

// <Link href="/movie" className="trendingCard bg-blue-400 w-52 h-64">
//   {/* Background img === imagem do card */}
//   <h2>Trending Movie name</h2>
// </Link>

// <Link href={"/trendingMovies"}> see more... </Link>
// </div>

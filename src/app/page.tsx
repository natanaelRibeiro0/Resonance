"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

// export const metadata: Metadata = {
//   title: "Home",
//   description: "Resonance homepage",
// } 


export default function Home(){

  const pathname = usePathname()

  return (
    <>
      <Image 
      src = "/resonance-title.svg"
      alt = "Resonance-Title"
      width = "220"
      height = "220"
      priority
      />

      <hr />

      <div className="devChoicesContainer">
        <div className="imgConatiner">
        <Image 
          src = "/black.png"
          alt = "Resonance-Title"
          width = "220"
          height = "220"
          />
          Dev Choices 
        </div>
      </div>

      <hr />

      <h2> Genders </h2>
    
      <hr/>
      
      <div className="genderChoicesContainer flex gap-5 justify-center">
        <Link href={{pathname: "/searchPage", query: { gender: "action"} }} className="genderCard bg-red-200 w-64 h-96">
          {/* Background img === imagem do card */}
          <h2>Action</h2>
        </Link>
      
        <Link  href={{pathname: "/searchPage", query: "comedy"}} className="genderCard bg-red-300 w-64 h-96">
          {/* Background img === imagem do card */}
          <h2>Comedy</h2>
        </Link>
      
        <Link href={{pathname: "/searchPage", query: "drama"}} className="genderCard bg-red-400 w-64 h-96">
          {/* Background img === imagem do card */}
          <h2>Drama</h2>
        </Link>
      </div>


      <hr />

      <h2> Trending </h2>

      <hr />

      <div className="trendingContainer flex gap-5 justify-center">
        <Link href="/movie" className="genderCard bg-blue-100 w-52 h-64">
          {/* Background img === imagem do card */}
          <h2>Trending Movie name</h2>
        </Link>
        
        <Link href="/movie" className="genderCard bg-blue-200 w-52 h-64">
          {/* Background img === imagem do card */}
          <h2>Trending Movie name</h2>
        </Link>
        
        <Link href="/movie" className="genderCard bg-blue-300 w-52 h-64">
          {/* Background img === imagem do card */}
          <h2>Trending Movie name</h2>
        </Link>

        <Link href={"/trendingMovies"}> see more... </Link>
      </div>
      


  </>
  )
}
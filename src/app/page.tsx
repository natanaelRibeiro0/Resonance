import Image from "next/image"
import Link from "next/link"
import GenderCarrousel from "@/components/GenderCarrousel"
import Trendings from "../components/Trendings"

export default function Home(){
  return (
    <main className="flex flex-col items-center justify-center gap-20">
      
        <Link  href="" 
        className="
          imgConatiner 
          flex items-end text-start text-white text-2xl font-semibold
          w-3/5 h-96 p-10
          shadow-2xl shadow-slate-400 bg-gradient-to-r from-purple-500 to-orange-400 rounded-lg" >
            DEV CHOICES
        </Link>

      <GenderCarrousel/>
      <Trendings/>

  </main>
  )
}

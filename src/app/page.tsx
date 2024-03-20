import Link from "next/link"
import GenderCarrousel from "@/components/Home Page/GenderCarrousel"
import Trendings from "../components/Home Page/Trendings"
import DevChoices from "@/components/Home Page/Dev Choice"

export default function Home(){
  return (
    <main className="flex flex-col items-center justify-center gap-20">
      
      <DevChoices/>
      
      <GenderCarrousel/>
      
      <Trendings/>

  </main>
  )
}

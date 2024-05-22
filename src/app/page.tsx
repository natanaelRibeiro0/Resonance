"use client"
import GenderCarrousel from "@/components/Home Page/GenderCarrousel"
import Trendings from "../components/Home Page/Trendings"
import DevChoices from "@/components/Home Page/Dev Choice"


// interface Account{
//   name: string,
//   comments: Array<Object>
// }

// const account: Account = {
//   name: "Nata",
//   comments: []
// }
// localStorage.setItem('resonance-account', JSON.stringify(account))

export default function Home(){
  return (
    <main className="flex flex-col items-center justify-center gap-20">  
      <DevChoices/>
      <GenderCarrousel/>
      <Trendings/>
    </main>
  )
}
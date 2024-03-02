import Image from "next/image"
import Link from "next/link"

export default function Nav(){
  return (
    <nav className="py-10 px-28 flex gap-7 items-end">
      <Link 
        href="/">
        <Image className="shadow-2xl shadow-slate-400 p-2 bg-gradient-to-r from-purple-500 to-orange-400 rounded-lg"
          src = {"/siteImg/RESONANCE.svg"}
          alt = "Resonance-Title"
          width = {300}
          height = {220}
        />
      </Link>
      <Link 
        href=""
        className="font-light hover:underline">About the project
      </Link>
      <Link 
        href=""
        className="font-light hover:underline">Contact Us
      </Link>
    </nav>
  )
}
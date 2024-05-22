import Image from "next/image"
import Link from "next/link"

export default function Nav(){
  return (
    <nav
      className="
        pt-12 pl-20 
        flex items-center justify-around gap-96
        ">
      <div className="leftItems flex items-end gap-10">
        <Link 
          href="/">
          <Image className="
            shadow-2xl shadow-slate-400 p-2 bg-gradient-to-r from-purple-500 to-orange-400 rounded-lg"
            src = {"/Images/RESONANCE.svg"}
            alt = "Resonance-Title"
            width = {300}
            height = {220}
          />
        </Link>
      </div>
      
      <form className="rightItems flex items-center">
        <label htmlFor="searchInput"></label>
        <input type="text" id="searchInput" 
          placeholder="search a movie here"
          className="
            p-1 
            border-2 border-r-0 border-red-500 rounded-l-xl 
            focus:border-teal focus:outline-none focus:ring-0"  
        />
        <button 
          className="
            searchBtn 
            p-2 
            border-2 bg-red-500 border-red-500 rounded-r-xl 
            hover:bg-red-800 hover:border-red-800"> 
        </button>
      </form>
    </nav>
  )
}
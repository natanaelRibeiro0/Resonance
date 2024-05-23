"use client"


import DescSection from "@/components/MoviePage/DescSection"
import VideoSection from "@/components/MoviePage/VideoSection"
import Image from "next/image"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import Aside from '@/components/MoviePage/Aside';
import Line from '@/components/MoviePage/Line';

import Getmovies from '@/components/MoviePage/functions/GetMovies';

interface Movie {
  adult: Boolean ,
  backdrop_path: string,
  genre_ids: Array<number>
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: Boolean,
  vote_average: number,
  vote_count: number 
}

export interface CommentInterface {
  movieId: number,
  comment: {
    id: string,
    text: string,   
    emoji: string 
  }
}


export default function MoviePage(){


  const movies = Getmovies()  
  const [showEmojiDropdown, setShowEmojiDropdown] = useState(false)  
  const [emoji, setEmoji] : [string, Dispatch<SetStateAction<string>>] = useState("")
  const [comment, setComment ] : [string, Dispatch<SetStateAction<string>>] = useState("")
  const [loadedPage, setLoadedPage ] = useState(false)

  useEffect(() => {
    setLoadedPage(true)
  }, [])

  return(
    <>
      { loadedPage === false || movies === undefined ? 
        
        null : 
        
        <div className="h-fit pl-36 flex items-start">
          <Aside poster_path={movies.poster_path} genre_ids={movies.genre_ids} title={movies.title} vote_avarage={movies.vote_average}></Aside>
          <main className="p-8 flex flex-col justify-between gap-10">

          <DescSection overview={movies.overview} />
          <Line />        

          <VideoSection />
          <Line />        

          <section className="flex flex-col gap-5">
            <h1 className="text-4xl font-bold"> Comment </h1>
            <div className="p-5 flex flex-row items-center gap-5">
              <Image width={50} height={10} src={movies.poster_path}  alt={`${movies.title} poster`} className="rounded-full"/>
              <form className="py-2 w-8/12 max-w-screen-8/12 flex items-end gap-5">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900"></label>
              <textarea id="message" onChange={(e) => { setComment(e.target.value)}} value={comment} className="px-3 py-2.5 h-full min-h-[100px] w-full bg-white border-2 border-red-500 text-sm text-blue-gray-700 font-sans font-normal resize-none rounded-[7px] focus:border-red-800 focus:outline-0 placeholder-slate-700"  placeholder="share your thoughts"></textarea>              
                <div className="flex flex-col gap-4">
                  <button onClick={(e) => { e.preventDefault(); setShowEmojiDropdown(state => !state)}} className="w-12 h-12 relative bg-gray-100 border-2 border-red-500 rounded-full shadow-md shadow-gray-500 hover:-translate-y-1" value={emoji}></button>

                  {showEmojiDropdown === true ? 
                    <ul className="p-2 absolute w-44 h-32 border-gray-400 bg-red-700 rounded-xl shadow-2xl shadow-gray-700 translate-y-[3.5rem]">
                      <li onClick={() => { setEmoji("hearth"); setShowEmojiDropdown(false)}} data-emoji={"hearth"} className="absolute w-12 h-12 list-none border-2 rounded-full bg-white cursor-pointer shadow-slate-700"></li>
                      <li onClick={() => { setEmoji("fire");   setShowEmojiDropdown(false)}} data-emoji={"fire"}   className="absolute w-12 h-12 translate-x-[3.5rem] list-none rounded-full bg-white cursor-pointer shadow-md shadow-slate-700"></li>
                      <li onClick={() => { setEmoji("happy");  setShowEmojiDropdown(false)}} data-emoji={"happy"}  className="absolute w-12 h-12 translate-x-[7rem] list-none rounded-full bg-white cursor-pointer shadow-md shadow-slate-700"></li>
                      <li onClick={() => { setEmoji("sad");    setShowEmojiDropdown(false)}} data-emoji={"sad"}    className="absolute w-12 h-12 translate-y-[3.5rem] list-none rounded-full bg-white cursor-pointer shadow-md shadow-slate-700"></li>
                      <li onClick={() => { setEmoji("bad");    setShowEmojiDropdown(false)}} data-emoji={"bad"}    className="absolute w-12 h-12 translate-y-[3.5rem] translate-x-[3.5rem] list-none rounded-full bg-white cursor-pointer shadow-md shadow-slate-700"></li> 
                      <li onClick={() => { setEmoji("");       setShowEmojiDropdown(false)}} className="absolute w-12 h-12 translate-y-[3.5rem] translate-x-[7rem] list-none rounded-full bg-white cursor-pointer shadow-md shadow-slate-700"></li> 
                    </ul>
                  : null}

                  <button onClick={(e) => { e.preventDefault(); /*saveComment(id, comment, emoji)*/}} className={"py-1 px-6  text-sm border-4 text-white border-red-500 rounded-xl bg-red-500 shadow-lg shadow-gray-500 transition-all  hover:bg-red-700 hover:border-red-700 hover:-translate-y-1"} type="button">Send</button>
                </div>
              </form>
            </div>
          </section>
          <Line />      

         
          </main>
      </div> 
      }
  </>)
}

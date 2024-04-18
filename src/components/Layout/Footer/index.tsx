import Image from "next/image";
import Link from 'next/link';

export default function Footer(){
  return(
    <footer 
      className="
        w-screen h-20 
        flex justify-around items-center gap-32 
        text-white bg-red-600">
      <Image 
        src={"siteImg/favicon-icon.svg"} 
        alt="Site Icon" 
        width={100} 
        height={100} 
      ></Image>
      <h1 className="">&copy; Natanael Ribeiro </h1>        

      <div className="textContainer flex gap-5">
        <div className=" flex flex-col gap-1">
          <Link className=" hover:text-gray-400" href={"https://github.com/natanaelRibeiro0/Resonance"} target="_blank"> PROJECT REPO HERE </Link>
          <Link className=" hover:text-gray-400" href={"https://github.com/natanaelRibeiro0"} target="_blank"> MY GITHUB </Link>
        </div>
      </div>
    
    </footer>
  )
}
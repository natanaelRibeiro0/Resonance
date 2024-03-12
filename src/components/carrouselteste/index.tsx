import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css"



export default function GenderCarrousel(){
  return (
    <>

      <h1>Pick a movie by your favorite gender 🍿🍿🎥</h1>

      <div id="teste" className="genderChoicesContainer flex h-96 justify-evenly items-center">

      <div className={`${styles.leftBtnCnt}`}> 
        <button className={`${styles.leftBtn} p-2 pl-4 pr-4 text-2xl border-4 rounded-full  border-gray-500 text-grayrose-500  hover:border-rose-500 hover:text-rose-500 transition-all`}> &#5176; </button>
      </div>

        <Link href={{pathname: "/searchPage", query: { gender: "Action"} }} className={`${styles.gendersHref}  ${styles.left} absolute genderCard`}>
          <Image 
            src={"/siteImg/genders/ACTION.png"}
            alt="Action-Banner"
            width={200}
            height={200}
          />
        </Link>

        <Link href={{pathname: "/searchPage", query: { gender: "Adventure"} }} className={`${styles.gendersHref} absolute ${styles.active} genderCard`}>
          <Image className = "gender hover:-translate-y-2 ease-in duration-150"
            src={"/siteImg/genders/ADVENTURE.png"}
            alt="Adventure-Banner"
            width={300}
            height={300}
          />
        </Link>

        <Link href={{pathname: "/searchPage", query: { gender: "Animation"} }} className={`${styles.gendersHref} ${styles.right} absolute genderCard`}>
          <Image 
            src={"/siteImg/genders/ANIMATION.png"}
            alt="Animation-Banner"
            width={200}
            height={200}
          />
        </Link>

        <Link href={{pathname: "/searchPage", query: { gender: "Comedy"} }} className={`${styles.gendersHref} absolute genderCard`}>
          <Image 
            src={"/siteImg/genders/COMEDY.png"}
            alt="Comedy-Banner"
            width={300}
            height={300}
          />
        </Link>

        <Link href={{pathname: "/searchPage", query: { gender: "Crime"} }} className={`${styles.gendersHref} absolute genderCard`}>
          <Image 
            src={"/siteImg/genders/CRIME.png"}
            alt="Crime-Banner"
            width={300}
            height={300}
          />
        </Link>

        <Link href={{pathname: "/searchPage", query: { gender: "Documentary"} }} className={`${styles.gendersHref} absolute genderCard`}>
          <Image 
            src={"/siteImg/genders/DOCUMENTARY.png"}
            alt="Documentation-Banner"
            width={300}
            height={300}
          />
        </Link>

        <Link href={{pathname: "/searchPage", query: { gender: "Drama"} }} className={`${styles.gendersHref} absolute genderCard`}>
          <Image 
            src={"/siteImg/genders/DRAMA.png"}
            alt="Drama-Banner"
            width={300}
            height={300}
          />
        </Link>

        <Link href={{pathname: "/searchPage", query: { gender: "Family"} }} className={`${styles.gendersHref} absolute genderCard`}>
          <Image 
            src={"/siteImg/genders/FAMILY.png"}
            alt="Family-Banner"
            width={300}
            height={300}
          />
        </Link>

        <Link href={{pathname: "/searchPage", query: { gender: "History"} }} className={`${styles.gendersHref} absolute genderCard`}>
          <Image 
            src={"/siteImg/genders/HISTORY.png"}
            alt="History-Banner"
            width={300}
            height={300}
          />
        </Link>

        <Link href={{pathname: "/searchPage", query: { gender: "Horror"} }} className={`${styles.gendersHref} absolute genderCard`}>
          <Image 
            src={"/siteImg/genders/HORROR.png"}
            alt="Horror-Banner"
            width={300}
            height={300}
          />
        </Link>

        <Link href={{pathname: "/searchPage", query: { gender: "Mistery"} }} className={`${styles.gendersHref} absolute genderCard`}>
          <Image 
            src={"/siteImg/genders/MISTERY.png"}
            alt="Mistery-Banner"
            width={300}
            height={300}
          />
        </Link>

        <Link href={{pathname: "/searchPage", query: { gender: "Music"} }} className={`${styles.gendersHref} absolute genderCard`}>
          <Image 
            src={"/siteImg/genders/MUSIC.png"}
            alt="Music-Banner"
            width={300}
            height={300}
          />
        </Link>

      
        <Link href={{pathname: "/searchPage", query: { gender: "Romance"} }} className={`${styles.gendersHref} absolute genderCard`}>
          <Image 
            src={"/siteImg/genders/ROMANCE.png"}
            alt="Romance-Banner"
            width={300}
            height={300}
          />
        </Link>

        <Link href={{pathname: "/searchPage", query: { gender: "Science Fiction"} }} className={`${styles.gendersHref} absolute genderCard`}>
          <Image 
            src={"/siteImg/genders/SCIENCE FICTION.png"}
            alt="Science Fiction-Banner"
            width={300}
            height={300}
          />
        </Link>

        <Link href={{pathname: "/searchPage", query: { gender: "Thriller"} }} className={`${styles.gendersHref} absolute genderCard`}>
          <Image 
            src={"/siteImg/genders/THRILLER.png"}
            alt="Thriller-Banner"
            width={300}
            height={300}
          />
        </Link>

        <Link href={{pathname: "/searchPage", query: { gender: "War"} }} className={`${styles.gendersHref} absolute genderCard`}>
          <Image 
            src={"/siteImg/genders/WAR.png"}
            alt="War-Banner"
            width={300}
            height={300}
          />
        </Link>

        <Link href={{pathname: "/searchPage", query: { gender: "Western"} }} className={`${styles.gendersHref} absolute genderCard`}>
          <Image 
            src={"/siteImg/genders/WESTERN.png"}
            alt="Western-Banner"
            width={300}
            height={300}
          />
        </Link>

        <div className={`${styles.rightBtnCnt}`}>
          <button className={`${styles.rightBtn} p-2 pl-4 pr-4 text-2xl border-4 rounded-full border-gray-500 text-grayrose-500   hover:border-rose-500 hover:text-rose-500 transition-all`}> &#5171; </button>
        </div>
      </div>


    </>
  )
}
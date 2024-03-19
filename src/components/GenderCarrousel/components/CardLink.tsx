import Link from "next/link";
import { ReactNode } from "react";

interface LinkProps{
  gender: string;
  children: ReactNode;
}
export default function CardLink({ gender, children}: LinkProps){
  return(
    <>
      <Link href={{ pathname: "/searchPage", query: { gender : gender }}} className="swiper-slide">
        {children}
      </Link>
    </>
  )
}
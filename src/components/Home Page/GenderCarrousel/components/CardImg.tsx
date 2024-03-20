import Image from "next/image"

interface PropsDefinition{
  src: string,
  alt: string,
}
export default function CardImg({ src, alt }: PropsDefinition){
  return(
    <>    
      <Image className="hover:-translate-y-6 transition-all backdrop-blur-[2px]" 
        src={src}
        alt={alt}
        width={800}
        height={100}
      />
    </>

  )
}
import Image from "next/image"

export default function LoadingScreen(){
  return(
    <div className="h-lvh grid place-items-center">
      <Image
        src={"/Images/loadingScreen/loading.gif"}
        alt="loading..."
        width={500}
        height={500}>
      </Image>
    </div>
  )
}
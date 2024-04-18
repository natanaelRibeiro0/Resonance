import Image from "next/image"

export default function LoadingScreen(){
  return(
    <>
    <Image
    src={"/siteImg/loadingScreen/loading.gif"}
    alt="loading..."
    width={500}
    height={500}>

    </Image>
    <h1>Loading</h1>
    </>
  )
}
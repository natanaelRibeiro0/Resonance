import { CommentInterface } from "@/app/MoviePage/page"

export interface Account{
  name: string,
  comments: Array<CommentInterface>
}

const testeAcc: Account = {
  name: "John Doe",
  comments: []
}
export default function getAccouunt(){
  try{
    const accountDetails = localStorage.getItem('resonance-account')  
    if(typeof accountDetails === undefined || typeof accountDetails === null) return 
    return testeAcc
  } catch(e) {
    console.error(e)
  } 
}
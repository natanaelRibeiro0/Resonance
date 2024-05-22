import { CommentInterface } from "@/app/MoviePage/page"

interface Account{
  name: string,
  comments: Array<CommentInterface>
}

export default function getAccouunt(){
  try{
    const accountDetails = localStorage.getItem('resonance-account')  
    if(typeof accountDetails === undefined || typeof accountDetails === null) return 
    const account: Account = JSON.parse(accountDetails)  
    return account
  } catch(e) {
    console.error(e)
  } 
}
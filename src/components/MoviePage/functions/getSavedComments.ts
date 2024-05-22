import { CommentInterface } from "@/app/MoviePage/page"

export default function getSavedComment( account, movieId ){
  const getSavedComment: CommentInterface = account.comments.find( c => c.movieId === movieId)
  if(typeof getSavedComment === undefined || typeof getSavedComment === null ) return 
  return getSavedComment
}
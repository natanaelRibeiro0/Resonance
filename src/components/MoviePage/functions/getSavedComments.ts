interface Movie {
  adult: Boolean,
  backdrop_path: string,
  genre_ids: Array<number>,
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

interface Account {
  name: string,
  comments: Array<CommentInterface>
}

export default function getSavedComment(account: Account, id: number): CommentInterface | undefined {
  const savedComment = account.comments.find(c => c.movieId === id)
  if (savedComment === undefined) {
    console.error("Invalid account")
    return undefined
  }
  return savedComment
}

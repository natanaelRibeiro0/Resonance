interface Comment {
  key: string;
  text: string;
  emoji: string;
}

export default function CommentsComponent({ key, text, emoji}: Comment){
  return(
      <div key={key} className="p-5 flex items-end gap-3">
      <span className="p-6 border-2 rounded-full border-red-500"></span>
      <div>
        <h1 className="text-lg font- font-normal">{text}</h1>
        <span data-emoji={emoji} className="p-3 rounded-full"></span>
      </div>
    </div>  
  )
}
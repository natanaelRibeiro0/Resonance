type ChildrenType = {
  children: React.ReactNode
}
export default function Header(props: ChildrenType){
  return(
    <div className=" pl-36 grid grid-cols-4 gap-10 justify-center place-items-center">
      {props.children}
    </div>
  )
}
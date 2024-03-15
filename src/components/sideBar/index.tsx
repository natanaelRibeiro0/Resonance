import Link from "next/link"
import Image from "next/image"
export default function SideBar(){
  return(
    <aside>
      <div className="
      h-full 
      w-1/5
      flex
      fixed 
      -translate-x-80
      shadow-lg shadow-slate-900
    text-stone-50 
      bg-gradient-to-r from-purple-500 to-orange-400
      hover:translate-x-0 ease-out duration-1000"
      >
        <ul className="pl-16 flex flex-col gap-7 justify-center items-start">
          
          <Link className="w-52 flex flex-row items-center hover:bg-rose-500 rounded-full ease-out duration-200"
            href="" >
            <Image 
              src={"/siteImg/asideIcons/user.svg"}
              alt="User-svg"
              width={60}
              height={0}
            ></Image> My profile
            </Link>
          
          <Link className="w-52 flex flex-row items-center hover:bg-rose-500 rounded-full ease-out duration-200" 
            href="">
            <Image 
              src={"/siteImg/asideIcons/notifications.svg"}
              alt="Notification-svg"
              width={60}
              height={0}
            ></Image> Notifications
          </Link>

          <Link className="w-52 h-14 pl-3 flex flex-row items-center gap-2 hover:bg-rose-500 rounded-full ease-out duration-200" 
            href="">
            <Image 
              src={"/siteImg/asideIcons/review.svg"}
              alt="Saved-Reviews-svg"
              width={40}
              height={0}
            ></Image> Saved reviews
          </Link>

          <Link className="w-36 h-12 pl-3 flex flex-row items-center gap-2 hover:bg-rose-500 rounded-full ease-out duration-200"
            href="">
            <Image 
              src={"/siteImg/asideIcons/settings.svg"}
              alt="Settings-svg"
              width={35}
              height={0}
            ></Image> Settings
          </Link>

        </ul>
      </div>
    </aside>
  )
}
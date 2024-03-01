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
      justify-center
      text-stone-50 bg-gradient-to-r from-purple-500 to-orange-400
      hover:translate-x-0 ease-out duration-1000"
      >
        <ul>
          
          <div className="flex flex-row">
            <Link href="">
              <Image 
                src="/siteImg/asideIcons/user.svg"
                alt="User-svg"
                width={60}
                height={0}
              ></Image>
                My profile
            </Link>
          </div>
          
          <div className="flex flex-row">
            <Link href="">
              <Image 
                src="/siteImg/asideIcons/notifications.svg"
                alt="User-svg"
                width={60}
                height={0}
              ></Image>              
                Notifications
            </Link>
          </div>
          <div className="flex flex-row">
            <Link href="">
              <Image 
                src="/siteImg/asideIcons/review.svg"
                alt="User-svg"
                width={40}
                height={0}
              ></Image>              
                Saved reviews
            </Link>
          </div>
          <div className="flex flex-row">
          <Link href="">
              <Image 
                src="/siteImg/asideIcons/settings.svg"
                alt="User-svg"
                width={40}
                height={0}
              ></Image>              
                Settings
            </Link>
          </div>
        </ul>
      </div>
    </aside>
  )
}
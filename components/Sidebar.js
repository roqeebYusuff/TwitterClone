import Image from 'next/image'
import SidebarLink from '../components/SidebarLink'
import { DotsHorizontalIcon, HomeIcon } from '@heroicons/react/solid'
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
} from '@heroicons/react/outline'
import { useSession, signOut } from 'next-auth/react'

function Sidebar() {
  const { data: session } = useSession()
  return (
    <div className="fixed hidden h-full flex-col items-center overflow-scroll p-2  sm:flex xl:w-[340px] xl:items-start">
      <div className="hoverAnimation flex h-14 w-14 items-center justify-center p-0 xl:ml-24">
        <Image src="https://rb.gy/ogau5a " width={30} height={30} />
      </div>
      <div className="mt-2 mb-2.5 space-y-1 xl:ml-24">
        <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
      <button className="ml-auto hidden h-[52px] w-56 rounded-full bg-[#1d9bf0] py-2 text-lg font-bold text-white shadow-md hover:bg-[#1a8cd8] xl:inline">
        Tweet
      </button>

      <div
        className="hoverAnimation mt-auto flex items-center justify-center text-[#d9d9d9] xl:ml-auto"
        onClick={signOut}
      >
        <img
          src={session.user.image}
          alt=""
          className="h-10 w-10 rounded-full xl:mr-2.5"
        />
        {/* <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white xl:mr-2.5">
          R
        </span> */}
        <div className="hidden leading-5 xl:inline">
          <h4 className="font-bold">{session?.user?.name}</h4>
          <p className="text-[#6e767d]">@{session?.user?.tag}</p>
        </div>
        <DotsHorizontalIcon className="ml-10 hidden h-5 xl:inline" />
      </div>
    </div>
  )
}

export default Sidebar

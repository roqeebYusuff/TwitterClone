import Image from 'next/image'
import SidebarLink from '../components/SidebarLink'
import {DotsHorizontalIcon, HomeIcon} from "@heroicons/react/solid"
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/react/outline"

function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2  fixed overflow-scroll h-full">
        <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
            <Image src="https://rb.gy/ogau5a " width={30} height={30}/>
        </div>
        <div className="space-y-1 mt-2 mb-2.5 xl:ml-24">
            <SidebarLink text="Home" Icon={HomeIcon} active />
            <SidebarLink text="Explore" Icon={HashtagIcon} />
            <SidebarLink text="Notifications" Icon={BellIcon} />
            <SidebarLink text="Messages" Icon={InboxIcon} />
            <SidebarLink text="Profile" Icon={UserIcon} />
            <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
        </div>
        <button className='hidden xl:inline ml-auto py-2 bg-[#1d9bf0] text-white rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]'>Tweet</button>
        
        <div className="text-[#d9d9d9] flex items-center justify-center hoverAnimation xl:ml-auto mt-auto">
          <span className='text-white bg-indigo-600 h-8 w-8 rounded-full flex justify-center items-center xl:mr-2.5'>R</span>
          <div className="hidden xl:inline leading-5">
            <h4 className='font-bold'>Roqeeb Yusuff</h4>
            <p className='text-[#6e767d]'>@the_Roq</p>
          </div>
          <DotsHorizontalIcon className='h-5 hidden xl:inline ml-10' />
        </div>
    </div>
  )
}

export default Sidebar
import { ChartBarIcon, HeartIcon, ChatIcon, DotsHorizontalIcon, ShareIcon  } from "@heroicons/react/outline"
import Moment from "react-moment"

function Comment({ id, comment }) {
  return (
    <div className="flex cursor-pointer border-b border-gray-700 p-3">
      <img
        src={comment?.userImg}
        alt=""
        className="mr-4 h-11 w-11 rounded-full"
      />
      <div className="flex w-full flex-col space-y-2">
        <div className="flex justify-between">
          <div className="text=[#6e767d]">
            <div className="group inline-block">
              <h4 className="inline-block text-[15px] font-bold text-[#d9d9d9] group-hover:underline sm:text-base">
                {comment?.username}
              </h4>
              <span className="ml-1.5 text-sm sm:text-[15px]">
                @{comment?.tag}{' '}
              </span>
            </div>
            .{" "}
            <span className="hover:underline text-sm sm:text-[15px]">
              <Moment fromNow>{comment?.timestamp?.toDate()}</Moment>
            </span>
            <p className="text-[#d9d9d9] mt-0.5 max-w-lg overflow-scroll text-[15px] sm:text-base">
              {comment?.comment}
            </p>
          </div>
          <div className="icon group flex-shrink-0">
            <DotsHorizontalIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
          </div>
        </div>
        <div className="text-[#6e767d] flex justify-between w-10/12">
          <div className="icon group">
            <ChatIcon className="h-5 group-hover:text-[#1d9bf0]" />
          </div>

          <div className="flex items-center space-x-1 group">
            <div className="icon group-hover:bg-pink-600/10">
              <HeartIcon className="h-5 group-hover:text-pink-600" />
            </div>
            <span className="group-hover:text-pink-600 text-sm"></span>
          </div>

          <div className="icon group">
            <ShareIcon className="h-5 group-hover:text-[#1d9bf0]" />
          </div>
          <div className="icon group">
            <ChartBarIcon className="h-5 group-hover:text-[#1d9bf0]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comment

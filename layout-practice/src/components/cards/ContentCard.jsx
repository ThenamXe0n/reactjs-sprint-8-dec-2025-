import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import posterImg from "../../assets/tumbnail1.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import MyButton from "../ui/MyButton";

function ContentCard({showBtn=false, img, title, channelName, channelLogo, views, time }) {
  return (
    <div className="space-y-3 m-2 max-w-md w-full">
      {/* image */}
      <div className="aspect-video relative w-full h-65 overflow-hidden  rounded-md">
        <img src={img} className="w-full h-full object-cover" alt={title} />
        {showBtn && <div className="size-16 absolute backdrop-blur-sm bottom-4 right-4  bg-[#272727b9] text-white rounded-full flex items-center justify-center -rotate-30">
          <IoIosArrowRoundForward  size={50} />
        </div>}
      </div>
      {/* information */}
      <div className="flex items-start gap-x-3 w-full">
        <img
          className="size-10 rounded-full border-2 border-white"
          src={channelLogo}
          alt={channelName}
        />
        {/* details */}
        <div className="w-full">
          <div className="flex items-start justify-between w-full">
            <span className="font-bold ">{title}</span>
            <BsThreeDotsVertical size={30} className="font-bold" />
          </div>
          {/* channel name  */}
         {!showBtn&& <div className="flex items-center justify-start gap-x-2 ">
            <span>{channelName}</span>
            <FaCheckCircle size={12} />
          </div>}
          {/* views and upload time */}
          {!showBtn &&<div>
            <span>{views} views</span> • <span>{time} ago</span>
          </div>}
        </div>
      </div>
      {/* action buttons */}
      {showBtn &&  <div className="flex items-center gap-2">
        <MyButton  title={"watch"}/>
        <MyButton bgcolor="bg-white" fontcolor="text-black" title={"Shop now"}/>
      </div>
      }
    </div>
  );
}

export default ContentCard;

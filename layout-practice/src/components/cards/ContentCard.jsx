import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import posterImg from "../../assets/tumbnail1.png";

function ContentCard({ img, title, channelName,channelLogo, views, time }) {
  return (
    <div className="space-y-3 m-2 max-w-md w-full">
      {/* image */}
      <div className="aspect-video w-full h-65 overflow-hidden  rounded-md">
        <img src={img} className="w-full h-full object-cover" alt={title} />
      </div>
      {/* information */}
      <div className="flex items-start gap-x-3 w-full">
        <img className="size-10 rounded-full border-2 border-white" src={channelLogo} alt={channelName} />
        {/* details */}
        <div className="w-full">
          <div className="flex items-start justify-between w-full">
            <span className="font-bold ">{title}</span>
            <BsThreeDotsVertical size={30} className="font-bold"/>
          </div>
          {/* channel name  */}
          <div className="flex items-center justify-start gap-x-2 ">
            <span>{channelName}</span>
            <FaCheckCircle size={12} />
          </div>
          {/* views and upload time */}
          <div>
            <span>{views} views</span> • <span>{time}{" "}ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentCard;

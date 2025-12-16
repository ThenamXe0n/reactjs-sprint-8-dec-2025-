import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import posterImg from "../../assets/tumbnail1.png";

function ContentCard({ img, title, channelName, views, time }) {
  return (
    <div className="space-y-3 m-2 max-w-md w-full">
      {/* image */}
      <div className="aspect-video w-full h-[260px] overflow-hidden  rounded-md">
        <img src={img} className="w-full h-full object-cover" alt={title} />
      </div>
      {/* information */}
      <div>
        <img />
        {/* details */}
        <div>
          <div className="flex items-start justify-between">
            <span className="font-bold ">{title}</span>
            <BsThreeDotsVertical />
          </div>
          {/* channel name  */}
          <div className="flex items-center justify-start gap-x-2 ">
            <span>{channelName}</span>
            <FaCheckCircle />
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

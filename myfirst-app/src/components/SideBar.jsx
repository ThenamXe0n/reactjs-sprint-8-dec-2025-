import React from "react";
import { MdArrowDropDownCircle } from "react-icons/md";

const topicListData = ["JS tutorial", "JS Syntax", "JS variable","Js operators","js functions"];
function SideBar() {
  return (
    <div>
      <h3 className="font-bold text-xl text-center">Javascript Basics</h3>

      <ul className="capitalize">
        {topicListData.map((item,indx) => {
          {
            console.log("item", item);
          }
          return <TopicListTile key={indx} topic={item} />;
        })}
      </ul>
    </div>
  );
}

function TopicListTile({ topic }) {
  return (
    <li className="flex items-center justify-between bg-gray-400 px-[20px!important]">
      {topic} <MdArrowDropDownCircle />
    </li>
  );
}

export default SideBar;

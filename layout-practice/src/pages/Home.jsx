import React from "react";
import ButtonTile from "../components/ui/ButtonTile";
import { categoryData, contentCards } from "../data/constants";
import ContentCard from "../components/cards/ContentCard";

function Home() {
  return (
    <div>
      <div className="flex  gap-x-2 items-center ">
        {categoryData.map((cate, index) => (
          <ButtonTile key={index} title={cate} />
        ))}
      </div>

      {/* //main content */}
      <section className="grid grid-cols-3 p-3 gap-3">
        {contentCards.map((item, idx) => (
          <ContentCard
            showBtn={item.showactionBtn}
            key={idx}
            title={item.title}
            img={item.img}
            channelName={item.channelName}
            views={item.views}
            time={item.time}
            channelLogo={item.channelLogo}
          />
        ))}
      </section>
    </div>
  );
}

export default Home;

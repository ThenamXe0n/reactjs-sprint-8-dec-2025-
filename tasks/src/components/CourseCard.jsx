import React from "react";

const CourseCard = ({ id, poster, courseName, level }) => {
  function selectColorOFTile() {
    switch (level) {
      case "Beginner":
        return "green";
      case "Intermediate":
        return "yellow";
      case "advance":
        return "blue";
      default:
        return "bg-green-500";
    }
  }

  function selectiveDesc() {
    switch (level) {
      case "Beginner":
        return "this is for collage and school going student";
      case "Intermediate":
        return "this is for fresher level techies ";
      case "advance":
        return "this course is for industry professionals";
      default:
        return "bg-green-500";
    }
  }

  console.log(level, "==>", selectColorOFTile());

  return (
    <div className="p-5 shadow-2xl max-w-xs max-h-96 relative">
      <span className="bg-black p-1 text-white absolute top-0 left-0">
        {id}
      </span>
      <div className="w-full h-64">
        <img
          className="h-full w-full object-cover"
          src={poster}
          alt={courseName}
        />
      </div>
      <h3 className="mt-7 font-semibold uppercase text-2xl">{courseName}</h3>
      <span
        className={`bg-${selectColorOFTile()}-600 px-4 py-1 font-bold text-gray-600  rounded-full`}
      >
        {level}
      </span>
      <p className={`text-${selectColorOFTile()}-600`}>{selectiveDesc()}</p>
    </div>
  );
};

export default CourseCard;

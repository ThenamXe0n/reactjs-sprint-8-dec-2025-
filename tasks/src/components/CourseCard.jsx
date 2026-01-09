import React from "react";

const CourseCard = ({ id, poster, courseName, level }) => {
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
      <span className="bg-yellow-200 px-4 py-1 font-bold text-gray-600  rounded-full">
        {level}
      </span>
    </div>
  );
};

export default CourseCard;

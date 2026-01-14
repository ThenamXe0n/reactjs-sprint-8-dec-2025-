import React from "react";
import CourseCard from "../components/CourseCard";


function AllCourses({courseList}) {

  return (
    <div>
      <h1 className="text-bold capitalize text-3xl text-center p-5 bg-black text-white">
        All Courses
      </h1>
      {/* couses card list container */}
      <div className="border-2 grid grid-cols-4 gap-5 rounded-md border-gray-400 m-10 min-h-[70vh]">
        {courseList.map((course, courseIdx) => (
          <CourseCard  key={courseIdx} id={course.id} courseName={course.title} level={course.level} poster={course.poster} />
        ))}
      </div>
    </div>
  );
}

export default AllCourses;

import React, { useRef } from "react";

const AddCoursesPage = ({ setnewCourse }) => {
  const courseIdRef = useRef();
  const courseNameRef = useRef();
  const posterRef = useRef();
  const levelRef = useRef();

  function handleAddCourse(e) {
    e.preventDefault();
    let payload = {
      id: courseIdRef.current.value,
      title: courseNameRef.current.value,
      level: levelRef.current.value,
      poster: posterRef.current.value,
    };
    console.log("data captured by form onn submit=>", payload);
    setnewCourse((prev) => [...prev, payload]);
  }

  return (
    <div>
      <h1 className="text-bold capitalize text-3xl text-center p-5 bg-black text-white">
        Add new Course
      </h1>
      <form
        onSubmit={handleAddCourse}
        className="shadow-2xl p-10 max-w-xl m-10  flex flex-col gap-2 items-center  shadow-black"
      >
        <h4>Fill the details</h4>
        <div className="flex gap-2 flex-col w-11/12">
          <label className="font-semibold text-xl" htmlFor="courseid">
            course Id
          </label>
          <input
            className="p-2 ring-2 rounded-md"
            type="text"
            placeholder="enter course id"
            id="courseid"
            ref={courseIdRef}
          />
        </div>
        <div className="flex gap-2 flex-col w-11/12">
          <label className="font-semibold text-xl" htmlFor="courseName">
            course name
          </label>
          <input
            className="p-2 ring-2 rounded-md"
            type="text"
            placeholder="enter courseName"
            id="courseName"
            ref={courseNameRef}
          />
        </div>
        <div className="flex gap-2 flex-col w-11/12">
          <label className="font-semibold text-xl" htmlFor="poster">
            poster
          </label>
          <input
            className="p-2 ring-2 rounded-md"
            type="url"
            placeholder="enter poster url"
            id="poster"
            ref={posterRef}
          />
        </div>
        <div className="flex gap-2 flex-col w-11/12">
          <label className="font-semibold text-xl" htmlFor="level">
            course level
          </label>
          <select ref={levelRef} className="p-2 ring-2 rounded-md" id="level">
            <option>--select level --</option>
            <option value={"Beginner"}>Beginner</option>
            <option value={"Intermidiate"}>Intermidiate</option>
            <option value={"advance"}>advance</option>
          </select>
        </div>
        <button className="bg-black text-white rounded-md px-5 py-1 text-lg hover:bg-emerald-500 duration-300 cursor-pointer">
          add course
        </button>
      </form>
    </div>
  );
};

export default AddCoursesPage;

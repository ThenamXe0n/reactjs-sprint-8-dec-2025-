import React, { useRef } from "react";

function UnControlledForm() {
  const courseRef = useRef();
  const topicRef = useRef();
  const timingRef = useRef();
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = {
      courseName: courseRef.current.value,
      topicName: topicRef.current.value,
      timing: timingRef.current.value,
    };
    // reset
    courseRef.current.value = "";
    topicRef.current.value = "";
    timingRef.current.value = "";
    formRef.current.style.background = "green"
    console.log("user batch details are", payload);
  };

  console.log(courseRef);
  console.log("render")

  return (
    <>
      <form
      ref={formRef}
        onSubmit={handleSubmit}
        className="border-4 p-10 rounded max-w-2xl mx-auto flex flex-col gap-y-4"
      >
        <label htmlFor="course">Course Name</label>
        <input
          ref={courseRef}
          className="ring-2 p-4 rounded-md"
          type="text"
          placeholder="enter course name"
          id="course"
          name="course"
        />
        <label htmlFor="topic">Topic Name</label>
        <input
          ref={topicRef}
          className="ring-2 p-4 rounded-md"
          type="text"
          placeholder="enter topic name"
          id="topic"
          name="topic"
        />
        <label htmlFor="timing">Timing </label>
        <input
          ref={timingRef}
          className="ring-2 p-4 rounded-md"
          type="time"
          id="timing"
          name="timing"
        />

        <button className="bg-black p-4 text-white rounded-md">submit</button>
      </form>
    </>
  );
}

export default UnControlledForm;

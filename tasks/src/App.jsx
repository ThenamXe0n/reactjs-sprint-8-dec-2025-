import { useState } from "react";
import "./App.css";
import AddCoursesPage from "./pages/AddCoursesPage";
import AllCourses from "./pages/AllCourses";
import HomePage from "./pages/HomePage";

let dummyData = [
  {
    id: 1,
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA1B3CZLiBnekYkYmu3yhmJhUWiUgIJv6cyQ&s",
    title: "React Basics",
    level: "Beginner",
  },
  {
    id: 2,
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA1B3CZLiBnekYkYmu3yhmJhUWiUgIJv6cyQ&s",
    title: "JavaScript ES6",
    level: "Intermediate",
  },
];

function App() {
  const [courseList, setCourseList] = useState(dummyData);
  return (
    <div>
      <HomePage />
      <AllCourses courseList={courseList} />
      <AddCoursesPage setnewCourse={setCourseList} />
    </div>
  );
}

export default App;

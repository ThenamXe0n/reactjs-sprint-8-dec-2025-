import { useState } from "react";
import "./App.css";
import AddCoursesPage from "./pages/AddCoursesPage";
import AllCourses from "./pages/AllCourses";
import HomePage from "./pages/HomePage";
import { Routes, Route, Link, useLocation } from "react-router";
import NavBar from "./components/NavBar";
import pagePaths from "./routes/pagePath";

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
  const location = useLocation();

  console.log("location is ==>", location);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path={pagePaths.HOME} element={<HomePage />} />
        <Route
          path={pagePaths.ALL_COURSES}
          element={<AllCourses courseList={courseList} />}
        />
        <Route
          path={pagePaths.ADD_COURSE}
          element={<AddCoursesPage setnewCourse={setCourseList} />}
        />
      </Routes>

      {location.pathname !== pagePaths.ADD_COURSE && (
        <Link
          to={pagePaths.ADD_COURSE}
          className="bg-black fixed bottom-6 right-6 rounded-full size-10 text-lg flex items-center justify-center text-white font-extrabold"
        >
          +
        </Link>
      )}
      {/* <HomePage />
      <AllCourses courseList={courseList} />
      <AddCoursesPage setnewCourse={setCourseList} /> */}
    </div>
  );
}

export default App;

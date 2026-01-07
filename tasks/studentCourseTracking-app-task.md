# 💻 React Machine Coding Round (Beginner)

## 📌 Problem Statement: Student Course Dashboard

You are required to build a **Student Course Dashboard** using **React**.  
This application allows students to view available courses and add new courses using a simple interface.

The goal of this assignment is to evaluate your understanding of **core React concepts**, **component structure**, **state management**, **routing**, and **basic UI styling**.

---

## ⏱ Time Limit
**1 Hour**

---

## 🧠 Skills Being Evaluated

- React Component Design
- Props & State Management
- Rendering Lists using `map()`
- Conditional Rendering
- Form Handling in React
- Client-Side Routing using React Router
- Nested Routing using `Outlet`
- UI Styling using Tailwind CSS

---

## 🧾 Functional Requirements

---

### 1️⃣ Application Layout

The application should have:
- A **Navbar** visible on all pages
- A main content area where routes are rendered

The Navbar should contain the following links:
- Home
- All Courses
- Add Course

Use **React Router** to handle navigation.

---

### 2️⃣ Home Page (`/`)

- Display a welcome message:
  
  **"Welcome to the Student Course Dashboard"**

- Show a button to navigate to **All Courses**

---

### 3️⃣ All Courses Page (`/courses/all`)

- Display a list of available courses
- Each course should be displayed in a **card format**

#### Sample Course Data
```js
[
  { id: 1, title: "React Basics", level: "Beginner" },
  { id: 2, title: "JavaScript ES6", level: "Intermediate" }
]

```
---
### Course Card Requirements
Each course card must show:

- Course Title
- Course Level

Rules:

- Use green color for Beginner

- Use blue color for Intermediate

- Render the list using map()

- Each course must be rendered using a separate CourseCard component
  ---
  ### 4️⃣ Conditional Rendering Rules
- If there are no courses available, display:

- No courses available. Please add a course."
- Show total number of courses at the top of the page
- Disable buttons when required conditions are not met

---
###V5️⃣ Add Course Page (/add-course)

Create a form to add a new course.

#### Form Fields

- Course Name (Text Input)

- Course Level (Dropdown: Beginner / Intermediate)

#### Form Behavior

- Prevent page reload on submit
- Validate that all fields are filled
- Disable the Submit button if inputs are empty
- On successful submission:
- Add the new course to the course list
- Clear the form fields
- Redirect user to All Courses
----
### 6️⃣ Routing & Nested Routing

Use react-router-dom.

####Required Routes

- / → Home
- /courses → Parent Route
- /courses/all → All Courses (Nested Route)
- /add-course → Add Course

#### Requirements:

- Use <Link /> for navigation
- Use <Outlet /> for nested routing
---

```bash
src/
 ├── components/
 │   ├── Navbar.jsx
 │   ├── CourseCard.jsx
 │   └── CourseList.jsx
 ├── pages/
 │   ├── Home.jsx
 │   ├── Courses.jsx
 │   └── AddCourse.jsx
 ├── App.jsx
 └── main.jsx
```

----

### ⚠️ Constraints

- Use functional components only
- Use React Hooks (useState)
- No backend or database 
- No Redux or Context API
- Focus on clean and readable code

---

### Evaluation Criteria

| Area                     | Weight |
| ------------------------ | ------ |
| Component Structure      | ⭐⭐⭐    |
| Props & State Usage      | ⭐⭐⭐    |
| List Rendering           | ⭐⭐     |
| Conditional Rendering    | ⭐⭐     |
| Form Handling            | ⭐⭐⭐    |
| Routing & Nested Routing | ⭐⭐⭐    |
| UI & Styling             | ⭐⭐     |


----


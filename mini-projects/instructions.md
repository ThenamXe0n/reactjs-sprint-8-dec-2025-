# mini project one - MOOD TRACKER APP
# 🎭 Mood Tracker – React Cheat Sheet

A quick reference for students to build a **Mood Tracker** using **components, props, and `useState`**.

---

## 📁 Suggested Folder Structure

```
src/
 ├── components/
 │    ├── Header.jsx
 │    ├── MoodList.jsx
 │    ├── MoodButton.jsx
 │    └── MoodDisplay.jsx
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

---

## ⚛️ Core Concepts Used

* Functional Components
* Props (passing data & functions)
* `useState` Hook
* Event Handling (`onClick`)
* Conditional Rendering
* Mapping arrays to components

---

## 🧠 State Design

**State Owner:** `App.jsx`

```js
const [currentMood, setCurrentMood] = useState(null);
```

* State is lifted to `App`
* Child components **receive data via props**
* Child components **update state using setter function**

---

## 🧩 Components Cheat Sheet

### App.jsx

* Holds main state
* Passes setter to child

```jsx
<MoodList setCurrentMood={setCurrentMood} />
<MoodDisplay mood={currentMood} />
```

---

### Header.jsx

* Stateless component

```jsx
function Header() {
  return <h1>😄 Mood Tracker</h1>;
}
```

---

### MoodList.jsx

* Contains mood data array
* Maps data to buttons

```jsx
const moods = [
  { emoji: "😄", label: "Happy" },
  { emoji: "😐", label: "Normal" },
  { emoji: "😢", label: "Sad" },
  { emoji: "🤩", label: "Excited" }
];

{moods.map((mood) => (
  <MoodButton
    key={mood.label}
    emoji={mood.emoji}
    label={mood.label}
    onSelect={() => setCurrentMood(mood)}
  />
))}
```

---

### MoodButton.jsx

* Reusable button
* Uses props

```jsx
function MoodButton({ emoji, label, onSelect }) {
  return (
    <button onClick={onSelect}>
      <span>{emoji}</span>
      <span>{label}</span>
    </button>
  );
}
```

---

### MoodDisplay.jsx

* Conditional rendering

```jsx
if (!mood) {
  return <p>Select a mood</p>;
}
```

```jsx
<div>
  <h2>Your mood:</h2>
  <span>{mood.emoji}</span>
  <h3>{mood.label}</h3>
</div>
```

---

## 🔄 Data Flow (Important)

```
Button Click
   ↓
setCurrentMood(mood)
   ↓
App State Updates
   ↓
MoodDisplay Re-renders
```

---

## 🎯 Common Mistakes to Avoid

❌ Updating state inside child without props
❌ Forgetting `key` in `.map()`
❌ Using state in every component unnecessarily
❌ Mutating state directly

---

## 🔥 Practice Challenges

* Highlight selected mood button
* Add "Reset Mood" button
* Change background color per mood
* Store last 5 moods in an array
* Add time stamp to mood selection

---

## ✅ Learning Outcome

By completing this project, students will:

* Understand **state lifting**
* Build **reusable components**
* Gain confidence in React basics
* Be ready for Todo / Quiz apps

---

📌 **Tip:** First draw UI → then split into components → then decide state owner

Happy Coding 🚀

function MoodButton({ mood, setCurrentMood, isActive }) {
  function handleClick() {
    console.log("you clicked ", mood);
    setCurrentMood(mood);
  }
  return (
    <button
      onClick={handleClick}
      className={`border mt-5 px-3 py-1 rounded-md capitalize font-semibold hover:bg-emerald-600 hover:text-white hover:border-emerald-600 active:scale-95 cursor-pointer duration-200 ${
        isActive && "bg-emerald-600 text-white"
      }`}
    >
      {mood.label}
    </button>
  );
}

export default MoodButton;

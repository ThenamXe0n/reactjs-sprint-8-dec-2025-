function MoodButton({  label, onSelect }) {
  return (
    <button
      onClick={onSelect}
      className="px-4 py-2 rounded-lg bg-black border border-white active:scale-95 duration-500 active:bg-black hover:bg-gray-300"
    >
      <span>{label}</span>
    </button>
  );
}

export default MoodButton;

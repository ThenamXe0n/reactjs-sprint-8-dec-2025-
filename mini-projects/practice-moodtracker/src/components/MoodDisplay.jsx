function MoodDisplay({ currentMood }) {
  return (
    <div className="flex flex-col items-center mt-6 gap-y-6">
      <h2 className="font-bold text-lg capitalize">
        Your current Mood is {currentMood?.label}
      </h2>
      <img
        className="max-h-96 w-auto rounded-lg"
        src={currentMood?.image}
        alt="happy"
      />
    </div>
  );
}

export default MoodDisplay;

function MoodDisplay({ mood }) {
  if (!mood) {
    return (
      <p className="text-center text-gray-500">
        Select a mood to see it here 👆
      </p>
    );
  }

  return (
    <div className="text-center mt-4 space-y-5">
      <h2 className="text-2xl mb-6 font-bold">Your current mood is:</h2>
      <div className="max-h-92 rounded-lg overflow-hidden h-screen w-fit mx-auto"><img className="h-full" src={`${mood.image}`} alt={mood.label}/></div>
      <p className="text-lg font-semibold">{mood.label}</p>
    </div>
  );
}

export default MoodDisplay;

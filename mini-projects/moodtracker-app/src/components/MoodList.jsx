import MoodButton from "./MoodButton";

const moods = [
  {
    emoji: "😄",
    label: "Happy",
    image:
      "https://i.pinimg.com/474x/4b/cf/0e/4bcf0e103c79877280e607feab5c06e8.jpg",
  },
  { emoji: "😐", label: "angry",image:"https://m.media-amazon.com/images/M/MV5BYTc5ZjEyOWMtZWQ2ZC00OTA1LWI1ZjEtZjljZmRkNWE4MzgxXkEyXkFqcGc@._V1_.jpg" },
  { emoji: "😢", label: "Sad" ,image:"https://pbs.twimg.com/media/FdV55viaIAEBSnz.jpg"},
  { emoji: "🤩", label: "Excited",image:"https://media5.bollywoodhungama.in/wp-content/uploads/2020/11/On-Set-with-the-Cast-of-Ludo-Behind-the-Scenes-Ludo-Netflix-India-255x191.jpeg" },
  { emoji: "🤩", label: "frustrated",image:"https://indianmemetemplates.com/wp-content/uploads/jethalal-headache.jpg" },
  { emoji: "🤩", label: "crying",image:"https://memesdownload.in/king-include/uploads/2023/08/976549-get%20(26).jpg" },
];

function MoodList({ setCurrentMood }) {
  return (
    <div className="flex gap-4 my-14 justify-center mb-6">
      {moods.map((mood) => (
        <MoodButton
          key={mood.label}
          label={mood.label}
          onSelect={() => setCurrentMood(mood)}
        />
      ))}
    </div>
  );
}

export default MoodList;

function Header({currentMood}) {
  return (
    <header className="border p-4 text-center font-bold uppercase text-2xl border-emerald-600 rounded-lg ">
      {currentMood?.emoji} <span>MOOD TRACKER</span>
    </header>
  );
}

export default Header;

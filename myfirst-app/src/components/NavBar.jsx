const headerstyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "black",
  color: "white",
  padding:"10px"
};

const navStyle = {
  display: "flex",
  gap: "16px",
};

const mailBoxStyle = {
    display:"flex",
    gap:"10px",
    alignItems:"center"
}

function NavBar() {
  return (
    <header style={headerstyle}>
      <div id="logo">
        <span>mind</span>
        <span>coders</span>
      </div>
      <nav style={navStyle}>
        <span>Home</span>
        <span>About</span>
        <span>Skills</span>
        <span>Experience</span>
        <span>Contact</span>
      </nav>
      <div style={mailBoxStyle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          height={30}
          width={30}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>

        <span>mindcoder@gmail.com</span>
      </div>
    </header>
  );
}

export default NavBar;

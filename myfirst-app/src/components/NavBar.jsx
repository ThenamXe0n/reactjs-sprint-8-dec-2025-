import MyButton from "./MyButton";
//you can use js code here

function NavBar() {
  // you can use js code here
  const nav1 = "Home";
  const nav2 = "about";
  const nav3 = "services";
  const nav4 = "blog";

  const h1Styling = {
    backgroundColor: "red",
    color: "white",
    fontSize: "5rem",
  };

  return (
    <>
      {/* //you cannot use js code here , use jsx  */}
      <header className="header">
        <nav>
          <h4>{nav1}</h4>
          <h4>{nav2}</h4>
          <h4>{nav3}</h4>
          <h4>{nav4}</h4>
          <MyButton />
          <MyButton />
          <MyButton />
          <MyButton />
        </nav>
      </header>
      <div>
        <h1 style={h1Styling}>sum of 2 and 6 is = 2+6</h1>
      </div>
    </> // these are called empty tags or fragment tags in react js
  );
} // this is an functional component in react js

//first way to export component
export default NavBar;

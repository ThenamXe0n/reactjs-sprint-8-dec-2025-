import CustomButton from "../ui/CustomButton"

function HeroSection() {
  let heroDivStyle = {
    height: "100vh",
    background: "#10232c",
    color: "white",
    display: "flex",
    flexDirection:"column",
    gap:"30px",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <section style={heroDivStyle}>
      <h1>Mindcoders</h1>
      <p>A edtech platform provides training to tech and non techs</p>
      <CustomButton title="Explore More" color="white" textColor={"black"} />
    </section>
  );
}

export default HeroSection;

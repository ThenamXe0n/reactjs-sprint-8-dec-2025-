import React from "react";
import CustomButton from "../ui/CustomButton";

function AboutSection() {
    const containerStyle = {
    height: "100vh",
    background: "#91dcffff",
    color: "black",
    display: "flex",
    flexDirection:"column",
    gap:"30px",
    fontSize:"2rem",
    padding:"25px",
    alignItems: "center",
    justifyContent: "start",
  }
  return (
    <div style={containerStyle}>
      <h3>About Us</h3>
      <img
        src="https://tse3.mm.bing.net/th/id/OIP.uTcnWpsYSmCPBCc-P507NwHaHa?pid=Api&P=0&h=220"
        alt="poster"
      />
      <CustomButton title="my button" color="green"/>
      <p>
        Computer programming or coding is the composition of sequences of
        instructions, called programs, that computers can follow to perform
        tasks. It involves designing and implementing algorithms, step-by-step
        specifications of procedures, by writing code in one or more programming
        languages. Programmers typically use high-level programming languages
        that are more easily intelligible to humans than mac.
      </p>
    </div>
  );
}

export default AboutSection;

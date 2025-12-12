import CustomButton from "./CustomButton";

function SkillCard({ctaLink, icon, skill, skillDesc,background="transparent" }) {
  return (
    <div
      style={{
        border: "1px solid black",
        alignItems: "center",
        gap: "10px",
        background:background,
        padding: "20px",
        borderRadius: "5%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          height: "100px",
          borderRadius: "10%",
          width: "100px",
          background: "white",
        }}
      >
        {icon}
      </div>
      <h3 style={{textTransform:"uppercase"}}>{skill}</h3>
      <p style={{ textAlign: "left" }}>{skillDesc}</p>
      <CustomButton url={ctaLink} title="Read More" color="white" textColor={"black"}/>
    </div>
  );
}

export default SkillCard;

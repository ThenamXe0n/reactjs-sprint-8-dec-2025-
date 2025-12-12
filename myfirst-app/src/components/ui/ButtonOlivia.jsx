const ButtonOlivia = ({
  title,
  bgColor = "bg-white",
  fontColor = "text-black",
  navigate,
  icon
}) => {
  return (
    <a
      href={navigate}
      id="contact_btn"
      className={`${bgColor} flex items-center gap-x-4  ${fontColor} text-black uppercase px-6 py-2 rounded-full font-bold`}
    >
      {title} 
      {icon}
    </a>
  );
};

export default ButtonOlivia;

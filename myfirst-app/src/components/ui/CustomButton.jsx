let defaultIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    height={15}
    width={15}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.25 4.5 7.5 7.5-7.5 7.5"
    />
  </svg>
);

"sdfsdf".slice();

function CustomButton({
  color = "blue",
  icon = defaultIcon,
  title = "** add title to button**",
  textColor,
  isBorder=false,
  url
}) {
  const btnstyle = {
    padding: "5px 10px",
    background: color,
    border: isBorder ? "2px solid black" : "none",
    borderRadius: "3px",
    color: textColor,
    display: "flex",
    alignItems: "center",
    gap: "5px",
  };
  return (
    <a href={url} style={btnstyle}>
      <span>{title}</span>
      {icon}
    </a>
  );
}

export default CustomButton;

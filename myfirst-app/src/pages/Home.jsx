import NavBar from "../components/NavBar";
import NavBarOlivia from "../components/NavBarOlivia";
import AboutSection from "../components/sections/AboutSection";
import HeroSection from "../components/sections/HeroSection";
import HeroSectionOlivia from "../components/sections/HeroSectionOlivia";
import SkillSection from "../components/sections/SkillSection";

function Home() {
  const downloadIcon = (
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
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
      />
    </svg>
  );

  return (
    <>
      <NavBarOlivia />
      <HeroSectionOlivia
        title={
          <h1 className="captilazed text-6xl font-bold">
            I'm
            <span className="text-[#ffa807] underline font-medium">
              Olivia Smith
            </span>
            Product designer based in USA
          </h1>
        }
        image={"/imageProfile.png"}
        desc={"lkjkjkjk khkhkjhkjhjkhkjh khkjhkh kjhkjh "}
      />
      <HeroSectionOlivia
      title={<h1 className="text-2xl font-bold ">
        Exlore our services <span className="text-yellow-600">Below</span>
      </h1>}
        image={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUySczjZCd1hUshrUxT6aZoGFE5x0F1PT2TA&s"
        }
      />
      {/* <NavBar items={[]} logo="" /> */}
      {/* <HeroSection /> */}
      <AboutSection />
      <SkillSection />
    </>
  );
}

export default Home;

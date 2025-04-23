import AboutMeMain from "./components/aboutMe/AboutMeMain";
import ContactMain from "./components/contactMeSection/ContactMain";
import FooterMain from "./components/footer/FooterMain";
import HealperSection from "./components/HealperSection";
import HeroGradient from "./components/heroSction/HeroGradient";
import HeroMain from "./components/heroSction/HeroMain";
import SubHeroSection from "./components/heroSction/SubHeroSection";
import NavBarMain from "./components/navbar/NavBarMain.jsx";
import ProjectsMain from "./components/projectSection/ProjectsMain";
import BottomSkills from "./components/skillSection/BottomSkills";
import SkillSectionMain from "./components/skillSection/SkillSectionMain";

function App() {
  return (
    <>
      <main className="font-body">
        <NavBarMain />
        <HeroMain />
        <HeroGradient />
        {/* <SubHeroSection /> */}
        <AboutMeMain />
        <SkillSectionMain />
        <BottomSkills />
        <ProjectsMain />
        <ContactMain />
        <FooterMain />
      </main>
    </>
  );
}

export default App;

import AboutMeMain from "./components/aboutMe/AboutMeMain";
import HealperSection from "./components/HealperSection";
import HeroGradient from "./components/heroSction/HeroGradient";
import HeroMain from "./components/heroSction/HeroMain";
import SubHeroSection from "./components/heroSction/SubHeroSection";
import NavBarMain from "./components/navbar/NavBarMain";
import SkillSectionMain from "./components/skillSection/SkillSectionMain";

function App() {
  return (
    <>
      <main className="font-body">
        <NavBarMain />
        <HeroMain />
        <HeroGradient />
        <SubHeroSection />
        <AboutMeMain />
        <SkillSectionMain/>
        <HealperSection/>
      </main>
    </>
  );
}

export default App;

import AboutMeMain from "./components/aboutMe/AboutMeMain";
import HeroGradient from "./components/heroSction/HeroGradient";
import HeroMain from "./components/heroSction/HeroMain";
import SubHeroSection from "./components/heroSction/SubHeroSection";
import NavBarMain from "./components/navbar/NavBarMain";

function App() {
  return (
    <>
      <main className="font-body">
        <NavBarMain />
        <HeroMain />
        <HeroGradient />
        <SubHeroSection />
        <AboutMeMain />
      </main>
    </>
  );
}

export default App;

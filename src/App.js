import Navbar from "./components/NavBar";
import HeroSection from "./components/sections/HeroSection";
import ProjectCaseStudySection from "./components/sections/ProjectCaseStudy";
import JourneySection from "./components/sections/JourneySection";
import SkillsEcosystem from "./components/sections/SkillsEcosystem";
import AchievementsSection from "./components/sections/AchievementsSection";
import FinalCTA from "./components/sections/FinalCTA";

function App() {
  return (
    <div className="relative min-h-screen bg-[var(--bg)]">
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Project Case Studies */}
      <ProjectCaseStudySection />

      {/* Experience Journey */}
      <JourneySection />

      {/* Skills Ecosystem */}
      <SkillsEcosystem />

      {/* Achievements */}
      <AchievementsSection />

      {/* Final CTA & Contact */}
      <FinalCTA />
    </div>
  );
}

export default App;

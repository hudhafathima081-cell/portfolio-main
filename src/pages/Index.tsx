import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection.tsx";
import HobbiesSection from "@/components/HobbiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen w-full overflow-x-hidden">
    {/* ✅ THIS IS THE FIX */}
    <div className="w-full">

      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <HobbiesSection />
      <ContactSection />
      <Footer />

    </div>

  </div>
);

export default Index;

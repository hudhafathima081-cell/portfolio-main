import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import HobbiesSection from "@/components/HobbiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen p-4 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b]">

    {/* 🔥 PREMIUM CONTAINER START */}
    <div className="max-w-7xl mx-auto rounded-2xl border border-white/10 shadow-2xl bg-white/5 backdrop-blur-xl overflow-hidden">

      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ExperienceSection />
      <HobbiesSection />
      <ContactSection />
      <Footer />

    </div>
    {/* 🔥 PREMIUM CONTAINER END */}

  </div>
);

export default Index;

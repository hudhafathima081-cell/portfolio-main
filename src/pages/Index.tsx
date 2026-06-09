import Loader from "@/components/Loader";
import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import Certificates from "@/components/Certificates";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection.tsx";
import HobbiesSection from "@/components/HobbiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {

  // LOADER STATE
  const [loading, setLoading] = useState(true);

  // LOADER TIMER
  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);

  }, []);

  // SHOW LOADER FIRST
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden">

      <div className="w-full">

        <Navbar />

        <HeroSection />

        <AboutSection />

        <EducationSection />

        <Certificates />

        <SkillsSection />

        <ProjectsSection />

        <HobbiesSection />

        <ContactSection />

        <Footer />

      </div>

    </div>
  );
};

export default Index;
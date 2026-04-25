import { Briefcase, CheckCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const ExperienceSection = () => (
 <section
  id="experience"
  className="min-h-screen py-20 
  bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] 
  transition-all duration-700"
>
    <div className="w-full px-6 md:px-12 lg:px-20">
      <SectionHeading title="Experience" subtitle="My professional journey" />

      <AnimatedSection className="max-w-2xl mx-auto">
        <div className="bg-gradient-card rounded-xl p-8 shadow-card border border-border/50 hover:border-primary/30 transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Briefcase className="text-primary" size={22} />
            </div>
            <div className="flex-1">
              <span className="text-xs font-medium text-primary tracking-wider uppercase">2024 – Present</span>
              <h3 className="text-xl font-semibold text-foreground mt-1">Private Tutor</h3>
              <p className="text-muted-foreground text-sm mb-4">Self-employed</p>

              <ul className="space-y-3">
                {["Teaching students across multiple subjects", "Clearing doubts and reinforcing concepts", "Managing learning sessions effectively"].map(
                  (item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={16} />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ExperienceSection;

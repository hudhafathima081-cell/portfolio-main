import { GraduationCap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const education = [
  { period: "2024 – Present", school: "Sa-Adiya Arts and Science College", detail: "BCA", current: true },
  { period: "2022 – 2024", school: "MP International School", detail: "Computer Science" },
  { period: "2010 – 2022", school: "Kunil Educational Institution", detail: "Schooling" },
];

const EducationSection = () => (
  <section
  id="education"
  className="min-h-screen py-20 
  bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] 
  transition-all duration-700"
>
    <div className="w-full px-6 md:px-12 lg:px-20">
      <SectionHeading title="Education" subtitle="My academic journey" />

      <div className="max-w-2xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-8">
          {education.map((edu, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="flex gap-6 md:gap-8 relative">
                <div className="relative z-10 flex-shrink-0 w-12 md:w-16 h-12 md:h-16 rounded-full bg-gradient-card border-2 border-primary/40 flex items-center justify-center shadow-card">
                  <GraduationCap className="text-primary" size={20} />
                </div>
                <div className={`flex-1 bg-gradient-card rounded-xl p-6 shadow-card border transition-all duration-300 hover:border-primary/40 hover:glow-gold ${edu.current ? "border-primary/30" : "border-border/50"}`}>
                  <span className="text-xs font-medium text-primary tracking-wider uppercase">{edu.period}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-1">{edu.school}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{edu.detail}</p>
                  {edu.current && (
                    <span className="inline-block mt-2 px-3 py-0.5 rounded-full bg-primary/15 text-primary text-xs font-medium">
                      Currently Pursuing
                    </span>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;

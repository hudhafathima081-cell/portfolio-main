import { Heart, Code } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const skillGroups = [
  {
    title: "Soft Skills",
    icon: Heart,
    skills: [
      { name: "Communication", level: 90 },
      { name: "Adaptability", level: 85 },
      { name: "Patience & Empathy", level: 95 },
      { name: "Time Management", level: 80 },
    ],
  },
  {
    title: "Technical Skills",
    icon: Code,
    skills: [
      { name: "C Programming", level: 75 },
      { name: "C++", level: 70 },
      { name: "Java", level: 65 },
      { name: "MS Office", level: 85 },
      { name: "HTML", level: 60 },
      { name: "Google Meet / Zoom", level: 90 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <AnimatedSection delay={delay}>
    <div className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-primary font-semibold">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <AnimatedSection delay={delay + 0.2}>
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary to-gold-dim transition-all duration-700"
            style={{ width: `${level}%` }}
          />
        </AnimatedSection>
      </div>
    </div>
  </AnimatedSection>
);

const SkillsSection = () => (
 <section
  id="skills"
  className="min-h-screen py-20 
  bg-white/5 backdrop-blur-xl 
  border-y border-white/10 
  transition-all duration-700"
>
    <div className="container mx-auto px-6">
      <SectionHeading title="Skills" subtitle="What I bring to the table" />

      {/* ✅ FIXED GRID */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {skillGroups.map((group, gi) => (
          <AnimatedSection key={group.title} delay={gi * 0.15}>
            
            {/* ✅ CURVED PREMIUM CARD */}
            <div className="p-6 rounded-3xl backdrop-blur-lg bg-white/5 border border-yellow-400/30 
            transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 
            hover:shadow-[0_0_30px_rgba(255,215,0,0.6)] hover:border-yellow-400">

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <group.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-semibold text-foreground">{group.title}</h3>
              </div>

              {group.skills.map((skill, si) => (
                <SkillBar key={skill.name} {...skill} delay={gi * 0.15 + si * 0.05} />
              ))}

            </div>

          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
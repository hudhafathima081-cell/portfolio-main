import { BookOpen, Puzzle, Music , Activity, Laptop, Gamepad2, Code, Car } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const hobbies = [
  { name: "Building project", icon: Laptop },
  { name: "Coding", icon: Code },
  { name: "Reading", icon: BookOpen },
  { name: "Puzzle Solving", icon: Puzzle },
  { name: "Listening to Music", icon: Music },
  { name: "Gaming", icon: Gamepad2 },
  { name: "Traveling", icon: Car },
];

const HobbiesSection = () => (
  <section
  id="hobby"
  className="min-h-screen py-20 
  bg-white/5 backdrop-blur-xl 
  border-y border-white/10 
  transition-all duration-700"
>
    <div className="container mx-auto px-6">
      <SectionHeading title="Hobbies" subtitle="What I enjoy in my free time" />

      <div className="flex flex-wrap justify-center gap-6 ">
        {hobbies.map((hobby, i) => (
          <AnimatedSection key={hobby.name} delay={i * 0.15}>
            <div className="bg-gradient-card rounded-xl p-6 shadow-card border border-border/50 hover:border-primary/30 hover:glow-gold transition-all duration-300 flex flex-col items-center gap-3 w-40">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <hobby.icon className="text-primary" size={24} />
              </div>
              <span className="font-medium text-foreground text-sm">{hobby.name}</span>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default HobbiesSection;

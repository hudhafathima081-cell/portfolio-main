import { MapPin, Languages, User } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const AboutSection = () => (
  <section
  id="about"
  className="min-h-screen py-20 
  bg-white/5 backdrop-blur-xl 
  border-y border-white/10"
>
    <div className="w-full px-6 md:px-12 lg:px-20">
      <SectionHeading title="About Me" subtitle="Get to know me better" />

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
        <AnimatedSection className="md:col-span-2" delay={0.1}>
          <div className="card-glass p-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-yellow-400/30 
transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 
hover:shadow-[0_0_30px_rgba(255,215,0,0.6)] hover:border-yellow-400">
            <div className="flex items-center gap-3 mb-4">
              <User className="text-primary" size={22} />
              <h3 className="text-lg font-semibold text-foreground">Profile</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              A passionate BCA student with strong skills in programming, web development, and database management.
               I have a keen interest in software development and enjoy creating innovative, efficient, 
               and user-friendly digital solutions. I am always eager to learn new technologies and improve my
                technical knowledge to grow in the IT field.”
            </p>
          </div>
        </AnimatedSection>

        <div className="flex flex-col gap-4">
          <AnimatedSection delay={0.2}>
            <div className="card-glass p-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-yellow-400/30 
transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 
hover:shadow-[0_0_30px_rgba(255,215,0,0.6)] hover:border-yellow-400">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="text-primary" size={20} />
                <h4 className="font-semibold text-foreground text-sm">Location</h4>
              </div>
              <p className="text-muted-foreground text-sm">Kasaragod, Kerala</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
           <div className="card-glass p-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-yellow-400/30 
transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 
hover:shadow-[0_0_30px_rgba(255,215,0,0.6)] hover:border-yellow-400">
              <div className="flex items-center gap-3 mb-3">
                <Languages className="text-primary" size={20} />
                <h4 className="font-semibold text-foreground text-sm">Languages</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {["English", "Hindi", "Malayalam", "Arabic"].map((lang) => (
                  <span key={lang} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;

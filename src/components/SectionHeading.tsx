import AnimatedSection from "./AnimatedSection";

interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: Props) => (
  <AnimatedSection className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3">
      <span className="text-gradient-gold">{title}</span>
    </h2>
    {subtitle && <p className="text-muted-foreground max-w-xl mx-auto">{subtitle}</p>}
    <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-primary/40" />
  </AnimatedSection>
);

export default SectionHeading;

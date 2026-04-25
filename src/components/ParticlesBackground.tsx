import { useMemo } from "react";

const ParticlesBackground = () => {

  const bubbles = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      size: Math.random() * 6 + 4, // 4px - 10px
      left: Math.random() * 100, // random horizontal position
      duration: Math.random() * 10 + 8, // 8s - 18s
      delay: Math.random() * 5, // delay start
      opacity: Math.random() * 0.5 + 0.3,
    }));
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">

      {bubbles.map((b) => (
        <span
          key={b.id}
          className="absolute bg-white rounded-full"
          style={{
            width: `${b.size}px`,
            height: `${b.size}px`,
            left: `${b.left}%`,
            bottom: "0px",
            opacity: b.opacity,
            animation: `bubble ${b.duration}s linear infinite`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}

    </div>
  );
};

export default ParticlesBackground;
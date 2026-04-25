import Particles from "@tsparticles/react";

const ParticlesBackground = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: true, zIndex: -1 },

        background: {
          color: "transparent",
        },

        particles: {
          number: { value: 80 },
          color: { value: "#38bdf8" },
          opacity: { value: 0.5 },
          size: { value: { min: 3, max: 8 } },

          move: {
            enable: true,
            speed: 2,
            direction: "top",
            random: true,
            outModes: { default: "out" },
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
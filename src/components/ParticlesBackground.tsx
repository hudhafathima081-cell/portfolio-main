import Particles from "@tsparticles/react";

const ParticlesBackground = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },

        background: {
          color: "transparent",
        },

        particles: {
          number: {
            value: 60,
          },

          color: {
            value: "#ffffff", // ⚪ white bubbles
          },

          shape: {
            type: "circle",
          },

          opacity: {
            value: 0.4,
          },

          size: {
            value: { min: 4, max: 10 }, // bigger bubbles
          },

          move: {
            enable: true,
            speed: 1.5,
            direction: "top",
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
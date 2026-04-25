const ParticlesBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">

      <span className="absolute w-10 h-10 bg-white rounded-full left-[10%] bottom-0 animate-bubble shadow-[0_0_25px_white]"></span>

      <span className="absolute w-8 h-8 bg-white rounded-full left-[30%] bottom-0 animate-bubble shadow-[0_0_20px_white] [animation-duration:8s]"></span>

      <span className="absolute w-12 h-12 bg-white rounded-full left-[60%] bottom-0 animate-bubble shadow-[0_0_30px_white] [animation-duration:12s]"></span>

      <span className="absolute w-6 h-6 bg-white rounded-full left-[80%] bottom-0 animate-bubble shadow-[0_0_15px_white] [animation-duration:6s]"></span>

      <span className="absolute w-9 h-9 bg-white rounded-full left-[50%] bottom-0 animate-bubble shadow-[0_0_25px_white] [animation-duration:10s]"></span>

    </div>
  );
};

export default ParticlesBackground;
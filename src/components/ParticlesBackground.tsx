const ParticlesBackground = () => {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none">

      <span className="absolute w-6 h-6 bg-white rounded-full left-[10%] bottom-0 animate-bubble"></span>
      <span className="absolute w-4 h-4 bg-white rounded-full left-[30%] bottom-0 animate-bubble"></span>
      <span className="absolute w-8 h-8 bg-white rounded-full left-[60%] bottom-0 animate-bubble"></span>
      <span className="absolute w-3 h-3 bg-white rounded-full left-[80%] bottom-0 animate-bubble"></span>
      <span className="absolute w-5 h-5 bg-white rounded-full left-[50%] bottom-0 animate-bubble"></span>

    </div>
  );
};

export default ParticlesBackground;
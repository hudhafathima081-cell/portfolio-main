const Certificates = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white p-10">

      <h1 className="text-4xl font-bold text-center mb-10">
        My <span className="text-yellow-400">Certificates</span>
      </h1>

      {/* CARD */}
      <div className="bg-white/10 p-5 rounded-xl max-w-md mx-auto">

        <img
          src="/certificate.png"
          alt="certificate"
          className="rounded-lg"
        />

        <h2 className="text-2xl mt-4">
          Web Development Internship
        </h2>

        <p className="text-gray-400 mt-2">
          XYZ Company • 2026
        </p>

        <a
          href="/certificate.pdf"
          target="_blank"
          className="inline-block mt-4 bg-yellow-400 text-black px-4 py-2 rounded-lg"
        >
          View Certificate
        </a>

      </div>

    </div>
  );
};

export default Certificates;
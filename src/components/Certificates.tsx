const Certificates = () => {
  return (
    <section
      id="certificates"
      className="py-20 bg-[#020617] text-white"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-yellow-400">Certificates</span>
        </h2>

        {/* CERTIFICATE CARD */}
        <div
          className="
            bg-yellow-400
            text-black
            rounded-2xl
            p-6
            max-w-xl
            mx-auto
            shadow-lg
          "
        >

          <h3 className="text-2xl font-bold">
            Web Development Internship
          </h3>

          <p className="mt-2">
            Zephyr Company • 2026
          </p>

          {/* BUTTON */}
          <a
            href="/certificate.png"
            target="_blank"
            rel="noreferrer"
            className="
              inline-block
              mt-5
              bg-black
              text-white
              px-5
              py-2
              rounded-lg
              hover:scale-105
              transition
            "
          >
            View Certificate
          </a>

        </div>

      </div>
    </section>
  );
};

export default Certificates;
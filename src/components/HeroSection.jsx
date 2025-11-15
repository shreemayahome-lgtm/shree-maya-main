export default function Hero() {
  return (
    <section
      id="hom"
      className="h-screen w-full bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
      style={{ backgroundImage: "url('/herobg.avif')" }}
    >
      {/* Overlay – adjust opacity as needed */}
      <div id="home" className="absolute inset-0 bg-black/35"></div>

      <div className="relative z-10 text-center text-white px-6">
        <img
          src="/logo.png"
          className="mx-auto w-48 md:w-60 mb-6 drop-shadow-lg"
        />

        <h1 className="font-weight-600 text-3xl md:text-5xl tracking-wide leading-tight">
          Divine Comfort for Every Space
        </h1>

        <p className="mt-2 text-white/90 md:text-lg tracking-wide">
          Supplying Hotels & Homes Nationwide
        </p>

        <button
          onClick={() =>
            document
              .getElementById("collections")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="mt-8 bg-white text-black font-semibold px-6 py-3 rounded-md hover:scale-105 transition-transform shadow-md"
        >
          View Products
        </button>
      </div>
    </section>
  );
}

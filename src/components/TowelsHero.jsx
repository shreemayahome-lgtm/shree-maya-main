export default function TowelsHero() {
    return (
      <section
        id="bath-towels"
        className="h-[60vh] w-full bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
        style={{ backgroundImage: "url('/bg3.avif')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
  
        <h2 className="relative z-10 text-white text-3xl md:text-4xl font-semibold tracking-wide">
          Bath Towels & Spa Linen
        </h2>
      </section>
    );
  }
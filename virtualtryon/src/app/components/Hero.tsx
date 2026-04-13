import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Image */}
      <Image
        src="/hero.png"
        alt="Bridal"
        fill
        priority
        className="object-cover object-center md:object-[center_20%]"
      />

      {/* Overlay (IMPORTANT) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute bottom-20 right-10 text-[#F8F5F2]">
        <h1 className="text-4xl md:text-8xl font-cinzel leading-tight">
          Glory <br /> Bridals
        </h1>

        <p className="normal-case mt-4 font-cinzel text-lg">
          Timeless Elegance for Your Special Day
        </p>
      </div>

    </section>
  )
}
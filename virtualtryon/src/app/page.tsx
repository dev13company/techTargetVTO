import Image from "next/image"
import { client } from "../sanity/lib/client"
import imageUrlBuilder from "@sanity/image-url"

const builder = imageUrlBuilder(client)
const urlFor = (src: any) => builder.image(src)

async function getProducts() {
  return await client.fetch(`*[_type=="product"][0...6]`)
}

export default async function Home() {
  const products = await getProducts()

  return (
    <main className="bg-white text-black">

      {/* 🔥 HERO SECTION */}
      <section className="relative h-screen">
        <Image
          src="/hero.jpg"
          alt="Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute bottom-20 left-10 text-white">
          <h1 className="text-6xl md:text-8xl font-serif leading-tight">
            Glory
            <br />
            Bridals
          </h1>

          <p className="mt-4 text-lg tracking-wide">
            Timeless Elegance for Your Special Day
          </p>
        </div>
      </section>

      {/* 🧵 CATEGORY SPLIT SECTION */}
      <section className="grid md:grid-cols-2">
        <div className="relative h-[70vh]">
          <Image src="/gown.jpg" alt="" fill className="object-cover" />
          <div className="absolute bottom-10 left-10 text-white">
            <h2 className="text-4xl font-serif">Bridal Gowns</h2>
          </div>
        </div>

        <div className="relative h-[70vh]">
          <Image src="/lehenga.jpg" alt="" fill className="object-cover" />
          <div className="absolute bottom-10 left-10 text-white">
            <h2 className="text-4xl font-serif">Lehengas</h2>
          </div>
        </div>
      </section>

      {/* 🖤 EDITORIAL TEXT BLOCK */}
      <section className="py-24 px-6 md:px-32 text-center">
        <h2 className="text-5xl font-serif leading-snug">
          Crafted for the Bride
          <br />
          Who Desires Perfection
        </h2>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Discover exclusive bridal collections designed with precision,
          elegance, and timeless beauty.
        </p>
      </section>

      {/* 👗 PRODUCT GRID */}
      <section className="px-6 md:px-20 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p: any) => (
            <div key={p._id} className="group cursor-pointer">
              {p.images?.[0] && (
                <div className="relative h-[400vh] overflow-hidden">
                  <img
                    src={urlFor(p.images[0]).url()}
                    className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                  />
                </div>
              )}

              <div className="mt-4">
                <h3 className="text-lg font-medium">{p.name}</h3>
                <p className="text-gray-500">₹{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🪞 FULL WIDTH IMAGE BREAK */}
      <section className="relative h-[80vh]">
        <Image
          src="/banner.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute bottom-16 left-10 text-white">
          <h2 className="text-5xl font-serif">
            Luxury in Every Thread
          </h2>
        </div>
      </section>

      {/* 📸 GALLERY GRID */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-1">
        {[1,2,3,4,5,6,7,8].map((i) => (
          <div key={i} className="relative h-64">
            <Image
              src={`/gallery${i}.jpg`}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        ))}
      </section>

      {/* 📞 MINIMAL CTA */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-serif">
          Book Your Bridal Experience
        </h2>

        <button className="mt-6 border border-black px-8 py-3 hover:bg-black hover:text-white transition">
          Book Appointment
        </button>
      </section>

    </main>
  )
}
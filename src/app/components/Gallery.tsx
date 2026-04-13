import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"

async function getGallery() {
  return await client.fetch(`*[_type == "gallery"][0]`)
}

export default async function Gallery() {
  const gallery = await getGallery()

  return (
    <section className="py-16 px-6 md:px-20">
      <h2 className="text-3xl mb-10 text-center font-serif">
        Gallery
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {gallery?.images?.map((img: any, i: number) => (
          <div key={i} className="aspect-[3/4] w-full overflow-hidden rounded-lg">
            
            {img?.asset?._ref ? (
              <img
                src={urlFor(img).auto("format").quality(80).url()}
                className="w-full h-full object-cover object-[center_20%] hover:scale-105 transition duration-500"
                alt="gallery"
              />
            ) : (
              <div className="flex items-center justify-center h-full bg-gray-100">
                No Image
              </div>
            )}

          </div>
        ))}
      </div>
    </section>
  )
}
import { client } from "../../sanity/lib/client"
import imageUrlBuilder from "@sanity/image-url"

const builder = imageUrlBuilder(client)
const urlFor = (source: any) => builder.image(source)

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
          <img
            key={i}
            src={urlFor(img).url()}
            className="rounded-lg object-cover w-full h-100 object-[center_20%]"
            alt="gallery"
          />
        ))}
      </div>
    </section>
  )
}
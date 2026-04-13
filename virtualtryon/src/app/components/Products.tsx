import { client } from "../../sanity/lib/client"
import imageUrlBuilder from "@sanity/image-url"

const builder = imageUrlBuilder(client)
const urlFor = (source: any) => builder.image(source)

async function getProducts() {
  return await client.fetch(`*[_type == "product" && featured == true][0...6]`)
}

export default async function Products() {
  const products = await getProducts()

  return (
    <section className="py-16 px-6 md:px-20">
      <h2 className="text-3xl mb-10 text-center font-serif">
        Latest Collection
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((p: any) => (
          <div key={p._id} className="bg-white rounded-xl shadow">
            {p.images?.[0] && (
              <img
                src={urlFor(p.images[0]).url()}
                className="w-full h-100 object-cover object-[center_20%]"
                alt={p.name}
              />
            )}

            <div className="p-4">
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-[#D4AF37]">₹{p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
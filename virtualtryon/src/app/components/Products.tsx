import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"

async function getProducts() {
  return await client.fetch(
    `*[_type == "product" && featured == true][0...6]`
  )
}

export default async function Products() {
  const products = await getProducts()

  return (
    <section className="py-16 px-6 md:px-20">
      <h2 className="text-3xl mb-10 text-center font-serif">
        Latest Collection
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {products?.map((p: any) => (
          <div key={p._id} className="bg-white rounded-xl shadow overflow-hidden">

            {/* Image */}
            <div className="aspect-[3/4] w-full overflow-hidden">
              {p.images?.[0]?.asset?._ref ? (
                <img
                  src={urlFor(p.images[0])
                    .auto("format")
                    .quality(80)
                    .url()}
                  className="w-full h-full object-cover object-[center_20%] hover:scale-105 transition duration-500"
                  alt={p.name}
                />
              ) : (
                <div className="flex items-center justify-center h-full bg-gray-100">
                  No Image
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <p className="text-[#D4AF37] mt-1">₹{p.price}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}
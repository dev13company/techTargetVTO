const categories = [
  "Bridal Gowns",
  "Lehengas",
  "Sarees",
  "Dresses",
]

export default function Categories() {
  return (
    <section className="py-16 px-6 md:px-20">
      <h2 className="text-3xl mb-10 text-center font-serif">
        Our Collections
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat}
            className="bg-white rounded-xl p-6 text-center shadow hover:scale-105 transition"
          >
            {cat}
          </div>
        ))}
      </div>
    </section>
  )
}
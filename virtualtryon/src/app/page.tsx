import Hero from "./components/Hero"
import Categories from "./components/Categories"
import Products from "./components/Products"
import Gallery from "./components/Gallery"

export default function Home() {
  return (
    <main className="bg-[#F8F5F2] text-black">
      <Hero />
      <Categories/>
      <Products />
      <Gallery />
    </main>
  )
}
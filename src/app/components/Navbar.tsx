"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Wedding Gowns", href: "/category/gowns" },
    { name: "Wedding Sarees", href: "/category/sarees" },
    { name: "Sale", href: "/sale" },
    { name: "Contact", href: "/contact" },
    { name: "Shop", href: "/shop" },
    { name: "Our Story", href: "/about" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white text-black shadow-sm"
          : "bg-transparent text-[#F8F5F2]"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 py-6">

        {/* LEFT: Brand */}
        <Link
          href="/"
          className={`leading-none tracking-wide transition-all duration-300 ${
            scrolled ? "text-[24px]" : "text-[32px]"
          }`}
        >
          Glory Bridals
        </Link>

        {/* RIGHT: Navigation */}
        <div className="hidden xl:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative group leading-none tracking-wide transition-all duration-300 ${
                scrolled ? "text-[18px]" : "text-[24px]"
              }`}
            >
              {item.name}

              {/* Elegant underline */}
              <span
                className={`absolute left-0 -bottom-2 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                  scrolled ? "bg-black" : "bg-[#F8F5F2]"
                }`}
              ></span>
            </Link>
          ))}
        </div>

      </nav>
    </header>
  )
}
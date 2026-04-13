import "./globals.css"
import Navbar from "./components/Navbar"
import { Cinzel } from "next/font/google"

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["700"], // Bold
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cinzel.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
import NavLayout from "@/components/dynamic/NavLayout"
import Content from "@/components/static/Content/Content"
import Hero from "@/components/static/Hero/Hero"
import Footer from "@/components/static/Footer"

export default function Home() {
  return (
    <div className="text-white relative overflow-x-hidden">
      <NavLayout />
      <Hero />
      <Content />
      <Footer />
    </div>

  )
}

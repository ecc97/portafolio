import Header from "@/components/Header/Header"
import HeroSection from "@/components/HeroSection"
import Footer from "@/components/Footer"


export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col h-screen w-full">
        <HeroSection />
      </main>
      <Footer />
    </>
  )
}

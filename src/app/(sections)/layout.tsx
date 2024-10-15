import Header from "@/components/Header/Header"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"

interface IProps {
  children: React.ReactNode
}

export default function layout({ children }: IProps) {

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

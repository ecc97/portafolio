import Header from "@/components/Header/Header"
import HeroSection from "@/components/HeroSection/HeroSection"
import Footer from "@/components/Footer/Footer"
import styles from "./styles/page.module.css"


export default function Home() {
  return (
    <>
      <Header />
      <main className={`w-full flex-grow ${styles.mainContainer}`}>
        <HeroSection />
      </main>
      <Footer />
    </>
  )
}
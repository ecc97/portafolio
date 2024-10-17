import Header from "@/components/Header/Header"
import HeroSection from "@/components/HeroSection/HeroSection"
import Footer from "@/components/Footer"
import styles from "./page.module.css"


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
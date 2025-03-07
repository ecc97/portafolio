import Header from "@/components/Header/Header"

import Footer from "@/components/Footer/Footer"


interface IProps {
  children: React.ReactNode
}

export default function layout({ children }: IProps) {

  return (
    <>
      <Header />
      <main className="w-full flex-grow">
        {children}
      </main>
      <Footer />
    </>
  )
}

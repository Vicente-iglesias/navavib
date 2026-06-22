import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { ScrollVideo } from './components/sections/ScrollVideo'
import { Services } from './components/sections/Services'
import { Process } from './components/sections/Process'
import { Work } from './components/sections/Work'
import { CTA } from './components/sections/CTA'
import { useLenis } from './hooks/useLenis'

export default function App() {
  useLenis()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ScrollVideo />
        <Services />
        <Process />
        <Work />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

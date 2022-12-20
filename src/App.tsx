import { About } from "./components/About"
import { Brands } from "./components/Brands"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Portfolio } from "./components/Portfolio"
import { Services } from "./components/Services"
import { Skills } from "./components/Skills"
import { Testimonials } from "./components/Testimonials"

function App() {
  return (
    <div className='bg-white relative' style={{ height: '2000px' }}>
      <Header />
      <Hero />
      <Brands />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

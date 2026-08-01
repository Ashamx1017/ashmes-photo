import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Photography from './components/Photography'
import Pricing from './components/Pricing'
import Works from './components/Works'
import Social from './components/Social'
import Travel from './components/Travel'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Photography />
        <Pricing />
        <Works />
        <Social />
        <Travel />
        <Contact />
      </main>
    </>
  )
}

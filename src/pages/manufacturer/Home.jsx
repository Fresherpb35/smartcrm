import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import BusinessTypes from '../../components/BusinessTypes'
import Features from '../../components/Features'
import Footer from '../../components/Footer'
import FinalCTA from '../../components/sections/FinalCTA'

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <BusinessTypes />
      <Features />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default Home
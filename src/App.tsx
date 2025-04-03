import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import ServicesSection from './Components/Services'
import AboutUsSection from './Components/AboutUs'
import ContactSection from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50">
      <Navbar />
      <div>
        <Hero />
      </div>
      <div className="-mt-0">
        <ServicesSection />
      </div>
      <div className="-mt-0">
        <AboutUsSection />
      </div>
      <div className="-mt-0">
        <ContactSection />
      </div>
      <Footer />
    </div>
  )
}

export default App
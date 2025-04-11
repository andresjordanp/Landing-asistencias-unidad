import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import ServicesSection from './Components/Services';
import AboutUsSection from './Components/AboutUs';
import ContactSection from './Components/Contact';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';
// Importa las páginas nuevas
import TravelAssistance from './Components/ServicesDetails/TravelAssistance';
import HomeAssistance from './Components/ServicesDetails/HomeAssistance';
import LegalAssistance from './Components/ServicesDetails/LegalAssistance';

// Componente con la estructura de la página principal
const MainPage: React.FC = () => (
  <div className="bg-gradient-to-br from-white to-gray-50 overflow-hidden">
    <Hero />
    <div className="mb-16 md:mb-0">
      <ServicesSection />
    </div>
    <div className="mb-16 md:mb-0">
      <AboutUsSection />
    </div>
    <div className="mb-16 md:mb-0">
      <ContactSection />
    </div>
  </div>
);


// Layout que muestra siempre el Navbar y Footer
const Layout: React.FC = () => (
  <>
    <Navbar />
    {/* Agregamos un contenedor con padding-top para que el contenido no quede tapado por el navbar */}
    <div className="pt-[80px]">
      <Outlet />
    </div>
    <Footer />
  </>
);

function App() {
  
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          {/* Página principal */}
          <Route path="/" element={<MainPage />} />

          {/* Rutas para cada servicio */}
          <Route path="/asistencia-viajes" element={<TravelAssistance />} />
          <Route path="/asistencia-hogar" element={<HomeAssistance />} />
          <Route path="/asistencia-legal" element={<LegalAssistance />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

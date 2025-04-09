import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/Logo-Unidad-Asistencias.png";
import { scrollWithOffset } from "../lib/scrollWithOffset"; // ajustá si está en otra ruta

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Enlaces que se refieren a secciones de la página principal
  const navItems = [
    { label: "Inicio", to: "/#inicio" },
    { label: "Servicios", to: "/#servicios" },
    { label: "Nosotros", to: "/#nosotros" },
    { label: "Contacto", to: "/#contacto" },
  ];

  return (
    <nav className="bg-[#1D1F3C] shadow-md fixed w-full top-0 left-0 z-50 rounded-b-3xl">
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <HashLink
          smooth
          to="/#inicio"
          scroll={scrollWithOffset}
          className="flex items-center space-x-2"
        >
          <img src={logo} alt="Logo" className="h-16 w-auto md:h-20" />
        </HashLink>

        {/* Enlaces de navegación para escritorio */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex space-x-14">
            {navItems.map((item, index) => (
              <HashLink
                key={index}
                smooth
                to={item.to}
                scroll={scrollWithOffset}
                className="text-white hover:text-[#FD8412] transition-all"
              >
                {item.label}
              </HashLink>
            ))}
          </div>
        </div>

        {/* Botón de asistencia */}
        <div className="hidden md:block">
          <HashLink
            smooth
            to="/#contacto"
            scroll={scrollWithOffset}
            className="bg-[#fd8412] text-white px-6 py-3 text-lg font-semibold rounded-full hover:bg-[#e57c00] transition-all"
          >
            Solicitar asistencia
          </HashLink>
        </div>

        {/* Botón hamburguesa para móviles */}
        <button className="md:hidden ml-auto text-white" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-[#1D1F3C] shadow-md absolute w-full left-0 top-[80px] py-4 rounded-b-3xl"
        >
          <div className="flex flex-col items-center space-y-4">
            {navItems.map((item, index) => (
              <HashLink
                key={index}
                smooth
                to={item.to}
                scroll={scrollWithOffset}
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-[#FD8412] transition-all"
              >
                {item.label}
              </HashLink>
            ))}
            {/* Botón móvil de asistencia */}
            <HashLink
              smooth
              to="/#trabaja"
              scroll={scrollWithOffset}
              onClick={() => setIsOpen(false)}
              className="bg-[#fd8412] text-white px-5 py-2 rounded-full hover:bg-[#e57c00] transition-all"
            >
              Solicitar asistencia
            </HashLink>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // Iconos para el menú hamburguesa
import logo from "../assets/Logo-Unidad-seguros.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#1D1F3C] shadow-md fixed w-full top-0 left-0 z-50 rounded-b-3xl">
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-16 w-auto md:h-20" />
        </a>

        {/* Enlaces de navegación desktop */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex space-x-14">
            {["Inicio", "Servicios", "Nosotros", "Contacto"].map((item, index) => (
              <a
                key={index}
                href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
                className="text-white hover:text-[#FD8412] transition-all"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Botón de asistencia */}
        <div className="hidden md:block">
          <a
            href="#contacto"
            className="bg-[#fd8412] text-white px-6 py-3 text-lg font-semibold rounded-full hover:bg-[#e57c00] transition-all"
          >
            Solicitar asistencia
          </a>
        </div>

        {/* Botón hamburguesa en móviles */}
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
            {["Inicio", "Servicios", "Nosotros", "Contacto"].map((item, index) => (
              <a
                key={index}
                href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
                className="text-white hover:text-[#FD8412] transition-all"
              >
                {item}
              </a>
            ))}
            {/* Botón móvil */}
            <a
              href="#trabaja"
              className="bg-[#fd8412] text-white px-5 py-2 rounded-full hover:bg-[#e57c00] transition-all"
            >
              Solicitar asistencia
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

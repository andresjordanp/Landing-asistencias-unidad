import React from "react";
import logo from "../assets/Logo-Unidad-seguros.png";
import { Mail, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1D1F3C] text-white py-10 relative overflow-hidden">
      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Unidad Asistencias" className="h-16 md:h-20" />
        </div>

        {/* Enlaces de navegación horizontales */}
        <div className="flex flex-wrap justify-center md:justify-center gap-6 text-sm font-medium">
          <a href="#inicio" className="hover:text-[#FD8412] transition-all">Inicio</a>
          <a href="#servicios" className="hover:text-[#FD8412] transition-all">Servicios</a>
          <a href="#nosotros" className="hover:text-[#FD8412] transition-all">Sobre Nosotros</a>
          <a href="#contacto" className="hover:text-[#FD8412] transition-all">Contacto</a>
        </div>

        {/* Datos de contacto con íconos */}
        <div className="text-sm text-gray-300 flex flex-col md:items-end gap-4">
        <div className="flex flex-col items-start text-left gap-4">
            <div className="flex items-center gap-3">
            <Mail size={18} className="text-[#FD8412]" />
            <span>contacto@unidadasistencias.com</span>
            </div>
            <div className="flex items-center gap-3">
            <Phone size={18} className="text-[#FD8412]" />
            <span>+56 9 1234 5678</span>
            </div>
            </div>
         </div>
        </div>
        
      {/* Línea inferior */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm px-6">
        © {new Date().getFullYear()} Unidad Asistencias. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;

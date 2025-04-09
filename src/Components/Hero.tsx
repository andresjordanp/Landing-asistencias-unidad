import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative bg-gradient-to-br from-white to-gray-50 overflow-visible pt-[80px]"
      style={{ minHeight: "100vh" }}
    >
      {/* Círculo azul */}
      <motion.div
        className="absolute top-[-110px] md:top-[-160px] left-[-200px] w-78 h-78 md:w-[30rem] md:h-[30rem] bg-[#1D1F3C] rounded-full"
        initial={{ scale: 0.9, opacity: 0.95 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      {/* Círculo naranja 
      <motion.div
        className="absolute bottom-[-80px] right-[-80px] w-64 h-64 md:w-96 md:h-96 bg-[#FD8412] rounded-full"
        initial={{ scale: 0.9, opacity: 0.95 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
      />
      */}

      {/* Contenedor para centrar el contenido verticalmente */}
      <div
        className="relative z-10 container mx-auto px-6"
        style={{ height: "calc(100vh - 80px)" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between h-full">
          {/* Columna Izquierda: Texto y CTA */}
          <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left md:pl-12 mt-44 md:mt-0">
            <motion.h1
              className="text-3xl md:text-4xl font-bold mb-4 text-[#1D1F3C]"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Asistencia inmediata cuando más lo necesitas
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-6 text-gray-700 max-w-lg mx-auto md:mx-0"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              Soluciones integrales para viajes, asistencia legal y cuidado del hogar, respaldadas por expertos.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.a
                href="#servicios"
                className="bg-[#FD8412] text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-[#e57c00] transition-all"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              >
                Conoce nuestros servicios
              </motion.a>
              <motion.a
                href="#contacto"
                className="bg-[#1D1F3C] text-white py-3 px-6 rounded-full text-lg font-semibold transition-all 
                           md:border-2 md:border-[#1D1F3C] md:bg-transparent md:text-[#1D1F3C] md:hover:bg-[#1D1F3C] md:hover:text-white"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              >
                Contáctanos
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

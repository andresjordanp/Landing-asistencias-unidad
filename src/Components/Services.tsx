import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ServicesSection: React.FC = () => {
  return (
    <section
      id="servicios"
      className="relative bg-gradient-to-br from-white to-gray-50 overflow-visible min-h-screen flex items-center"
    >
      {/* Fondo decorativo azul 
      <motion.div
        className="absolute top-[-20px] md:top-[-80px] left-[-80px] w-64 h-64 md:w-96 md:h-96 bg-[#1D1F3C] rounded-full"
        initial={{ scale: 0.9, opacity: 0.95 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      */}

      {/* Fondo decorativo naranja 
      <motion.div
        className="absolute bottom-[-80px] right-[-80px] w-64 h-64 md:w-96 md:h-96 bg-[#FD8412] rounded-full"
        initial={{ scale: 0.9, opacity: 0.95 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
      />
      */}

      {/* Círculo naranja (el que se extiende hacia hero) */}
      <motion.div
        className="absolute top-[-180px] right-[-240px] w-78 h-78 md:w-[30rem] md:h-[30rem] bg-[#FD8412] rounded-full z-0"
        initial={{ scale: 0.9, opacity: 0.95 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
      />


      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-6 w-full">
        <div className="flex flex-col items-center justify-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-[#1D1F3C] mb-6 mt-[-60px]"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Nuestros Servicios
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
            {/* Card Asistencia de Viajes */}
            <Link to="/asistencia-viajes">
              <motion.div
                className="bg-gray-50 p-6 rounded-3xl shadow-lg border border-gray-200 transition duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-[#1D1F3C] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✈️</span>
                </div>
                <h3 className="text-xl font-semibold text-[#1D1F3C] mb-2 text-center">
                  Asistencia de Viajes
                </h3>
                <p className="text-gray-600 text-center">
                  Brindamos apoyo y seguridad durante tus viajes para que disfrutes cada uno sin preocupaciones.
                </p>
              </motion.div>
            </Link>

            {/* Card Asistencia Hogar */}
            <Link to="/asistencia-hogar">
              <motion.div
                className="bg-gray-50 p-6 rounded-3xl shadow-lg border border-gray-200 transition duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-[#FD8412] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-semibold text-[#1D1F3C] mb-2 text-center">
                  Asistencia de Hogar
                </h3>
                <p className="text-gray-600 text-center">
                  Protegemos tu hogar con soluciones rápidas y efectivas para que vivas con tranquilidad.
                </p>
              </motion.div>
            </Link>

            {/* Card Asistencia Legal */}
            <Link to="/asistencia-legal">
              <motion.div
                className="bg-gray-50 p-6 rounded-3xl shadow-lg border border-gray-200 transition duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-[#1D1F3C] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚖️</span>
                </div>
                <h3 className="text-xl font-semibold text-[#1D1F3C] mb-2 text-center">
                  Asistencia Legal
                </h3>
                <p className="text-gray-600 text-center">
                  Ofrecemos asesoría legal especializada para proteger tus derechos y resolver conflictos eficientemente.
                </p>
              </motion.div>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

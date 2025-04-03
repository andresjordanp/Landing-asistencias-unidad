import React from "react";
import { motion } from "framer-motion";

const AboutUsSection: React.FC = () => {
  return (
    <section
      id="nosotros"
      className="relative bg-gradient-to-br from-white to-gray-50 overflow-hidden min-h-screen flex items-center"
    >
      {/* Círculo azul ajustado para móviles */}
      <motion.div
        className="absolute top-[-20px] md:top-[-80px] left-[-80px] w-64 h-64 md:w-96 md:h-96 bg-[#1D1F3C] rounded-full"
        initial={{ scale: 0.9, opacity: 0.95 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      {/* Círculo naranja */}
      <motion.div
        className="absolute bottom-[-80px] right-[-80px] w-64 h-64 md:w-96 md:h-96 bg-[#FD8412] rounded-full"
        initial={{ scale: 0.9, opacity: 0.95 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
      />

      {/* Contenido centrado */}
      <div className="relative z-10 container mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left">
          {/* Texto */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D1F3C] mb-6">
              Sobre Nosotros
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              En <span className="font-semibold text-[#FD8412]">Unidad Asistencias</span> trabajamos para brindar soluciones integrales cuando más las necesitas. Somos un equipo comprometido con tu bienestar, ofreciendo servicios de asistencia en el hogar, legal y durante tus viajes. Nuestra misión es darte tranquilidad en cada momento.
            </p>
          </motion.div>

          {/* Ilustración o iconografía */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src="https://via.placeholder.com/400x300?text=Nosotros"
              alt="Ilustración sobre nosotros"
              className="w-full max-w-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

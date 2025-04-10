import React from 'react';
import { motion } from 'framer-motion';
import TravelAssistanceImage from '../../assets/TravelAssistanceImage.webp'; 
import { HashLink } from 'react-router-hash-link';

const TravelAssistance: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-white to-gray-50 overflow-hidden min-h-screen px-4 py-10">
      {/* Círculo azul decorativo */}
      <motion.div
                className="
          absolute 
          top-[-24vw] left-[-24vw] w-[60vw] h-[60vw] 
          md:top-[-16vw] md:left-[-20vw] md:w-[32vw] md:h-[32vw] 
          bg-[#1D1F3C] rounded-full
        "
        initial={{ scale: 0.9, opacity: 0.95 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Círculo naranja decorativo */}
      <motion.div
        className="
        absolute 
        bottom-[-24vw] right-[-24vw] w-[60vw] h-[60vw] 
        md:bottom-[-16vw] md:right-[-20vw] md:w-[32vw] md:h-[32vw] 
        bg-[#FD8412] rounded-full
      "

        initial={{ scale: 0.9, opacity: 0.95 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
      />

      {/* Contenido */}
      <div className="relative z-10 container mx-auto">
        <div className="flex flex-col items-center justify-center gap-10 pt-10 pb-20 text-center">


          {/* Imagen */}
          <motion.div
            className="w-full flex justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <img
              src={TravelAssistanceImage}
              alt="Asistencia en Viajes"
              className="w-full max-w-md h-auto aspect-video rounded-xl shadow-md"
            />
          </motion.div>

          {/* Texto */}
          <div className="w-full max-w-3xl bg-white/90 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-md z-10">
            <motion.h1
              className="text-3xl font-bold text-[#1D1F3C] mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            >
              Asistencia en Viajes 
            </motion.h1>

            <motion.p
              className="text-lg text-gray-700 mb-6 text-justify"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            >
              Nuestro servicio de Asistencia en Viajes está diseñado para brindarte apoyo en cualquier parte del mundo. Desde emergencias médicas hasta inconvenientes con equipaje o vuelos, te acompañamos para que disfrutes tu viaje con total tranquilidad.
            </motion.p>

            <motion.div
              className="text-lg text-gray-700 text-justify"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            >
              <p className="mb-4">Algunos beneficios incluyen:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong className="text-[#FD8412]">Emergencias médicas:</strong> Cobertura internacional y atención inmediata.
                </li>
                <li>
                  <strong className="text-[#FD8412]">Asistencia legal y traductores:</strong> En caso de inconvenientes legales o barreras idiomáticas.
                </li>
                <li>
                  <strong className="text-[#FD8412]">Pérdida de equipaje:</strong> Gestión y compensación rápida de objetos extraviados.
                </li>
              </ul>
            </motion.div>
            {/* Botón: Solicitar asistencia (naranja) */}
            <motion.div
              className="mt-8 flex justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
            >
            <HashLink
              smooth
              to="/#contacto"
              className="bg-[#FD8412] text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-[#e57c00] transition-all"
            >
              Solicitar asistencia
            </HashLink>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelAssistance;

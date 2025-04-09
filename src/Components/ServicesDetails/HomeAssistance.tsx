import React from 'react';
import { motion } from 'framer-motion';
import HomeAssistanceImage from '../../assets/HomeAssitanceimage.webp';

const HomeAssistance: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-white to-gray-50 overflow-hidden min-h-screen px-4 py-10">
      {/* Círculo azul */}
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
      {/* Círculo naranja animado */}
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

      {/* Contenido centrado y por encima de los círculos */}
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
              src={HomeAssistanceImage}
              alt="Asistencia Hogar"
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
              Asistencia de Hogar
            </motion.h1>

            <motion.p
              className="text-lg text-gray-700 mb-6 text-justify"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            >
              Asistencia Hogar es un servicio integral diseñado para ofrecer apoyo a los hogares en situaciones imprevistas o de emergencia. Este tipo de asistencia cubre una amplia gama de necesidades, desde reparaciones urgentes en el hogar hasta la solución de problemas cotidianos, con el objetivo de garantizar la seguridad, comodidad y funcionalidad del entorno familiar.
            </motion.p>

            <motion.div
              className="text-lg text-gray-700 text-justify"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            >
              <p className="mb-4">Entre los servicios típicos de Asistencia Hogar se incluyen:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong className="text-[#FD8412]">Reparaciones domésticas:</strong> Servicios de plomería, electricidad, cerrajería, reparación de electrodomésticos, entre otros.
                </li>
                <li>
                  <strong className="text-[#FD8412]">Mantenimiento preventivo:</strong> Inspección y mantenimiento de sistemas esenciales como calefacción, aire acondicionado, fontanería, entre otros.
                </li>
                <li>
                  <strong className="text-[#FD8412]">Emergencias en el hogar:</strong> Atención inmediata ante daños causados por incidentes como filtraciones, fallos eléctricos o problemas en las instalaciones de gas.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAssistance;

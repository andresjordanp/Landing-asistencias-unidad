import React from 'react';
import { motion } from 'framer-motion';
import LegalAssistanceImage from '../../assets/LegalAssistanceImage.webp';

const LegalAssistance: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-white to-gray-50 overflow-hidden min-h-screen px-4 py-10">
      {/* Círculo azul animado */}
      <motion.div
          className="
          absolute 
          top-[-24vw] left-[-24vw] w-[60vw] h-[60vw] 
          md:top-[-16vw] md:left-[-20vw] md:w-[32vw] md:h-[32vw] 
          bg-[#1D1F3C] rounded-full
        "
        initial={{ scale: 0.9, opacity: 0.95 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
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
        transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
      />

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
              src= {LegalAssistanceImage}
              alt="Asistencia Legal"
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
              Asistencia Legal
            </motion.h1>

            <motion.p
              className="text-lg text-gray-700 mb-6 text-justify"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            >
              Asistencia Legal es un servicio que proporciona apoyo jurídico y asesoramiento a individuos o empresas en situaciones que requieran asistencia legal, tanto de forma preventiva como en casos de emergencia. Su objetivo es garantizar que los clientes reciban orientación y soluciones adecuadas a sus necesidades legales, con el respaldo de profesionales calificados que los acompañan durante todo el proceso.
            </motion.p>

            <motion.div
              className="text-lg text-gray-700 text-justify"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            >
              <p className="mb-4">Los servicios de Asistencia Legal pueden incluir:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong className="text-[#FD8412]">Consultoría y asesoramiento jurídico:</strong> Orientación legal sobre derechos, responsabilidades y opciones legales en diversas situaciones.
                </li>
                <li>
                  <strong className="text-[#FD8412]">Redacción de documentos legales:</strong> Elaboración y revisión de contratos, testamentos, acuerdos, y otros documentos legales.
                </li>
                <li>
                  <strong className="text-[#FD8412]">Asistencia en la resolución de conflictos:</strong> Mediación y resolución de disputas legales, tanto en el ámbito civil, comercial, familiar, laboral, entre otros.
                </li>
                <li>
                  <strong className="text-[#FD8412]">Orientación en procesos legales internacionales:</strong> Asesoría en situaciones legales que impliquen diferentes jurisdicciones o leyes extranjeras.
                </li>
              </ul>
              <p className="mt-4">
                La Asistencia Legal busca brindar seguridad y tranquilidad a las personas y empresas, ayudándolas a tomar decisiones informadas y a resolver sus problemas legales de manera eficiente y efectiva.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalAssistance;

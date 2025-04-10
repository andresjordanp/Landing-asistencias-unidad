import React from "react";
import { motion } from "framer-motion";

const AboutUsSection: React.FC = () => {
  return (
    <section
      id="nosotros"
      className="relative bg-gradient-to-br from-white to-gray-50 overflow-visible min-h-screen flex items-center"
    >
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

      {/* Círculo naranja 
      <motion.div
        className="absolute bottom-[-80px] right-[-80px] w-64 h-64 md:w-96 md:h-96 bg-[#FD8412] rounded-full"
        initial={{ scale: 0.9, opacity: 0.95 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
      />
      */}

      {/* Contenedor que centra el contenido (solo en móviles) */}
      <div className="relative z-10 container mx-auto px-6 w-full h-full flex items-center justify-center">
        <motion.div
          className="max-w-3xl mx-auto bg-white/90 p-6 pb-16 rounded-3xl shadow-md border border-gray-200 text-justify text-black text-base leading-relaxed md:bg-transparent md:p-0 md:rounded-none md:shadow-none md:border-0 md:text-lg md:pb-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#1D1F3C] mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            ¿Quiénes somos?
          </motion.h2>
          <p>
            Unidad Asistencias es una compañía del holding{" "}
            <strong className="text-[#FD8412]">UNIDAD</strong>, un grupo empresarial consolidado que integra a líderes en diversas áreas como{" "}
            <strong className="text-[#FD8412]">Unidad Corredora de Seguros</strong>,{" "}
            <strong className="text-[#FD8412]">Unidad Crédito Automotriz</strong> y{" "}
            <strong className="text-[#FD8412]">Unidad Leasing Habitacional</strong>. Este enfoque multidisciplinario nos permite crear soluciones innovadoras y adaptadas a las necesidades de nuestros clientes, brindando un servicio integral de calidad.
          </p>
          <br />
          <p>
            En Unidad Asistencias, nos especializamos en ofrecer servicios de{" "}
            <strong className="text-[#FD8412]">Hogar</strong>,{" "}
            <strong className="text-[#FD8412]">Asistencia en Viajes</strong> y{" "}
            <strong className="text-[#FD8412]">Asesoría Legal</strong>. Nuestro enfoque está orientado tanto a empresas (B2B) como a modelos de negocio híbridos (B2B2C), con la misión de proporcionar tranquilidad y respaldo a nuestros clientes en situaciones que requieren atención y cuidado especializado.
          </p>
          <br />
          <p>
            Con un equipo comprometido y altamente capacitado, trabajamos para entregar soluciones efectivas, rápidas y cercanas, con un alto grado de empatía. Entendemos que cada cliente tiene necesidades únicas, y nos esforzamos por ofrecer un servicio personalizado que se adapte a sus expectativas. En Unidad Asistencias, nos enorgullece poder contribuir a la seguridad y bienestar de nuestros clientes, ofreciéndoles el apoyo necesario en momentos clave de su vida personal o profesional.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;

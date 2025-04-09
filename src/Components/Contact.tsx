import React from "react";
import { motion } from "framer-motion";

const ContactSection: React.FC = () => {
  return (
    <section
      id="contacto"
      className="relative bg-gradient-to-br from-white to-gray-50 overflow-visible min-h-screen flex items-center"
    >
      {/* Círculo azul 
      <motion.div
        className="absolute top-[-20px] md:top-[-80px] left-[-80px] w-64 h-64 md:w-96 md:h-96 bg-[#1D1F3C] rounded-full"
        initial={{ scale: 0.9, opacity: 0.95 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      */}

      {/* Círculo naranja (el que se extiende hacia about us) */}
      <motion.div
                  className="
            absolute 
            top-[-20vw] right-[-20vw] w-[50vw] h-[50vw] 
            md:top-[-16vw] md:right-[-20vw] md:w-[32vw] md:h-[32vw] 
            bg-[#FD8412] rounded-full z-0
          "
        initial={{ scale: 0.9, opacity: 0.95 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
      />

      

      {/* Contenido unificado solo en móvil */}
      <div className="relative z-10 container mx-auto px-6 w-full">
        <motion.div
          className="max-w-3xl mx-auto bg-white/90 md:bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-md md:shadow-xl border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Título y descripción */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D1F3C] mb-4">
              Contáctanos
            </h2>
            <p className="text-gray-700 text-lg">
              ¿Tienes alguna duda o necesitas asistencia? Rellena el siguiente formulario y nos pondremos en contacto contigo.
            </p>
          </div>

<form onSubmit={(e) => e.preventDefault()}>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    <input
      type="text"
      placeholder="Nombre"
      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FD8412]"
      required
    />
    <input
      type="text"
      placeholder="Apellido"
      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FD8412]"
      required
    />
    <input
      type="email"
      placeholder="Correo electrónico"
      className="w-full md:col-span-2 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FD8412]"
      required
    />
  </div>

  {/* Select de asunto */}
  <div className="mb-6">
    <select
      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FD8412]"
      required
      defaultValue=""
    >
      <option value="" disabled>Selecciona un asunto</option>
      <option value="hogar">Asistencia hogar</option>
      <option value="legal">Asistencia legal</option>
      <option value="viajes">Asistencia viajes</option>
      <option value="otro">Otro</option>
    </select>
  </div>

  <textarea
    placeholder="Escribe tu mensaje aquí..."
    rows={5}
    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FD8412] mb-6"
    required
  />

  <div className="text-center">
    <button
      type="submit"
      className="bg-[#1D1F3C] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#151630] transition-all"
    >
      Enviar mensaje
    </button>
  </div>
</form>

        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

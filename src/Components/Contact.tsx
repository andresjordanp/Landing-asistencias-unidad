import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactSection: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_n3exgnk",         // 🔁 Tu Service ID
        "template_if370vb",        // 🔁 Tu Template ID
        form.current,
        "SjcCC6nnOJKR5FrUA"          // 🔁 Tu Public Key
      )
      .then(
        () => {
          alert("✅ Mensaje enviado con éxito");
          form.current?.reset();
        },
        (error) => {
          console.error(error.text);
          alert("❌ Hubo un error al enviar el mensaje.");
        }
      );
  };

  return (
    <section
      id="contacto"
      className="relative bg-gradient-to-br from-white to-gray-50 overflow-visible min-h-screen flex items-center"
    >
      {/* Círculo naranja */}
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

      <div className="relative z-10 container mx-auto px-6 w-full">
        <motion.div
          className="max-w-3xl mx-auto bg-white/90 md:bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-md md:shadow-xl border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D1F3C] mb-4">
              Contáctanos
            </h2>
            <p className="text-gray-700 text-lg">
              ¿Tienes alguna duda o necesitas asistencia? Rellena el siguiente formulario y nos pondremos en contacto contigo.
            </p>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="from_name"
                placeholder="Nombre"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FD8412]"
                required
              />
              <input
                type="text"
                name="from_lastname"
                placeholder="Apellido"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FD8412]"
                required
              />
              <input
                type="email"
                name="from_email"
                placeholder="Correo electrónico"
                className="w-full md:col-span-2 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FD8412]"
                required
              />
            </div>

            <div className="mb-6">
              <select
                name="subject"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FD8412]"
                required
                defaultValue=""
              >
                <option value="" disabled>Selecciona un asunto</option>
                <option value="Asistencia hogar">Asistencia hogar</option>
                <option value="Asistencia legal">Asistencia legal</option>
                <option value="Asistencia viajes">Asistencia viajes</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            <textarea
              name="message"
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

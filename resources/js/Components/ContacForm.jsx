export default function ContactForm() {
  return (
    <section id="contact" className="py-16 bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Contáctanos</h2>
        <form className="grid gap-4 md:grid-cols-2">
          <input className="p-3 border rounded" type="text" placeholder="Nombre" required />
          <input className="p-3 border rounded" type="email" placeholder="Correo" required />
          <textarea className="md:col-span-2 p-3 border rounded" placeholder="Tu mensaje..." rows="5" required />
          <button className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

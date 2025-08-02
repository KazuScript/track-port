const service = [
  { title: "Exportación Marítima", icon: "🚢", description: "Envío eficiente por vía marítima." },
  { title: "Logística", icon: "📦", description: "Gestión integral de transporte." },
  { title: "Seguimiento", icon: "📍", description: "Monitoreo de carga en tiempo real." }
];

export default function Service() {
  return (
    <section id="service" className="py-16 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {service.map((s, i) => (
            <div key={i} className="bg-white p-6 rounded shadow text-center">
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

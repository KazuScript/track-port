export default function Hero() {
  return (
    <section className="bg-[url('/images/hero.jpg')] bg-cover bg-center h-[80vh] flex items-center justify-center text-white text-center">
      <div className="bg-black bg-opacity-50 p-8 rounded">
        <h1 className="text-4xl md:text-5xl font-bold">Conectamos tu carga con el mundo</h1>
        <p className="mt-4 text-lg">Servicio seguro y confiable de exportación</p>
        <a href="#track" className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded">
          Rastrear despacho
        </a>
      </div>
    </section>
  );
}

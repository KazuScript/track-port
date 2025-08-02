export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="text-xl font-semibold mb-2">ExportadoraX</h4>
          <p className="text-sm">Conectamos productos con el mundo.</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2">Contacto</h4>
          <p className="text-sm">📍 Santiago, Chile</p>
          <p className="text-sm">📞 +56 9 1234 5678</p>
          <p className="text-sm">✉️ contacto@exportadorax.com</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2">Redes Sociales</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline text-sm">Facebook</a></li>
            <li><a href="#" className="hover:underline text-sm">Instagram</a></li>
            <li><a href="#" className="hover:underline text-sm">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-900 text-center text-sm py-4">
        © {new Date().getFullYear()} ExportadoraX. Todos los derechos reservados.
      </div>
    </footer>
  );
}

import { Link } from '@inertiajs/react';

export default function Nav() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          ExportadoraX
        </Link>
        <nav className="space-x-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-600 transition">Inicio</Link>
          <Link href="#service" className="hover:text-blue-600 transition">Servicios</Link>
          <Link href="#track" className="hover:text-blue-600 transition">Buscar despacho</Link>
          <Link href="#contact" className="hover:text-blue-600 transition">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}

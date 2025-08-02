import { useState } from 'react';

export default function TrackDispatch() {
  const [code, setCode] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = async () => {
    const response = await axios.get(`/api/despachos/${code}`);
    setResult(response.data);
  };

  return (
    <section id="track" className="py-16 bg-white text-gray-800">
      <div className="max-w-md mx-auto text-center px-4">
        <h2 className="text-2xl font-bold mb-4">Rastrea tu despacho</h2>
        <input
          type="text"
          placeholder="Código de despacho"
          value={code}
          onChange={e => setCode(e.target.value)}
          className="border px-4 py-2 w-full rounded mb-4"
        />
        <button onClick={handleSearch} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Buscar
        </button>
        {result && (
          <div className="mt-6 bg-gray-100 p-4 rounded text-left">
            <p><strong>Estado:</strong> {result.estado}</p>
            <p><strong>Ubicación:</strong> {result.ubicacion}</p>
            <p><strong>Fecha estimada:</strong> {result.fecha_estimada}</p>
          </div>
        )}
      </div>
    </section>
  );
}

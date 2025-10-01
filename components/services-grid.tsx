import { Spotify } from "@/public/spotify";
import { Armchair, Headset, Youtube } from "lucide-react";

const ServicesGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="bg-rose-100 rounded-full w-22 h-22 flex items-center justify-center mb-2">
            <Armchair className="text-rose-500" size={50} />
          </div>
          <h4 className="text-lg font-mono font-semibold mb-2">
            Sesiones personales 1 a 1
          </h4>
          <p className="text-gray-700">Acompañamiento personalizado.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="bg-rose-100 rounded-full w-22 h-22 flex items-center justify-center mb-2">
            <Spotify className="text-rose-500" width={50} height={50} />
          </div>
          <h4 className="text-lg font-mono font-semibold mb-2">
            Escuchame en Spotify
          </h4>
          <p className="text-gray-700">
            Microepisodios sobre ansiedad y bienestar.
          </p>
        </div>
      </div>
      <div className="mt-4 space-y-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="bg-rose-100 rounded-full w-22 h-22 flex items-center justify-center mb-2">
            <Headset className="text-rose-500" size={50} />
          </div>
          <h4 className="text-lg font-mono font-semibold mb-2">
            Sesiones virtuales
          </h4>
          <p className="text-gray-700">
            Sesiones online para que puedas recibir apoyo desde cualquier lugar.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="bg-rose-100 rounded-full w-22 h-22 flex items-center justify-center mb-2">
            <Youtube className="text-rose-500" size={50} />
          </div>
          <h4 className="text-lg font-mono font-semibold mb-2">
            Sígueme en Youtube
          </h4>
          <p className="text-gray-700">
            Videos prácticos con herramientas para sentirte mejor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;

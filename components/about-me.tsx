import { CalendarFold, LaptopMinimal, MedalIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const AboutMe = () => {
  return (
    <div
      className="flex flex-col items-center overflow-hidden max-w-6xl mx-auto px-4 py-16 sm:px-8 sm:py-32 gap-8"
      id="about"
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-8 md:gap-16">
        <div className="flex flex-col gap-y-8 sm:w-1/2">
          <h2 className="text-3xl font-semibold">
            🧠 Psicóloga especializada en ansiedad, estrés y ataques de pánico.
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Desde 2015 acompaño a mujeres de más de 50 países en sesiones
              online. Mi enfoque combina la{" "}
              <span className="font-semibold">
                Terapia Cognitivo-Conductual (TCC)
              </span>
              , basada en evidencia, con una mirada cercana y humana.
            </p>
            <p>
              Más allá de mi formación, me importa escucharte de verdad. Creo en
              crear un espacio profesional pero cálido, sin juicios, donde
              puedas hablar con libertad de lo que estás viviendo.
            </p>
            <p>
              Sé lo difícil que puede ser convivir con la ansiedad, y cada día
              escucho historias como la tuya.
            </p>
            <p>
              Hoy más que nunca,{" "}
              <span className="font-semibold">
                la salud mental requiere ser acompañada con profesionalismo,
                empatía y evidencia
              </span>
              . Eso es lo que vas a encontrar en cada sesión conmigo.
            </p>
          </div>
        </div>
        <div className="sm:w-1/2 relative">
          <p className="flex items-center z-11 text-sm text-gray-600 font-semibold shadow-lg bg-white px-4 py-2 absolute top-5 -left-3 sm:left-10 rounded-full">
            <MedalIcon className="text-rose-300 mr-2" size={24} /> TCC (basado
            en evidencia)
          </p>
          <p className="flex items-center z-11 text-sm text-gray-600 font-semibold shadow-lg bg-white px-4 py-2 absolute top-20 -right-3 sm:right-10 rounded-full">
            Terapia online desde 2015{" "}
            <LaptopMinimal className="text-rose-300 ml-2" size={24} />
          </p>
          <p className="flex items-center text-sm z-11 text-gray-600 font-semibold shadow-lg bg-white px-4 py-2 absolute bottom-20 left-5 sm:left-25 rounded-full">
            <CalendarFold className="text-rose-300 mr-2" size={24} /> 15 años de
            experiencia
          </p>
          <Image
            src="/caro-scotti-conferencia.avif"
            alt="Carolina Scotti | Psicóloga Cognitiva Conductual"
            className="relative z-10 rounded-lg shadow-lg object-cover mx-auto"
            width={400}
            height={400}
          />
          <div className="h-24 w-148 rotate-25  top-40 -right-20 sm:-right-10 z-0 rounded-full bg-gradient-to-r from-rose-300 to-amber-300 absolute opacity-70 mx-auto blur-sm" />
          <div className="h-24 w-148 rotate-25  top-70 -right-20 sm:-right-10 z-0 rounded-full bg-gradient-to-r from-rose-300 to-purple-300 absolute opacity-70 mx-auto" />
        </div>
      </div>
      <Button className="rounded-full py-6 mt-4 w-full sm:w-1/2 md:w-1/3">
        Conoce más sobre mí
      </Button>
    </div>
  );
};

export default AboutMe;

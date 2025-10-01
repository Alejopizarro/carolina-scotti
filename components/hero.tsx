import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex flex-col gap-8 md:flex-row items-center justify-center overflow-hidden py-8 pt-26 sm:py-16 sm:pt-32 px-4 sm:px-8">
      <div className="flex flex-col max-w-2xl tracking-tight px-4 ">
        <h1 className="text-md font-light font-mono text-gray-700 my-4">
          Carolina Scotti | Psicologa especialista en Ansiedad, estrés y ataques
          de panico
        </h1>
        <h2 className="text-5xl font-extrabold z-12 text-gray-950 mb-1 leading-none">
          ¿Sientes qué{" "}
          <span className="text-rose-300 font-serif">la ansiedad</span> esta
          tomando el control de tu vida?
        </h2>
        <p className="font-extralight text-gray-700">-</p>
        <p className="text-lg text-gray-700 font-light mt-1 z-12 max-w-xl">
          Acompaño a mujeres a entender lo que les pasa y a gestionar la
          ansiedad con herramientas basadas en la evidencia y un trato cercano.
        </p>
        <div className="flex flex-col sm:flex-row mt-6 gap-4 max-w-lg">
          <Button variant="outline" className="rounded-full py-6 z-10">
            Conoce mi método
          </Button>
          <Button className="relative z-12 rounded-full py-6 sm:min-w-[210px]">
            Agendar consulta gratuita <ArrowRight />
          </Button>
        </div>
      </div>
      <div className="relative z-10">
        <div className="bg-gray-50/70 border-1 border-white gap-2 px-4 py-2 z-11 rounded-lg shadow-md absolute top-5 lg:top-10 right-55 lg:right-72">
          <p className="font-bold w-max text-4xl flex flex-col">
            + 15
            <span className="font-extralight mt-2 text-gray-900 text-xs">
              años de experiencia
            </span>
          </p>
        </div>
        <div className="bg-gray-50/70 border-1 border-white gap-2 px-4 z-11 py-2 rounded-lg shadow-md absolute bottom-10 left-52 lg:left-72">
          <p className="font-bold w-max text-4xl flex flex-col">
            + 2000
            <span className="font-extralight text-gray-900 mt-2 text-xs">
              sesiones realizadas
            </span>
          </p>
        </div>
        <Image
          src="/caro-hero.avif"
          alt="Carolina Scotti Foto de Perfil | Psicologa especialista en ansiedad"
          className="rounded-full shadow-lg w-92 h-92 relative z-10 object-cover"
          width={400}
          height={400}
          priority
        />
        <div className="h-24 w-148 rotate-25  top-5 sm:top-20 -right-30 z-0 rounded-full bg-gradient-to-r from-rose-300 to-amber-300 absolute opacity-70 mx-auto blur-sm" />
        <div className="h-24 w-148 rotate-25  top-35 sm:top-50 -right-30 z-0 rounded-full bg-gradient-to-r from-rose-300 to-purple-300 absolute opacity-70 mx-auto" />
      </div>
    </div>
  );
};

export default Hero;

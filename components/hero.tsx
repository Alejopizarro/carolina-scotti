import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight, Check } from "lucide-react";

const Hero = () => {
  return (
    <div className="2xl:max-w-8xl overflow-hidden relative px-4 py-8">
      <div className="flex flex-col gap-8 md:flex-row py-8 min-h-[100vh] items-center justify-center">
        <div className="flex flex-col sm:max-w-2xl tracking-tight leading-none">
          <h1 className="text-md font-light text-gray-700 mb-2">
            Carolina Scotti | Psicologa especialista en Ansiedad, estrés y
            ataques de panico
          </h1>
          <h2 className="text-5xl font-extrabold z-10 text-gray-950 mb-1">
            ¿Sientes qué{" "}
            <span className="text-rose-300 font-serif">la ansiedad</span> esta
            tomando el control de tu vida?
          </h2>
          <p className="font-extralight text-gray-700">-</p>
          <p className="text-lg text-gray-700 font-light mt-1 z-10 max-w-xl">
            Acompaño a mujeres a entender lo que les pasa y a gestionar la
            ansiedad con herramientas basadas en la evidencia y un trato
            cercano.
          </p>
          <div className="flex mt-6 gap-4 max-w-lg">
            <Button variant="outline" className="rounded-full py-6 z-10">
              Conoce mi método
            </Button>
            <Button className="z-10 rounded-full py-6 min-w-[210px] flex-1">
              Agendar consulta gratuita <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="relative z-10">
          <div className="bg-gray-50/70 border-1 border-white gap-2 px-4 py-2 rounded-lg shadow-md absolute top-5 lg:top-10 right-57 lg:right-72">
            <p className="font-bold w-max text-4xl flex flex-col">
              + 15
              <span className="font-extralight mt-2 text-gray-700 text-xs">
                años de experiencia
              </span>
            </p>
          </div>
          <div className="bg-gray-50/70 border-1 border-white gap-2 px-4 py-2 rounded-lg shadow-md absolute bottom-10 left-57 lg:left-72">
            <p className="font-bold w-max text-4xl flex flex-col">
              + 2000
              <span className="font-extralight text-gray-600 mt-2 text-xs">
                sesiones realizadas
              </span>
            </p>
          </div>
          <Image
            src="/caro-hero.avif"
            alt="Carolina Scotti Foto de Perfil | Psicologa especialista en ansiedad"
            className="rounded-full shadow-lg w-92 h-92 object-cover"
            width={400}
            height={400}
            priority
          />
        </div>
      </div>
      <div className="flex flex-col z-10 justify-center pb-8 sm:pb-16 text-center max-w-6xl mx-auto">
        <h2 className="text-xl font-light mb-2 text-rose-500">
          En qué te puedo acompañar
        </h2>
        <p className="font-serif text-3xl italic text-gray-950">
          Trabajo junto a tí para que puedas{" "}
          <span className="font-semibold">
            sentirte mejor, recuperando la calma y la confianza en vos misma.
          </span>
        </p>
        <div className="grid grid-cols-1 text-xl text-center sm:grid-cols-2 sm:gap-8 md:text-left mt-8">
          <div className="text-gray-600 space-y-2">
            <h3>
              <Check className="text-rose-300 inline-flex mr-1" />
              Ataques de pánico y ansiedad generalizada
            </h3>
            <h3>
              <Check className="text-rose-300 inline-flex mr-1" />
              Manejo del estrés y la sobrecarga mental
            </h3>
            <h3>
              <Check className="text-rose-300 inline-flex mr-1" />
              Transiciones vitales y toma de decisiones
            </h3>
            <h3>
              <Check className="text-rose-300 inline-flex mr-1" />
              Desarrollo personal y sentido de propósito
            </h3>
          </div>
          <div className="text-gray-600 space-y-2">
            <h3>
              <Check className="text-rose-300 inline-flex mr-1" />
              Aerofobia y otras fobias específicas
            </h3>
            <h3>
              <Check className="text-rose-300 inline-flex mr-1" />
              Mejora de la autoestima y autoconfianza
            </h3>
            <h3>
              <Check className="text-rose-300 inline-flex mr-1" />
              Regulación emocional e inteligencia emocional
            </h3>
            <h3>
              <Check className="text-rose-300 inline-flex mr-1" />
              Relaciones sanas y límites claros
            </h3>
          </div>
        </div>
      </div>
      <div className="h-24 w-148 rotate-25 sm:top-50 top-140 -right-40 sm:-right-0 2xl:right-40 z-1 rounded-full bg-gradient-to-r from-rose-300 to-amber-300 absolute opacity-70 mx-auto blur-sm" />
      <div className="h-24 w-148 rotate-25 sm:top-80 top-170 -right-40 sm:-right-0 2xl:right-40 z-1 rounded-full bg-gradient-to-r from-rose-300 to-purple-300 absolute opacity-70 mx-auto" />
    </div>
  );
};

export default Hero;

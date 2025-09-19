import Image from "next/image";
import ServicesGrid from "./services-grid";
import { Armchair, ArrowRight, Calendar, PuzzleIcon } from "lucide-react";
import { Button } from "./ui/button";

const Services = () => {
  return (
    <div className="bg-[url('/background.png')] bg-cover bg-center">
      <div className="flex flex-col justify-center max-w-6xl mx-auto gap-4 px-4 py-8 sm:px-8 sm:py-16">
        <h2 className="text-xl text-rose-500">
          Psicóloga especialista en ansiedad, estrés y ataques de pánico.
        </h2>
        <h3 className="text-5xl font-semibold italic">
          Un enfoque basado en evidencia, pensado para tu vida real.
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16 mt-4">
          <div className="flex flex-col gap-4 text-gray-600">
            <h2 className="text-3xl mb-2 text-gray-950 hidden md:flex">
              Terapias
            </h2>
            <p>
              Recuperar la calma es posible con herramientas claras y
              practicables.
            </p>
            <p>
              {" "}
              Utilizo la Terapia Cognitivo-Conductual (TCC), un enfoque con
              respaldo científico que conecta pensamientos, emociones y
              conductas para generar cambios reales en tu día a día.{" "}
            </p>
            <p>
              Te acompaño paso a paso para que vuelvas a sentir confianza en vos
              misma, entrenando habilidades que te ayudan a regular tu mente y
              tu cuerpo. El objetivo no es eliminar la ansiedad, sino aprender a
              manejarla para que deje de controlar tu vida.
            </p>
            <p className="italic">
              {" "}
              🧠 Trabajo especialmente con mujeres que sienten que la ansiedad y
              el estrés les están quitando claridad, energía y confianza.
            </p>
          </div>
          <ServicesGrid />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center p-4">
        <h2 className="text-xl font-light mb-2 text-rose-500">
          Mi método de acompañamiento
        </h2>
        <p className="text-4xl font-serif italic">
          Así es como empieza nuestro trabajo juntos
        </p>
        <div className="flex flex-col-reverse sm:flex-row max-w-6xl gap-6 mx-auto mt-12">
          <Image
            src="/caro-work.avif"
            width={400}
            height={400}
            className="rounded-lg shadow-lg object-cover mx-auto"
            alt="Carolina Scotti | Psicóloga Cognitiva Conductual"
          />
          <div className="flex flex-col text-left gap-2 md:max-w-xl">
            <div className="flex gap-4">
              <div className="flex flex-col items-center gap-2">
                <Calendar className="text-rose-500" size={32} />
                <div className="bg-rose-300 w-1 h-20 rounded-full mb-4" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold mb-4 text-gray-950">
                  Agenda tu llamada de evaluación (15 min)
                </h3>
                <p className="text-gray-600">
                  Un primer espacio breve para contarme tu situación y ver si
                  soy la profesional adecuada para acompañarte. Sin compromiso.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center gap-2">
                <PuzzleIcon className="text-rose-500 mb-2" size={32} />
                <div className="bg-rose-300 w-1 h-25 rounded-full mb-4" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold mb-4 text-gray-950">
                  Primera sesión: entendemos tu historia y definimos objetivos
                </h3>
                <p className="text-gray-600">
                  En la primera sesión trabajamos sobre lo que estás viviendo,
                  aclaramos dudas y marcamos objetivos concretos para avanzar
                  paso a paso.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center gap-2">
                <Armchair className="text-rose-500" size={32} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold mb-4 text-gray-950">
                  Plan a medida
                </h3>
                <p className="text-gray-600">
                  A partir de ahí, diseñamos un plan personalizado con técnicas
                  de Terapia Cognitivo-Conductual (TCC), orientado a que
                  recuperes equilibrio, calma y confianza.
                </p>
              </div>
            </div>
            <Button className="w-fit inline-flex my-6 rounded-full py-6 px-24 items-center gap-2">
              Agendar una consulta gratuita
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

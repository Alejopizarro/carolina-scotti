import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Book,
  CircleCheckBig,
  Clock,
  GraduationCap,
  HeartIcon,
  MedalIcon,
  UsersRound,
} from "lucide-react";
import Image from "next/image";

const AboutMePage = () => {
  return (
    <div className="bg-gray-50 pt-16 flex flex-col">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12 py-8 sm:py-12 lg:py-16">
        <Image
          src="/caro-work-profile.jfif"
          width={400}
          height={400}
          className="rounded-t-full shadow-lg object-cover mx-auto"
          alt="Carolina Scotti | Psicóloga Cognitiva Conductual | Sobre mí"
        />
        <div className="flex flex-col gap-6 sm:gap-8 justify-center">
          <h1 className="text-4xl font-semibold">Hola, soy Carolina</h1>
          <p className="text-lg text-gray-700">
            Soy psicóloga especializada en ansiedad, estrés y ataques de pánico.
            Mi misión es acompañarte en tu proceso de sanación emocional con
            herramientas basadas en evidencia científica y un enfoque cálido y
            empático.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12">
            <div>
              <h2 className="text-lg flex items-center space-x-2 font-medium">
                <Clock className="inline-flex mr-2 text-rose-300" />+ 15 años de
                experiencia
              </h2>
              <h2 className="text-lg flex items-center space-x-2 font-medium mt-4">
                <MedalIcon className="inline-flex mr-2 text-rose-300" />
                Especialista en TCC
              </h2>
            </div>
            <div>
              <h2 className="text-lg flex items-center space-x-2 font-medium">
                <UsersRound className="mr-2 text-rose-300" />+ 2000 sesiones
                realizadas
              </h2>
              <h2 className="text-lg flex items-center space-x-2 font-medium mt-4">
                <HeartIcon className="inline-flex mr-2 text-rose-300" />
                Enfoque centrado en la persona
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <svg
          className="w-full h-16 sm:h-24 text-gray-100"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ display: "block" }}
        >
          <path
            d="M0,20 C300,10 600,30 900,60 C1000,75 1100,85 1200,95 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="bg-[url('/background.png')] bg-cover bg-center">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6 sm:gap-8 py-8 sm:py-12">
          <h2 className="text-2xl font-semibold">Mi enfoque terapéutico</h2>
          <p className="text-lg text-gray-700">
            Utilizo técnicas de Terapia Cognitivo Conductual (TCC) para ayudarte
            a identificar y cambiar patrones de pensamiento negativos,
            desarrollar habilidades de afrontamiento y mejorar tu bienestar
            emocional.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="text-left gap-2 max-w-[280px] mx-auto">
              <CardContent className="flex flex-col items-start text-left">
                <div className="bg-rose-100 rounded-full w-22 h-22 flex items-center justify-center mb-2">
                  <Book strokeWidth={0.8} className="text-rose-500" size={50} />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Basado en evidencia
                </h3>
                <p className="text-gray-700">
                  Utilizo técnicas respaldadas por investigación científica para
                  garantizar resultados efectivos.
                </p>
              </CardContent>
            </Card>
            <Card className="text-left gap-2 max-w-[280px] mx-auto">
              <CardContent className="flex flex-col items-start text-left">
                <div className="bg-rose-100 rounded-full w-22 h-22 flex items-center justify-center mb-2">
                  <HeartIcon
                    strokeWidth={0.8}
                    className="text-rose-500"
                    size={50}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Enfoque empático</h3>
                <p className="text-gray-700">
                  Creo un espacio seguro y sin juicios donde puedas explorar tus
                  emociones libremente.
                </p>
              </CardContent>
            </Card>
            <Card className="max-w-[280px] mx-auto">
              <CardContent className="flex flex-col items-start text-left">
                <div className="bg-rose-100 rounded-full w-22 h-22 flex items-center justify-center mb-2">
                  <CircleCheckBig
                    strokeWidth={0.8}
                    className="text-rose-500"
                    size={50}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Resultados prácticos
                </h3>
                <p className="text-gray-700">
                  Te brindo herramientas concretas que puedes aplicar en tu vida
                  diaria para sentirte mejor.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 px-4 py-8 sm:py-12 lg:py-16">
          <h2 className="text-4xl font-semibold">Mi formación</h2>
          <div className="flex flex-col-reverse sm:flex-row max-w-6xl gap-6 sm:gap-12 mx-auto mt-12">
            <Image
              src="/caro-working-computer.jfif"
              width={400}
              height={400}
              className="rounded-lg shadow-lg object-cover mx-auto sm:w-1/2"
              alt="Carolina Scotti | Psicóloga Cognitiva Conductual | Mi formación y experiencia"
            />
            <div className="flex flex-col text-left gap-2 md:max-w-xl">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <GraduationCap
                    className="text-rose-500 ring-1 ring-rose-500 rounded-full p-1 mb-2"
                    strokeWidth={0.9}
                    size={32}
                  />
                  <div className="bg-rose-300 w-1 h-29 sm:h-10 rounded-full mb-2" />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex items-center justify-between w-full">
                    <h3 className="text-lg font-semibold text-gray-950">
                      Licenciatura en Psicología
                    </h3>
                    <p className="border-1 border-gray-950 text-xs rounded-lg px-2 py-1 font-semibold">
                      2008
                    </p>
                  </div>
                  <p className="text-gray-600">Universidad de Buenos Aires</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <GraduationCap
                    className="text-rose-500 ring-1 ring-rose-500 rounded-full p-1 mb-2"
                    strokeWidth={0.9}
                    size={32}
                  />
                  <div className="bg-rose-300 w-1 h-29 sm:h-10 rounded-full mb-2" />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex items-center justify-between w-full">
                    <h3 className="text-lg font-semibold mb-4 text-gray-950">
                      Especialización en Terapia Cognitivo-Conductual
                    </h3>
                    <p className="border-1 border-gray-950 text-xs rounded-lg px-2 py-1 font-semibold">
                      2010
                    </p>
                  </div>
                  <p className="text-gray-600">Instituto Beck </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <GraduationCap
                    className="text-rose-500 ring-1 ring-rose-500 rounded-full p-1 mb-2"
                    strokeWidth={0.9}
                    size={32}
                  />
                  <div className="bg-rose-300 w-1 h-29 sm:h-10 rounded-full mb-2" />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex items-center justify-between w-full">
                    <h3 className="text-lg font-semibold mb-4 text-gray-950">
                      Posgrado en Tratamiento de Ansiedad
                    </h3>
                    <p className="border-1 border-gray-950 text-xs rounded-lg px-2 py-1 font-semibold">
                      2012
                    </p>
                  </div>
                  <p className="text-gray-600">CETECIC</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <GraduationCap
                    className="text-rose-500 ring-1 ring-rose-500 rounded-full p-1 mb-2"
                    strokeWidth={0.9}
                    size={32}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex items-center justify-between w-full">
                    <h3 className="text-lg font-semibold mb-4 text-gray-950">
                      Formación en Mindfulness y MBCT
                    </h3>
                    <p className="border-1 border-gray-950 text-xs rounded-lg px-2 py-1 font-semibold">
                      2015
                    </p>
                  </div>
                  <p className="text-gray-600">Centro de Mindfulness</p>
                </div>
              </div>
              <p className="text-gray-600 mt-4">
                * Puedes leer más información acerca de mi formación y mi
                carrera profesional en{" "}
                <a
                  href="https://www.linkedin.com/in/scotticarolina"
                  className="font-semibold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <svg
          className="w-full rotate-180 h-16 sm:h-24 text-gray-100 bg-gray-50"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ display: "block" }}
        >
          <path
            d="M0,20 C300,10 600,30 900,60 C1000,75 1100,85 1200,95 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="max-w-6xl bg-gray-50 mx-auto flex flex-col items-center gap-6 px-4 py-8 sm:py-12 lg:py-16">
        <h2 className="text-4xl font-semibold">
          ¿Listo para dar el primer paso?
        </h2>
        <p className="text-lg max-w-lg text-gray-600 text-center">
          Te acompaño en tu proceso de sanación con herramientas efectivas y un
          trato cálido y profesional.
        </p>
        <Button className="w-full sm:w-1/2 rounded-full">
          Agendar consulta gratuita
        </Button>
      </div>
    </div>
  );
};

export default AboutMePage;

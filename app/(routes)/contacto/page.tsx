import { Button } from "@/components/ui/button";
import CoursesGrid from "@/components/ui/courses-grid";
import { TikTok } from "@/public/tiktok";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Page = () => {
  return (
    <div className="bg-gray-50 pt-26 flex flex-col">
      <div className="max-w-6xl mx-auto flex flex-col text-center items-center gap-6 sm:gap-8 py-8 sm:py-12 lg:py-16 px-4 sm:px-8">
        <h1 className="text-5xl font-semibold">Hablemos de tu bienestar</h1>
        <p className="text-lg text-gray-700 font-light max-w-2xl">
          Estoy aquí para acompañarte en tu camino hacia una vida más plena y
          tranquila. Ya sea que estés lidiando con ansiedad, estrés o
          simplemente busques mejorar tu bienestar emocional, estoy lista para
          ayudarte.
        </p>
        <Button className="w-full sm:w-1/3 rounded-full mt-6">
          Agendar consulta gratuita
        </Button>
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
      <div className="bg-[url('/background.png')] bg-cover bg-center pb-8 md:pb-16">
        <div className="max-w-6xl mx-auto flex flex-col text-center items-center gap-6 sm:gap-8 py-8 sm:py-12 lg:py-16 px-4 sm:px-8">
          <h2 className="text-3xl font-semibold">
            Encuentrame en Redes Sociales
          </h2>
          <p className="text-lg text-gray-700 font-light max-w-2xl mb-8">
            Sígueme en mis redes sociales para obtener consejos, recursos y
            actualizaciones sobre mi práctica y el bienestar emocional.
          </p>
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="flex flex-col h-fit items-center gap-y-2 rounded-lg shadow-lg px-6 py-3"
            >
              <Instagram />
              Instagram
            </Button>
            <Button
              variant="outline"
              className="flex flex-col h-fit items-center gap-y-2 rounded-lg shadow-lg px-6 py-3"
            >
              <Facebook />
              Facebook
            </Button>
            <Button
              variant="outline"
              className="flex flex-col h-fit items-center gap-y-2 rounded-lg shadow-lg px-6 py-3"
            >
              <Linkedin />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              className="flex flex-col h-fit items-center gap-y-2 rounded-lg shadow-lg px-6 py-3"
            >
              <TikTok />
              Tik Tok
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center max-w-6xl mx-auto p-4 sm:py-16 text-center gap-6">
          <h2 className="text-3xl leading-none text-gray-950 font-semibold">
            Programas de acompañamiento grupales
          </h2>
          <p className="text-gray-700">
            Además de las sesiones individuales, también ofrezco programas
            grupales online sobre ansiedad y estrés
          </p>
          <CoursesGrid />
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
      <div className="bg-gray-50 flex flex-col items-center justify-center max-w-6xl mx-auto p-4 sm:py-16 text-center gap-6">
        <h2 className="text-3xl leading-none text-gray-950 font-semibold">
          ¿Listo para dar el primer paso hacia una vida más tranquila?
        </h2>
        <p className="text-gray-700 max-w-2xl">
          Deja tus datos y me pondré en contacto contigo para agendar una
          consulta gratuita.
        </p>
        <form className="w-full sm:w-2/3 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
          />
          <textarea
            placeholder="Mensaje"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
            rows={4}
          ></textarea>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" className="accent-rose-300" /> Acepto la
            política de privacidad.
          </div>
          <Button type="submit" className="w-full rounded-full py-4">
            Enviar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Page;

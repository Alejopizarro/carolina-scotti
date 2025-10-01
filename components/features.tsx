import { BicepsFlexed, Brain, Check, Heart } from "lucide-react";

const Features = () => {
  return (
    <div className="pt-8 text-center">
      <div className="flex flex-col z-10 px-4 justify-center items-center">
        <h2 className="text-4xl font-semibold mb-2 sm:mb-4 text-rose-400">
          En qué te puedo acompañar
        </h2>
        <p className="sm:max-w-3xl mx-auto text-xl text-gray-500">
          Trabajo junto a tí para que puedas sentirte mejor,{" "}
          <span className="font-semibold text-gray-950">
            recuperando la calma y la confianza en vos misma.
          </span>
        </p>
        <div className="grid grid-cols-1 text-xl text-center sm:grid-cols-3 max-w-6xl mx-auto gap-8 md:text-left my-8 sm:mb-16">
          <div className="flex flex-col bg-gray-50/30 border-sky-200 rounded-lg border shadow-xl gap-2 px-4 py-8">
            <Brain
              className="text-sky-300 mx-auto"
              strokeWidth={0.8}
              size={68}
            />
            <h3 className="text-xl text-center font-light mb-4">
              Ansiedad y Manejo Emocional
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-600 list-none">
              <li>
                <Check className="inline-flex mr-1 text-sky-300" size={18} />
                Ataques de pánico y ansiedad generalizada
              </li>
              <li>
                {" "}
                <Check className="inline-flex mr-1 text-sky-300" size={18} />
                Manejo del estrés y la sobrecarga mental
              </li>
              <li>
                {" "}
                <Check className="inline-flex mr-1 text-sky-300" size={18} />
                Regulación emocional e inteligencia emocional
              </li>
              <li>
                {" "}
                <Check className="inline-flex mr-1 text-sky-300" size={18} />
                Aerofobia y otras fobias específicas
              </li>
            </ul>
          </div>
          <div className="flex flex-col bg-gray-50/30 border-rose-300 rounded-lg border shadow-xl gap-2 px-4 py-8">
            <BicepsFlexed
              className="text-rose-300 mx-auto"
              strokeWidth={0.8}
              size={68}
            />
            <h3 className="text-xl text-center font-light mb-4">
              Crecimiento personal y autoestima
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-600 list-none">
              <li>
                <Check className="inline-flex mr-1 text-rose-300" size={18} />
                Mejora de la autoestima y autoconfianza
              </li>
              <li>
                {" "}
                <Check className="inline-flex mr-1 text-rose-300" size={18} />
                Desarrollo personal y sentido de propósito{" "}
              </li>
              <li>
                {" "}
                <Check className="inline-flex mr-1 text-rose-300" size={18} />
                Transiciones vitales y toma de decisiones{" "}
              </li>
            </ul>
          </div>
          <div className="flex flex-col bg-gray-50/30 border-violet-300 rounded-lg border shadow-xl gap-2 px-4 py-8">
            <Heart
              className="text-violet-300 mx-auto"
              strokeWidth={0.8}
              size={68}
            />
            <h3 className="text-xl text-center font-light mb-4">
              Relaciones sanas y bienestar social
            </h3>
            <ul className="flex flex-col gap-4 list-none text-sm text-gray-600">
              <li>
                <Check className="inline-flex mr-1 text-violet-300" size={18} />
                Relaciones sanas y límites claros
              </li>
              <li>
                <Check className="inline-flex mr-1 text-violet-300" size={18} />
                Comunicación asertiva y resolución de conflictos
              </li>
              <li>
                <Check className="inline-flex mr-1 text-violet-300" size={18} />
                Manejo de la soledad y construcción de redes de apoyo
              </li>
            </ul>
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
    </div>
  );
};

export default Features;

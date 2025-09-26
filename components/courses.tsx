import Image from "next/image";

const Courses = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-6xl mx-auto p-4 sm:py-16 text-center gap-6">
      <p className="text-md text-rose-400 font-serif font-semibold">
        Además de las sesiones individuales, también ofrezco programas grupales
        online sobre ansiedad y estrés
      </p>
      <h2 className="text-5xl text-gray-950 font-light italic">
        Programas de acompañamiento grupales
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mt-8">
        <div className="flex flex-col border h-fit bg-white rounded-lg shadow-xl p-4">
          <Image
            src="/supera-ataques-de-panico.avif"
            alt="Programa Supera los Ataques de Pánico | Carolina Scotti Psicóloga"
            width={400}
            height={400}
            className="rounded-lg shadow-md h-60 object-cover mb-6"
          />
          <div className="flex flex-col gap-2 px-4">
            <a className="transition duration-200 cursor-pointer hover:underline hover:text-rose-300 text-xl font-semibold mb-2 text-gray-950">
              Supera los Ataques de Pánico - 5 semanas
            </a>
            <p className="text-gray-500 text-sm mb-4">
              Programa grupal online de 5 encuentros donde aprenderás a
              comprender lo que sucede en tu cuerpo y tu mente, y entrenarás
              estrategias para atravesar los episodios con mayor calma y
              seguridad.
            </p>
            <p className="text-gray-500 text-sm">
              Nota: Este es un programa educativo. No sustituye una terapia
              individual.
            </p>
          </div>
        </div>
        <div className="flex flex-col border scale-y-105 border-rose-300 bg-white rounded-lg shadow-xl p-4">
          <Image
            src="/bootcamp-ansiedad-estres.avif"
            alt="Bootcamp Ansiedad y Estrés | Carolina Scotti Psicóloga"
            width={400}
            height={400}
            className="rounded-lg shadow-md h-60 object-cover mb-6"
          />
          <div className="flex flex-col gap-2 px-4">
            <a className="hover:underline transition duration-200 cursor-pointer  hover:text-rose-300 text-xl font-semibold mb-2 text-gray-950">
              Bootcamp Ansiedad & Estrés - 5 semanas
            </a>
            <p className="text-gray-500 text-sm mb-4">
              Entrenamiento grupal paso a paso para aprender a manejar la
              ansiedad y el estrés. Vas a trabajar técnicas prácticas de
              respiración, regulación emocional y cambio de pensamiento para
              sentirte más clara y enfocada en tu día a día.
            </p>
            <p className="text-gray-500 text-sm">
              Nota: Este es un programa educativo. No sustituye una terapia
              individual.
            </p>
          </div>
        </div>
        <div className="flex flex-col border h-fit bg-white rounded-lg shadow-xl p-4">
          <Image
            src="/supera-miedo-a-volar.avif"
            alt="Supera el miedo a volar | Carolina Scotti Psicóloga"
            width={400}
            height={400}
            className="rounded-lg shadow-md h-60 object-cover mb-6"
          />
          <div className="flex flex-col gap-2 px-4">
            <a className="hover:underline transition duration-200 cursor-pointer hover:text-rose-300 text-xl font-semibold mb-2 text-gray-950">
              Supera el miedo a volar - 5 semanas
            </a>
            <p className="text-gray-500 text-sm mb-4">
              Programa individual o grupal enfocado en la aerofobia y el miedo a
              volar. Incluye estrategias de preparación antes del vuelo,
              técnicas de regulación durante el trayecto y recursos para
              mantener la calma después.
            </p>
            <p className="text-gray-500 text-sm">
              Nota: Este es un programa educativo. No sustituye una terapia
              individual.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;

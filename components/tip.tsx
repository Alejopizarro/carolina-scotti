const Tip = () => {
  return (
    <div className="relative sm:max-w-5xl sm:mx-auto mx-4 sm:p-4 text-center bg-[url('/tip-woman.jpg')] bg-cover bg-center rounded-lg shadow-lg">
      <div className="absolute inset-0 bg-violet-700 opacity-40 rounded-lg pointer-events-none" />
      <div className="relative flex flex-col text-left gap-6 p-8 sm:py-12">
        <h2 className="text-xl font-semibold text-white">
          🧠 Un tip práctico para hoy:
        </h2>
        <p className="text-lg text-gray-100">
          Cuando intentamos evitar la ansiedad con distracciones o rutinas
          rígidas, solo la reforzamos. El verdadero cambio ocurre cuando
          empezamos a observarla sin reaccionar ni huir. La clave no es
          eliminarla, sino aprender a relacionarnos distinto con ella
        </p>
        <p className="italic text-white font-semibold">
          Descubre más herramientas en mi programa de Ansiedad (5 semanas)
        </p>
      </div>
    </div>
  );
};

export default Tip;

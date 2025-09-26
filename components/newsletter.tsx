const Newsletter = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-4xl mx-auto p-4 sm:py-16 text-center gap-6">
      <h2 className="text-4xl text-rose-300 font-extrabold">
        Recibí herramientas prácticas cada semana
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl">
        Comparto tips sencillos y reflexiones basadas en evidencia para manejar
        la ansiedad y el estrés en tu día a día
      </p>
      <form className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">
        <input
          type="email"
          placeholder="Tu email"
          className="flex-1 border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-300"
          required
        />
        <button
          type="submit"
          className="bg-rose-300 text-white rounded-full px-6 py-3 hover:bg-rose-400 transition-colors"
        >
          Suscribirme
        </button>
      </form>
      <p className="text-xs text-gray-500">
        No comparto tu email con nadie. Podés darte de baja en cualquier
        momento.
      </p>
    </div>
  );
};

export default Newsletter;

import { Button } from "./ui/button";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-4xl mx-auto p-4 sm:py-16 text-center gap-6">
      <h2 className="text-4xl font-extrabold text-rose-400">
        Da el primer paso hacía tu bienestar
      </h2>
      <p className="text-md text-gray-600">
        Te acompaño a recuperar calma, claridad y confianza a través de sesiones
        online de Terapia Cognitivo-Conductual (TCC). Mi enfoque combina
        herramientas basadas en evidencia con un trato cercano y sin juicios.
      </p>
      <p className="text-md mb-4 text-gray-600">
        Desde 2015 brindo terapia online a hispanohablantes de más de 50 países
        con excelentes resultados.
      </p>
      <div className="flex flex-col gap-2 max-w-md">
        <Button className="py-4 px-8 w-full">
          Agendar primera sesión de evaluación
        </Button>
        <p className="text-xs text-gray-500">
          * Consulta gratuita de 15 minutos. Sin tarjetas de credito ni
          compromisos.
        </p>
      </div>
    </div>
  );
};

export default Contact;

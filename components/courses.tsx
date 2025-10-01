import CoursesGrid from "./ui/courses-grid";

const Courses = () => {
  return (
    <div className="flex flex-col sm:items-center justify-center max-w-6xl mx-auto p-4 sm:py-16 sm:text-center gap-6">
      <p className="text-xs md:text-md text-rose-400 font-semibold">
        Además de las sesiones individuales, también ofrezco programas grupales
        online sobre ansiedad y estrés
      </p>
      <h2 className="text-[2.10rem] leading-none md:text-5xl text-gray-950 font-semibold font-italic ">
        Programas de acompañamiento grupales
      </h2>
      <CoursesGrid />
    </div>
  );
};

export default Courses;

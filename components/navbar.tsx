import { Leaves } from "@/public/leave";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <div className="fixed w-full sm:w-fit sm:max-w-4xl sm:mx-auto justify-between mx-1 sm:left-1/2 top-5 transform sm:-translate-x-1/2 bg-gradient-to-br z-1001 from-white to-slate-50 shadow-lg flex font-semibold items-center px-4 py-4 space-x-8 rounded-full">
      <button className="flex items-center font-extrabold font-serif text-xl bg-gradient-to-r from-rose-300 to-rose-800 bg-clip-text text-transparent">
        <Leaves className="text-rose-300 mr-2" /> Caro Scotti
      </button>
      <div className="gap-4 hidden sm:flex text-rose-800 font-semibold text-md font-serif">
        <a href="#about" className="hover:text-rose-800/80">
          Sobre mí
        </a>
        <a href="#services" className="hover:text-rose-800/80">
          Servicios
        </a>
        <a href="#contact" className="hover:text-rose-800/80">
          Contacto
        </a>
        <a href="#blog" className="hover:text-rose-800/80">
          Blog
        </a>
      </div>
      <Menu className="sm:hidden text-rose-800" size={24} />
    </div>
  );
};

export default Navbar;

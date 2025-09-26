import { Leaves } from "@/public/leave";
import { ArrowRight, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="fixed w-full md:w-fit mx-auto left-1/2 top-5 justify-between transform -translate-x-1/2 bg-gradient-to-br z-1001 from-white to-slate-50 shadow-lg flex items-center font-semibold py-4 px-4 gap-12 rounded-full">
      <a className="flex gap-2 items-center font-extrabold font-serif text-xl bg-gradient-to-r from-rose-300 to-rose-800 bg-clip-text text-transparent whitespace-nowrap">
        <Leaves className="text-rose-300" /> Caro Scotti
      </a>
      <div className="gap-4 hidden md:flex text-rose-800 font-light text-sm font-serif">
        <a href="#about" className="hover:text-rose-800/80 whitespace-nowrap">
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
      <Button className="bg-gradient-to-r from-rose-500 to-rose-800 hover:from-rose-300 hover:to-rose-500  cursor-pointer rounded-full">
        agendar consulta gratuita <ArrowRight className="inline-flex ml-2" />
      </Button>
      <Sheet>
        <SheetTrigger className="sm:hidden">
          <Menu className="sm:hidden text-rose-800" size={24} />
        </SheetTrigger>
        <SheetContent className="z-1002 h-full px-2 py-6">
          <SheetHeader>
            <SheetTitle>Inicio</SheetTitle>
            <Separator className="my-4" />
            <SheetTitle>Sobre mí</SheetTitle>
            <Separator className="my-4" />
            <SheetTitle>Servicios</SheetTitle>
            <Separator className="my-4" />
            <SheetTitle>Blog</SheetTitle>
            <Separator className="my-4" />
            <SheetTitle>Contacto</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;

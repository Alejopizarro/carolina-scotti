import { Leaves } from "@/public/leave";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import MenuMobile from "./ui/menu-mobile";
import MenuList from "./ui/menu-list";

export interface NavbarPages {
  title: string;
  href: string;
  submenu?: { title: string; href: string }[];
}

export const pages: NavbarPages[] = [
  { title: "Inicio", href: "/" },
  { title: "Sobre mí", href: "/sobre-mi" },
  {
    title: "Terapias",
    href: "/",
    submenu: [
      { title: "Sesiones individuales", href: "#" },
      { title: "Programa de ansiedad y estrés", href: "#" },
      { title: "Supera el miedo a volar", href: "#" },
      { title: "Supera los ataques de pánico", href: "#" },
    ],
  },
  { title: "Blog", href: "/blog" },
  { title: "Contacto", href: "/contacto" },
];

const Navbar = () => {
  return (
    <nav className="fixed w-full md:w-fit mx-auto left-1/2 top-5 justify-between transform -translate-x-1/2 bg-gradient-to-br z-1001 from-white to-slate-50 shadow-lg flex items-center font-semibold py-4 px-4 gap-12 rounded-full">
      <Link
        href="/"
        className="flex gap-2 items-center font-extrabold font-serif text-xl bg-gradient-to-r from-rose-300 to-rose-800 bg-clip-text text-transparent whitespace-nowrap"
      >
        <Leaves className="text-rose-300" /> Caro Scotti
      </Link>
      <div className="gap-4 hidden md:flex text-rose-800 font-light text-sm font-serif">
        <MenuList />
      </div>
      <Button className="hidden sm:flex bg-gradient-to-r from-rose-500 to-rose-800 hover:from-rose-300 hover:to-rose-500  cursor-pointer rounded-full">
        agendar consulta gratuita <ArrowRight className="inline-flex ml-2" />
      </Button>
      <MenuMobile pages={pages} />
    </nav>
  );
};

export default Navbar;

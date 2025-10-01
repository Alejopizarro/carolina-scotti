import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./sheet";
import { Separator } from "./separator";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

interface Page {
  title: string;
  href: string;
  submenu?: { title: string; href: string }[];
}

interface MenuMobileProps {
  pages: Page[];
}

const MenuMobile = ({ pages }: MenuMobileProps) => {
  return (
    <Sheet>
      <SheetTrigger className="sm:hidden">
        <Menu className="sm:hidden text-rose-800" size={24} />
      </SheetTrigger>
      <SheetContent className="z-1002 h-full px-4 py-12">
        <SheetTitle>
          <Link href={pages[0].href}>{pages[0].title}</Link>
        </SheetTitle>
        <Separator className="my-2" />
        <SheetTitle>
          <Link href={pages[1].href}>{pages[1].title}</Link>
        </SheetTitle>
        <Separator className="my-2" />
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="py-0 font-semibold text-md">
              {pages[2].title}
            </AccordionTrigger>
            <AccordionContent className="pb-0">
              <ul className="mt-2">
                {pages[2].submenu?.map((subpage, i) => (
                  <li key={i} className="rounded-md">
                    <Link
                      href={subpage.href}
                      className="block w-full underlinerounded-md py-2 text-sm leading-none transition-colors hover:bg-rose-100 hover:text-rose-700"
                    >
                      {subpage.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Separator className="my-2" />
        <SheetTitle>
          <Link href={pages[3].href}>{pages[3].title}</Link>
        </SheetTitle>
        <Separator className="my-2" />
        <SheetTitle>
          <Link href={pages[4].href}>{pages[4].title}</Link>
        </SheetTitle>
      </SheetContent>
    </Sheet>
  );
};

export default MenuMobile;

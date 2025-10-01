import Link from "next/link";
import { pages } from "../navbar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./navigation-menu";

const MenuList = () => {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Link href={pages[1].href} className="whitespace-nowrap">
                {pages[1].title}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <Link
                href={pages[2].href}
                className="whitespace-nowrap font-light"
              >
                {pages[2].title}
              </Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="text-rose-500">
              <ul className="grid gap-3 min-w-[240px]">
                {pages[2].submenu?.map((subpage) => (
                  <li key={subpage.title} className="rounded-md">
                    <NavigationMenuLink>
                      <Link
                        href={subpage.href}
                        className="block w-full rounded-md p-2 text-sm leading-none transition-colors hover:bg-rose-100 hover:text-rose-700"
                      >
                        {subpage.title}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Link href={pages[3].href}>{pages[3].title}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Link href={pages[4].href}>{pages[4].title}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default MenuList;

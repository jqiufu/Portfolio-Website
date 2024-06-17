import { cn } from "@/lib/utils";
import NavLink from "./nav-link";

interface MenuOverlayProps {
  links: Array<{ title: string; path: string }>;
  isNavMenuOpen: boolean;
  closeMenu: () => void;
}

const MenuOverlay = ({ links, isNavMenuOpen, closeMenu }: MenuOverlayProps) => {
  return (
    <div className="relative">
      <ul
        className={cn(
          "absolute inset-x-0 top-full z-10 flex flex-col items-center border-b border-border bg-background bg-opacity-[.99] pb-4",
          {
            hidden: !isNavMenuOpen,
          },
        )}
      >
        {links.map(({ title, path }) => (
          <li key={path}>
            <NavLink onClick={closeMenu} href={path} title={title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;

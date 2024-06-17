import Link from "next/link";
import type { UrlObject } from "url";
import { Button } from "./ui/button";

interface NavLinkProps {
  href: string | UrlObject;
  title: string;
  onClick: () => void;
}

const NavLink = ({ href, title, onClick }: NavLinkProps) => {
  return (
    <Button onClick={onClick} variant="ghost" asChild>
      <Link href={href}>{title}</Link>
    </Button>
  );
};

export default NavLink;

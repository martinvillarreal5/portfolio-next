type NavbarItemProps = {
  children: string;
  href?: string | undefined;
};

const NavbarItem = ({ children, href }: NavbarItemProps) => {
  return (
    <li>
      <a className="text-md " href={href}>
        {children}
      </a>
    </li>
  );
};

const Navbar = () => {
  const links = [
    { value: "About me", href: undefined },
    { value: "Skills", href: undefined },
    { value: "Projects", href: undefined },
    { value: "Experience", href: undefined },
    { value: "Contact", href: undefined },
  ];

  return (
    <nav className="flex h-14 md:h-16  border-b sticky top-0 bg-slate-950">
      <div className="max-w-7xl	border-x w-full mx-auto px-2 flex justify-between">
        <p className="text-xl ">Martin Villarreal</p>
        <ul className="flex flex-row gap-4">
          {links.map((link) => (
            <NavbarItem key={link.value} href={link.href}>
              {link.value}
            </NavbarItem>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import { NavItem } from "./NavItem";

const NAV_ITEMS = [
  { title: "Home", src: "/home" },
  { title: "Contact", src: "/contact" },
];

export const Navbar = () => {
  return (
    <header className="bg-slate-950 px-20 py-10">
      <div className="flex">
        <nav>
          <ul className="flex gap-10">
            {NAV_ITEMS.map(({ src, title }) => (
              <NavItem src={src} title={title} key={src} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

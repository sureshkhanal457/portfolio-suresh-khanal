import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { profile } from "../data/data.js";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/education", label: "Education" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  // open = is the mobile menu showing? (only used on small screens)
  const [open, setOpen] = useState(false);

  // NavLink gives us isActive, so the current page link is colored
  function linkClass({ isActive }) {
    return isActive ? "text-purple-600 font-bold" : "hover:text-purple-600";
  }

  return (
    <header className="bg-white border-b sticky top-0 z-10">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-purple-600">
          {profile.name.split(" ")[0]}
        </Link>

        {/* Desktop menu: hidden on phones, shown from md screens */}
        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Menu button: shown on phones only */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile menu: only shown when open is true */}
      {open && (
        <div className="md:hidden border-t px-4 py-3 flex flex-col gap-3">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={linkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}

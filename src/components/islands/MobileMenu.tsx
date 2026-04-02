"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#about", label: "About Us" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact Us" },
  { href: "#offers", label: "Offers" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center justify-center size-9 rounded-full border bg-background hover:bg-accent transition-colors"
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      {open && (
        <div className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-sm border-b">
          <ul className="flex flex-col py-2 px-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

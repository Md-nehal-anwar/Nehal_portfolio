import React, { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [active, setActive] = useState(0);

  const navItems = [
    { name: "Home", path: "home", smooth: true, duration: 500, spy: true },
    { name: "About", path: "about", smooth: true, duration: 500, spy: true },
    { name: "Skills", path: "skills", smooth: true, duration: 500, spy: true },
    {
      name: "Achievement",
      path: "achievement",
      smooth: true,
      duration: 500,
      spy: true,
    },
    {
      name: "Experience",
      path: "experience",
      smooth: true,
      duration: 500,
      spy: true,
    },
    {
      name: "Contact",
      path: "contact",
      smooth: true,
      duration: 500,
      spy: true,
    },
  ];

  return (
    <nav className="flex justify-between items-center bg-[var(--primary_color)] py-4 md:px-28 px-8 fixed top-0 w-full z-50">
      {/* Logo / Name */}
      <div className="text-xl md:text-3xl text-white font-['Inter'] font-bold">
        Md Nehal Anwar
      </div>

      {/* Navigation Links */}
      <ul className="flex justify-around items-center gap-2 md:gap-6 text-base md:text-xl font-semibold">
        {navItems.map((item, index) => (
          <li
            key={index}
            onClick={() => setActive(index)}
            className="relative group cursor-pointer"
          >
            <Link
              to={item.path}
              smooth={item.smooth}
              duration={item.duration}
              spy={item.spy}
              offset={-70} // for navbar height adjustment
              className={`transition-colors duration-300 ${
                active === index
                  ? "text-white"
                  : "text-[var(--text_color)]"
              }`}
            >
              {item.name}
            </Link>

            {/* underline effect */}
            <span
              className={`absolute left-0 bottom-[-4px] h-[2px] w-full origin-left transition-transform duration-300 ${
                active === index
                  ? "bg-[var(--secondary_color)] scale-x-100"
                  : "bg-[var(--text_color)] scale-x-0 "
              }`}
            ></span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;

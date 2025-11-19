import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "home", smooth: true, duration: 500, spy: true },
    { name: "About", path: "about", smooth: true, duration: 500, spy: true },
    { name: "Skills", path: "skills", smooth: true, duration: 500, spy: true },
    {
      name: "Project",
      path: "project",
      smooth: true,
      duration: 500,
      spy: true,
    },
    {
      name: "Achievement",
      path: "achievement",
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

   const handleSetActive = (to) => {
     const index = navItems.findIndex((item) => item.path === to);
     setActive(index);
   };
  return (
   <div>
     <div className="hidden md:block">
      <nav className="flex justify-between items-center bg-[var(--primary_color)] py-4 md:px-28 px-8 fixed top-0 md:w-full z-50">
      <div className="  text-lg md:text-3xl text-white font-['Inter'] font-bold">
        Md Nehal Anwar
      </div>

      {/* Navigation Links */}
      <ul className="flex justify-around items-center gap-2 md:gap-6 text-base md:text-xl font-semibold">
        {navItems.map((item, index) => (
          <li key={index} className="relative group cursor-pointer">
            <Link
              onSetActive={() => handleSetActive(item.path)}
              to={item.path}
              smooth={item.smooth}
              duration={item.duration}
              spy={item.spy}
              offset={-100} // for navbar height adjustment
              className={`transition-colors duration-300 ${
                active === index ? "text-white" : "text-[var(--text_color)]"
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
    </div>
    <div className="md:hidden fixed top-0 left-0   bg-[var(--primary_color)] text-white text-xl  font-bold flex justify-between items-center   z-50">
      <div>
        <div className="flex justify-between items-center w-screen p-8 ">
          <div className="text-[var(--secondary_color)] text-2xl">Md Nehal Anwar</div>
        <div className="flex justify-center items-center"><div onClick={()=> setIsOpen(!isOpen)} className="text-[var(--secondary_color)] cursor-pointer  " >
          {isOpen ? <IoMdClose size={28} /> : <GiHamburgerMenu size={28} />}
          </div></div>
        </div>
        <div className="px-8 ">
          {isOpen && (
            <ul>
              {navItems.map((item, index) =>(
                <li key={index} className="py-2">
                   <Link
              onSetActive={() => handleSetActive(item.path)}
              to={item.path}
              smooth={item.smooth}
              duration={item.duration}
              spy={item.spy}
              offset={-100} // for navbar height adjustment
              className={`transition-colors duration-300 ${
                active === index ? "text-white" : "text-[var(--text_color)]"
              }`}
            >
              {item.name}
            </Link>
                </li>
              
                ))}
            </ul>
          )}
        </div>
      </div>
    </div>
    
   </div>
  );
}

export default Navbar;

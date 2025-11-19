import React from "react";
import SkillBar from "../section/Progress.jsx";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaJava,
  FaPython,
  FaReact,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { SiReactrouter } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

function Skills() {



  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);



  return (
    <>
      <div className=" bg-(--primary_color) p-8 md:p-28 ">
        <div className="text-center text-white text-4xl font-bold pb-4">
          Skills
        </div>
        <div className=" flex justify-center mb-10 md:mb-0">
          <div className="relative  w-0 h-20 border-2  border-[#F16C59] items-center "></div>
          <div className=" absolute mt-22  w-2 h-2 border-4 rounded-full border-[#F16C59] items-center "></div>
        </div>
        <div className="  md:ml-0  md:flex md:gap-16">
          <motion.div
            initial={{
              opacity: 0,
              x: isMobile ? 0 : -100,
              y: isMobile ? 0 : -100,
            }}
            whileInView={{
              opacity: 1,
              x: isMobile ? 0 : 100,
              y: isMobile ? 0 : 60,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className=" md:w-80  shadow-lg shadow-[#F16C59]/50 p-6  mb-20 md:mb-0"
          >
            <div className="text-center p-4 text-white text-2xl font-bold font-[Manrope]  ">
              Programming Languages
            </div>
            <div>
              <SkillBar
                skill="Java"
                icon={<FaJava />}
                percent={70}
                color="bg-orange-500"
              />
            </div>
            <div>
              <SkillBar
                skill="JavaScript"
                icon={<IoLogoJavascript />}
                percent={60}
                color="bg-orange-500"
              />
            </div>
            <div>
              <SkillBar
                skill="python"
                icon={<FaPython />}
                percent={50}
                color="bg-orange-500"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: isMobile ? 0 : -100,
              y: isMobile ? 0 : -100,
            }}
            whileInView={{
              opacity: 1,
              x: isMobile ? 0 : 100,
              y: isMobile ? 0 : 60,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className=" md:w-80  shadow-lg shadow-[#F16C59]/50 p-6 mb-20 md:mb-0 "
          >
            <div className="text-center p-4 text-white text-2xl font-bold font-[Manrope]">
              Web Technologies
            </div>

            <div>
              <SkillBar
                skill="HTML"
                icon={<FaHtml5 />}
                percent={90}
                color="bg-orange-500"
              />
            </div>
            <div>
              <SkillBar
                skill="CSS"
                icon={<FaCss3 />}
                percent={80}
                color="bg-orange-500"
              />
            </div>
            <div>
              <SkillBar
                skill="React JS"
                icon={<FaReact />}
                percent={70}
                color="bg-orange-500"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: isMobile ? 0 : -100,
              y: isMobile ? 0 : -100,
            }}
            whileInView={{
              opacity: 1,
              x: isMobile ? 0 : 100,
              y: isMobile ? 0 : 60,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 1.0 }}
            className="   md:w-80  shadow-lg shadow-[#F16C59]/50 p-6 "
          >
            <div className="text-center p-4 text-white text-2xl font-bold font-[Manrope]">
              Framework and Libraries
            </div>
            <div>
              <SkillBar
                skill="React Router"
                icon={<SiReactrouter />}
                percent={80}
                color="bg-orange-500"
              />
            </div>
            <div>
              <SkillBar
                skill="Tailwind CSS"
                icon={<RiTailwindCssFill />}
                percent={70}
                color="bg-orange-500"
              />
            </div>
            <div>
              <SkillBar
                skill="Bootstrap"
                icon={<FaBootstrap />}
                percent={60}
                color="bg-orange-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Skills;

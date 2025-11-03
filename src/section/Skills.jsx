import React from 'react'
import SkillBar from '../section/Progress.jsx';
import { motion } from "motion/react";
import { FaBootstrap, FaCss3, FaHtml5, FaJava, FaPython, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from 'react-icons/io';
import { SiReactrouter } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';






function Skills() {
  return (
    <>
      <div className=" bg-(--primary_color) p-28 ">
        <div className="text-center text-white text-4xl font-bold pb-4">
          Skills
        </div>
        <div className="flex gap-17 ">
          <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: 100, y: 100 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="w-80  shadow-lg shadow-[#F16C59]/50 p-6"
          >
            <div className="text-center p-4 text-white text-2xl font-bold font-[Manrope]">
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
            initial={{ x: 0, y: 0 }}
            animate={{ x: 100, y: 100 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="w-80  shadow-lg shadow-[#F16C59]/50 p-6"
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
            initial={{ x: 0, y: 0 }}
            animate={{ x: 100, y: 100 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="w-80  shadow-lg shadow-[#F16C59]/50 p-6"
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

export default Skills


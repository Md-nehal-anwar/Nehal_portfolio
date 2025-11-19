import React from 'react'
import { motion } from "motion/react";

function Project() {
  return (
    <>
      <div className="bg-(--primary_color) text-white p-8 md:p-0 md:px-4 md:py-20 md:pb-30 font-[Manrope] relative ">
        <div className="text-center text-white text-4xl font-bold pb-4">
          Project
        </div>
        <div className=" flex justify-center">
          <div className="relative  w-0 h-20 border-2  border-[#F16C59] items-center "></div>
          <div className=" absolute mt-22  w-2 h-2 border-4 rounded-full border-[#F16C59] items-center "></div>
        </div>
        <div className=" hidden md:flex  md:flex-row pt-10 justify-center ">
          <div className="md:w-1/2 md:pr-40 ">
            <motion.div
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 100, y: 60 }}
              transition={{ duration: 1.0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className=" shadow-lg shadow-[#F16C59]/50 p-2"
            >
              <img className="" src="/project_1_img.png" />
            </motion.div>
          </div>
          <div className="md:w-1/2 md:pr-48">
            <motion.div
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 100, y: 60 }}
              transition={{ duration: 1.0 }}
              className=""
            >
              <div>
                <div className="pb-4 pt-4 md:pt-0 text-white text-2xl font-bold font-[Manrope] text-justify ">
                  NGO (Humanhood)
                </div>
                <div>
                  <p className="text-white text-justify text-lg ">
                    This project represents a complete frontend upgrade of the
                    Human Hood NGO website. Originally developed using React and
                    CSS, it was converted to React + Vite + Tailwind CSS to
                    achieve faster build times, smoother development workflow,
                    and a cleaner, mobile-responsive interface.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="md:hidden py-10">
          <div className=" shadow-lg shadow-[#F16C59]/50 p-2 ">
            <img className="" src="/project_1_img.png" />
          </div>
          <div>
            <div className="pb-4 pt-8  text-white text-2xl font-bold font-[Manrope] text-justify ">
              <div className='text-center'> NGO (Humanhood)</div>
            </div>
            <div>
              <p className="text-white text-justify text-lg ">
                This project represents a complete frontend upgrade of the Human
                Hood NGO website. Originally developed using React and CSS, it
                was converted to React + Vite + Tailwind CSS to achieve faster
                build times, smoother development workflow, and a cleaner,
                mobile-responsive interface.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project
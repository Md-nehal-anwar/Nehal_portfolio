import React from 'react'
import { RiTailwindCssLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";

function About() {
  return (
    <>
      <div className="bg-(--primary_color) font-[Manrope] block p-8 md:flex md:px-28 pt-6 md:pt-24">
        <div>
          <p className=" md:hidden text-white text-center  text-4xl font-bold pb-4 md:pb-6 ">
            About Me
          </p>
        </div>
        <div className=" md:hidden mb-10 md:mb-0 flex justify-center">
          <div className="relative  w-0 h-20 border-2  border-[#F16C59] items-center "></div>
          <div className=" absolute mt-22  w-2 h-2 border-4 rounded-full border-[#F16C59] items-center "></div>
        </div>
        <div className=" md:w-1/2 text-white pt-4 md:pt-0">
          <div className="text-white flex items-center gap-10 pb-4">
            <div className="h-16 w-0 border-[2px] border-[#F16C59] "></div>
            <div>
              <img className="w-30 md:w-20" src="/development.png" />
            </div>
            <div className=" text-2xl font-semibold">
              {" "}
              Front-End development
            </div>
          </div>
          <div className=" absolute ml-[-2.5px] mt-[-15px] w-2 h-2 border-4 rounded-full border-[#F16C59] items-center "></div>
          <div className="text-white flex items-center gap-10 pb-4">
            <div className="h-16 w-0 border-[2px] border-[#F16C59] "></div>
            <div>
              <FaReact size={70} />
            </div>
            <div className=" text-2xl font-semibold  px-2"> ReactJs</div>
          </div>
          <div className=" absolute ml-[-2.5px] mt-[-12px] w-2 h-2 border-4 rounded-full border-[#F16C59] items-center "></div>
          <div className="text-white flex items-center gap-10 pb-4">
            <div className="h-16 w-0 border-[2px] border-[#F16C59] "></div>
            <div>
              <RiTailwindCssLine size={70} />
            </div>
            <div className=" text-2xl font-semibold px-2"> Tailwind CSS</div>
          </div>
        </div>
        <div>
          <div>
            <p className="hidden md:block text-white text-4xl font-bold pb-4 ">
              About Me
            </p>
          </div>
          <div className="pt-10 md:pt-0">
            {" "}
            <p className="text-lg max-w-2xl text-white text-justify ">
              Hi, I’m <span className="font-semibold ">Md Nehal Anwar</span>, a
              passionate frontend developer from India. I specialize in building
              responsive and interactive web applications using{" "}
              <span className="font-semibold">React JS</span>,
              <span className="font-semibold"> Tailwind CSS</span>, and modern
              JavaScript.
            </p>
            <p className="text-lg mt-4 max-w-2xl text-white text-justify">
              I enjoy solving coding challenges, learning new web technologies,
              and creating intuitive UI/UX designs. Currently, I am working on
              personal projects to enhance my skills and contribute to the
              frontend development community.
            </p>
            <p className="text-lg mt-4 max-w-2xl text-white">
              Feel free to explore my portfolio and{" "}
              <span className="text-(--secondary_color) font-semibold">
                contact me
              </span>{" "}
              for collaboration opportunities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
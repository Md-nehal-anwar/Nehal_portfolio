import React from "react";
import Marquee from "react-fast-marquee";
import { TypeAnimation } from "react-type-animation";


function Home() {
  return (
    <>
      <div className=" p-8 bg-(--primary_color) pt-10  ">
        <div className="pt-20 md:flex md:px-20 md:pt-24 ">
          <div className="md:w-1/2 ">
            <div>
              <p className="text-white text-xl font-bold font-['Manrope'] ">
                Hello, I'm
              </p>
            </div>
            <div className=" md:w-70 py-2">
              <Marquee
                speed={50}
                gradient={false} // disables fade edges
                pauseOnHover={true}
              >
                <p className="text-2xl md:text-3xl font-extrabold text-(--secondary_color)  font-['Manrope'] h-10 ">
                  Md Nehal Anwar
                </p>
              </Marquee>
            </div>
            <div className="text-white md:text-2xl text-lg font-semibold font-['Manrope']  ">
              And I'm a{" "}
              <TypeAnimation
                sequence={["Front-End Developer", 2000, "", 1000]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="text-(--secondary_color) font-['Manrope'] "
              />
            </div>
            <div className="py-2">
              <p className="text-white text-lg text-justify font-['Manrope']  ">
                Hi, I’m Nehal Anwar, a passionate Front-End Developer
                specialized in translating design concepts into seamless,
                responsive, and interactive web experiences using HTML, CSS,
                JavaScript, React JS, and Tailwind CSS.
              </p>
            </div>
            <div className=" w-28 py-2 mt-2 ">
              <a
                className=" flex justify-center items-center bg-(--secondary_color)  text-white h-10 font-['Manrope'] px-2  hover:cursor-pointer hover:bg-white hover:border-2 hover:border-(--secondary_color) hover:text-(--secondary_color) mt-2  "
                href="/my_resume.pdf"
                target="_blank"
                
              >
                My Resume
              </a>
            </div>
          </div>
          <div className=" md:w-1/2 flex md:block justify-center items-center md:px-80 md:mt-[-70px] md:ml-[-110px]">
            <div className="w-110 h-110 bg-[radial-gradient(circle_at_center,_#352B31_40%,_#121E28_70%,_#0b1218_100%)] py-20 px-15 rounded-full justify-center items-center flex">
              <div className="relative h-70 w-70 border-24 border-[#F16C59] rounded-full"></div>
              <img
                className="absolute   h-100"
                src="nehalimg.png
                "
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className=" md:hidden flex py-2 justify-between  bg-[#17232D] font-bold text-xl font-['Manrope'] text-[#A0A0A0]  opacity-90 ">
              <p> HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
            </div>
            <div className=" md:hidden flex justify-between pb-2 bg-[#17232D] font-bold text-xl font-['Manrope'] text-[#A0A0A0]  opacity-90 ">
              <p>Java</p>
              <p>ReactJs</p>
              <p>Tailwind CSS</p>
            </div>
          </div>
          {/* this is for web */}
          <div className=" hidden  bg-[#17232D] md:flex justify-around p-6 font-bold text-xl font-['Manrope'] text-[#A0A0A0]  opacity-40 ">
            <p> HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>Java</p>
            <p>ReactJs</p>
            <p>Tailwind CSS</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

import React from "react";
import { motion } from "motion/react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

function Achievement() {
  return (
    <>
      <div className="bg-(--primary_color) text-white p-8 md:p-4 md:pb-28 font-[Manrope] ">
        <div className="text-center text-white text-4xl font-bold pb-4">
          Experience & Achievements
        </div>
        <div className=" flex justify-center mb-10 md:mb-0">
          <div className="relative  w-0 h-20 border-2  border-[#F16C59] items-center "></div>
          <div className=" absolute mt-22  w-2 h-2 border-4 rounded-full border-[#F16C59] items-center "></div>
        </div>
        <div className="hidden  md:flex gap-10 pr-28">
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 100, y: 60 }}
            transition={{ duration: 1.0 }}
            whileHover={{ scale: 1.1 }}
            className="shadow-lg shadow-[#F16C59]/50 p-6 w-156  text-justify"
          >
            <div>
              <div className="text-2xl font-semibold text-center ">
                Experience
              </div>
              <div>
                <div className="flex ">
                  <div className="mr-2 text-(--secondary_color)  ">
                    <IoIosArrowDroprightCircle size={30} />
                  </div>
                  <div className="text-xl font-bold">
                    {" "}
                    Software Development Intern — capanicus(8 Weeks)
                  </div>
                </div>
                <div>
                  <ul className="list-disc pl-14 mt-2 text-white  max-w-prose text-lg">
                    <li>
                      Worked on frontend development using <b>reactJs</b> and{" "}
                      <b>tailwind css</b>.
                    </li>
                    <li>
                      Learned version control nd collaborated using Git &
                      GitHub.
                    </li>
                    <li>
                      Gained experience in writing clean and structured code.
                    </li>
                  </ul>
                </div>

                <div className="flex items-center mt-2">
                  <div className="mr-2 text-(--secondary_color)  ">
                    <IoIosArrowDroprightCircle size={30} />
                  </div>
                  <div className="text-xl font-bold ">
                    {" "}
                    Cricket Branch Captain
                  </div>
                </div>
                <div>
                  <ul className="list-disc pl-14 mt-2 text-white text-justify text-lg">
                    <li>Led a team of 11+ players in inter-college matches.</li>
                    <li>
                      Built leadership, planning, and communication skills.
                    </li>
                  </ul>
                </div>
                <div className="flex  mt-2">
                  <div className="mr-2 text-(--secondary_color)  ">
                    <IoIosArrowDroprightCircle size={30} />
                  </div>
                  <div className="text-xl font-bold ">
                    {" "}
                    Orientation Program Volunteer — Jamia Millia Islamia
                  </div>
                </div>
                <div>
                  <ul className="list-disc pl-14 mt-2 text-white text-justify text-lg">
                    <li>
                      Assisted new students during admission and campus guidance
                      events.
                    </li>
                    <li>
                      Coordinated with management and handled student support.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
          {/* //card2********************************************************* */}
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 100, y: 60 }}
            transition={{ duration: 1.0 }}
            whileHover={{ scale: 1.1 }}
            className="shadow-lg shadow-[#F16C59]/50 p-6 w-156 "
          >
            <div className="text-justify">
              <div className="text-center text-white text-2xl font-semibold">
                Achievements
              </div>
              <div className="">
                <div className="flex items-center">
                  <div className="mr-2 text-(--secondary_color)  ">
                    <IoIosArrowDroprightCircle size={30} />
                  </div>
                  <div className="text-xl font-bold">
                    Research Paper Co-Author (2025)
                  </div>
                </div>
                <div>
                  <ul className="list-disc pl-14 mt-2 text-white  text-lg">
                    <li>
                      Co-authored a research paper titled “Implementation of an
                      Enhanced Alumni Network System” affiliated with the
                      Section of Computer Engineering, University Polytechnic,
                      Jamia Millia Islamia.
                    </li>
                  </ul>
                </div>

                <div className="flex items-center mt-2">
                  <div className="mr-2 text-(--secondary_color)  ">
                    <IoIosArrowDroprightCircle size={30} />
                  </div>
                  <div className="text-xl font-bold ">
                    {" "}
                    Volunteer – Orientation Program (2024)
                  </div>
                </div>
                <div>
                  <ul className="list-disc pl-14 mt-2 text-white  text-lg">
                    <li>
                      Helped in organizing and managing student orientation
                      events, guiding new students, and supporting event
                      coordination and discipline.
                    </li>
                  </ul>
                </div>
                <div className="flex items-center mt-2">
                  <div className="mr-2 text-(--secondary_color)  ">
                    <IoIosArrowDroprightCircle size={30} />
                  </div>
                  <div className="text-xl font-bold ">
                    {" "}
                    Developed Alumni Network Website (2025)
                  </div>
                </div>
                <div>
                  <ul className="list-disc pl-14 mt-2 text-white  text-lg">
                    <li>
                      Built a fully functional alumni networking system that
                      allows alumni registration, communication, and event
                      updates for the institution.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* mobile nav */}
        <div className="md:hidden flex flex-col gap-10 px-3">

  {/* ===== Experience Section ===== */}
  <div className="shadow-lg shadow-[#F16C59]/50 p-5 rounded-xl">
    <div className="text-2xl font-semibold text-center mb-4">
      Experience
    </div>

    {/* Software Development Intern */}
    <div className="flex items-start">
      <div className="mr-2 text-(--secondary_color)">
        <IoIosArrowDroprightCircle size={26} />
      </div>
      <div className="text-base font-bold leading-snug">
        Software Development Intern — Capanicus (8 Weeks)
      </div>
    </div>
    <ul className="list-disc pl-7 mt-2 space-y-1 text-sm leading-relaxed">
      <li>
        <p className="ios-justify">
          Worked on frontend development using <b>ReactJS</b> and <b>Tailwind CSS</b>.
        </p>
      </li>
      <li>
        <p className="ios-justify">
          Learned version control and collaborated using Git & GitHub.
        </p>
      </li>
      <li>
        <p className="ios-justify">
          Gained experience in writing clean and structured code.
        </p>
      </li>
    </ul>

    {/* Cricket Branch Captain */}
    <div className="flex items-start mt-4">
      <div className="mr-2 text-(--secondary_color)">
        <IoIosArrowDroprightCircle size={26} />
      </div>
      <div className="text-base font-bold leading-snug">
        Cricket Branch Captain
      </div>
    </div>
    <ul className="list-disc pl-7 mt-2 space-y-1 text-sm leading-relaxed">
      <li>
        <p className="ios-justify">
          Led a team of 11+ players in inter-college matches.
        </p>
      </li>
      <li>
        <p className="ios-justify">
          Built leadership, planning, and communication skills.
        </p>
      </li>
    </ul>

    {/* Orientation Volunteer */}
    <div className="flex items-start mt-4">
      <div className="mr-2 text-(--secondary_color)">
        <IoIosArrowDroprightCircle size={26} />
      </div>
      <div className="text-base font-bold leading-snug">
        Orientation Program Volunteer — Jamia Millia Islamia
      </div>
    </div>
    <ul className="list-disc pl-7 mt-2 space-y-1 text-sm leading-relaxed">
      <li>
        <p className="ios-justify">
          Assisted new students during admission and campus guidance events.
        </p>
      </li>
      <li>
        <p className="ios-justify">
          Coordinated with management and handled student support.
        </p>
      </li>
    </ul>
  </div>

  {/* ===== Achievements Section ===== */}
  <div className="shadow-lg shadow-[#F16C59]/50 p-5 rounded-xl">
    <div className="text-center text-2xl font-semibold mb-4">
      Achievements
    </div>

    {/* Research Paper */}
    <div className="flex items-start">
      <div className="mr-2 text-(--secondary_color)">
        <IoIosArrowDroprightCircle size={26} />
      </div>
      <div className="text-base font-bold leading-snug">
        Research Paper Co-Author (2025)
      </div>
    </div>
    <ul className="list-disc pl-7 mt-2 space-y-1 text-sm leading-relaxed">
      <li>
        <p className="ios-justify">
          Co-authored a research paper titled “Implementation of an Enhanced Alumni
          Network System” with the Section of Computer Engineering, University
          Polytechnic, Jamia Millia Islamia.
        </p>
      </li>
    </ul>

    {/* Orientation Volunteer Achievement */}
    <div className="flex items-start mt-4">
      <div className="mr-2 text-(--secondary_color)">
        <IoIosArrowDroprightCircle size={26} />
      </div>
      <div className="text-base font-bold leading-snug">
        Volunteer – Orientation Program (2024)
      </div>
    </div>
    <ul className="list-disc pl-7 mt-2 space-y-1 text-sm leading-relaxed">
      <li>
        <p className="ios-justify">
          Helped organize and manage student orientation events, guiding new
          students and supporting event coordination and discipline.
        </p>
      </li>
    </ul>

    {/* Alumni Website */}
    <div className="flex items-start mt-4">
      <div className="mr-2 text-(--secondary_color)">
        <IoIosArrowDroprightCircle size={26} />
      </div>
      <div className="text-base font-bold leading-snug">
        Developed Alumni Network Website (2025)
      </div>
    </div>
    <ul className="list-disc pl-7 mt-2 space-y-1 text-sm leading-relaxed">
      <li>
        <p className="ios-justify">
          Built a fully functional alumni networking system that supports alumni
          registration, communication, and event updates.
        </p>
      </li>
    </ul>
  </div>

</div>

      </div>
    </>
  );
}

export default Achievement;

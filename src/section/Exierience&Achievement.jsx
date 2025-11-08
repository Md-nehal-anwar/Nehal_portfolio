import React from "react";
import { motion } from "motion/react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

function Achievement() {
  return (
    <>
      <div className="bg-(--primary_color) text-white p-4 pb-28 font-[Manrope] ">
        <div className="text-center text-white text-4xl font-bold pb-4">
          Experience & Achievements
        </div>
        <div className=" flex gap-10 pr-28">
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 100, y: 60 }}
            transition={{ duration: 1.0 }}
            whileHover={{ scale: 1.1 }}
            className="shadow-lg shadow-[#F16C59]/50 p-6 w-156 "
          >
            <div>
              <div className="text-2xl font-semibold text-center">
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
                  <ul className="list-disc pl-14 mt-2 text-white text-justify text-lg">
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
            <div>
              <div className="text-center text-white text-2xl font-semibold">
                Achievements
              </div>
              <div>
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
      </div>
    </>
  );
}

export default Achievement;

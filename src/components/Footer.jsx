import React from 'react'
import { CgMail } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="bg-[#17232D] text-[#A0A0A0] py-6 text-center font-[Manrope]">
        <h2 className="text-2xl font-bold">Md Nehal Anwar</h2>

        <p className="mt-1 text-xl">Frontend Developer | React Enthusiast</p>

        <div className="mt-2 flex justify-center gap-6 text-lg">
          <a
            href="https://github.com/Md-nehal-anwar"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/md-nehal-anwar-862796269"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={40} />
          </a>
          <a href="mailto:mdc775850@gmail.com" target="_blank" rel="noreferrer">
            <CgMail size={40} />
          </a>
          <a href="https://www.instagram.com/nehal_ibn_anwar?igsh=MXdkYTlzZzBiYnpmMw==&utm_source=ig_contact_invite" target="_blank" rel="noreferrer">
            <FaInstagramSquare size={40} />
          </a>
        </div>

        <p className="mt-4 text-xs text-gray-500">
          © {new Date().getFullYear()} Nehal. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;
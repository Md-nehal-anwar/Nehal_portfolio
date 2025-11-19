import React, { useRef } from "react";
import emailjs from "@emailjs/browser"; // ✅ Important: ye import zaroor hona chahiye

function Contact() {
  // ✅ Controlled inputs ke liye state
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // ✅ form ke reload hone se rokta hai

    emailjs
      .sendForm("service_bd38vkh", "template_m3pk2cj", form.current, {
        publicKey: "2LnxVfzHI7ci0V9Wb",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully ✅"); // ✅ user feedback
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message ❌"); // ✅ user feedback
        }
      );
  };

  return (
    <>
      <div className="bg-(--primary_color) text-white p-8 md:p-0 md:px-28 pt-10 md:pt-14  font-[Manrope]">
      <div className="text-4xl font-bold">Contact</div>
      
        {/* ✅ Form with ref and submit */}
        <form ref={form} onSubmit={sendEmail}>
          <div className=" md:flex">
            {/* ---------- Left Section ---------- */}
            <div className=" md:w-1/2 py-10">
              <div className="text-6xl font-bold">
                <p>Have a project?</p>
                <p>Let's talk!</p>
              </div>

              <div className="hidden md:block py-10">
                <button
                  className="  h-10 px-6 bg-(--secondary_color) text-white font-semibold hover:bg-white hover:text-(--secondary_color) hover:border-2 hover:border-(--secondary_color)"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>

            <div className="flex md:w-1/2  md:pl-60">
              <div>
                {/* Name Field */}
                <div className="mb-8 md:mb-0 md:p-4">
                  <label className="text-gray-500 text-xl font-semibold">
                    Name
                  </label>
                  <input
                    className="bg-transparent border-b-2 border-gray-500 focus:border-(--secondary_color) outline-none w-86 md:w-98 text-white"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                {/* Email Field */}
                <div className=" mb-8 md:mb-0  md:p-4 text-gray-500">
                  <label className="text-xl font-semibold">Email</label>
                  <input
                    className="bg-transparent outline-none border-b-2 border-gray-500 focus:border-(--secondary_color) w-86 md:w-98 text-white"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Message Field */}
                <div className="md:p-4">
                  <label className="text-gray-500 text-xl font-semibold">
                    Message
                  </label>

                  <textarea
                    className="border-b-2 w-86 md:w-98 border-gray-500 focus:border-(--secondary_color) outline-none bg-transparent text-white"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="py-10">
            <button
              className="  md:hidden h-10 px-6 md:ml-4 bg-(--secondary_color) text-white font-semibold hover:bg-white hover:text-(--secondary_color) hover:border-2 hover:border-(--secondary_color)"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;

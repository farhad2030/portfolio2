import React from "react";
import { GrContactInfo } from "react-icons/gr";
import { IoMdCodeDownload } from "react-icons/io";
import ContactForm from "../sections/ContactForm";
import ProjectsSection from "../sections/ProjectsSection";
const Home = () => {
  return (
    <div className="px-10">
      <div class="grid place-items-center  grid-cols-1 md:grid-cols-2 gap-4 min-h-screen ">
        <div className="text-center ">
          <h1 className="text-3xl font-bold">Md Mazharul Islam Farhad</h1>

          <p className="m-5">
            I have an good figure in web development . Do you need a professonal
            website you can choose me . To hire me<b> HIT</b> the{" "}
            <b>CONTACT ME</b> button.
          </p>
          <div>
            <label for="contact-form" className="btn m-5">
              CONTACT ME
              <GrContactInfo className="m-5 " />
            </label>
            <a
              href="https://drive.google.com/file/d/1740W-lLXPCaIS3xa8UJt8a6btZWoWwPG/view?usp=sharing"
              target="_blank"
            >
              <button className="btn m-5">
                MY RESUME
                <IoMdCodeDownload className="m-5 " />
              </button>
            </a>
          </div>
        </div>
        <div className="text-center py-5">
          <div class="avatar">
            <div class="w-30 mask mask-squircle">
              <img src="farhad.png" />
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
      <ProjectsSection />
    </div>
  );
};

export default Home;

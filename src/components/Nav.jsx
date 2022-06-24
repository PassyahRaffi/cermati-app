import React from "react";
import imgNavbar from "../assets/images/work-desk__dustin-lee.jpg";
import logo from "../assets/images/y-logo-white.png";

export default function Nav() {
  return (
    <>
      <nav className="bg-dropColor d:w-full m:w-full text-white">
        <div className="absolute d:w-[50px] m:w-[25px] d:mx-[25px] m:mx-[15px] my-5">
          <img className="" src={logo} alt="" />
        </div>
        <div className="absolute mx-[5px] d:top-[150px] m:top-[70px] w-full">
          <div className="flex justify-center items-center text-center">
            <div className="z-10">
              <h2 className="d:text-[50px] m:text-[25px] m:px-[10px]">
                Hello! I'm Passyah Raffi
                <br />
                Consult, Design, and Develop Websites{" "}
              </h2>
              <p className="d:text-[25px] m:text-[14px]">
                Have something great in mind? Feel free to contact me.
                <br />
                I'll help you to make it happen. Let's Make Contact
              </p>
              <div className="flex justify-center uppercase w-full d:text-[25px] m:text-[12.5px] d:my-[40px] m:my-[20px]">
                <div className="hover:cursor-pointer hover:font-bold hover:border-dropColor d:w-[300px] m:w-[150px] d:py-2 m:py-[5px] d:px-2 m:[px-3px] border-white d:border-2 m:border-[1px]">
                  let's make contact
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-[0.5]">
          <img className="w-full d:h-[80vh] m:h-[45vh]" src={imgNavbar} alt="" />
        </div>
      </nav>
    </>
  );
}

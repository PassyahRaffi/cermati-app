import React from "react";
import AlertEmail from "./alerts/AlertEmail";

export default function Footer() {
  return (
    <>
      <footer className="bg-dropColor text-white w-full flex justify-center d:py-[50px] m:py-[25px] m:px-[45px]  text-center">
        Good luck and may the force be with you! © 2019 Cermati.com
      </footer>
      <AlertEmail />
    </>
  );
}

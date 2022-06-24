import React, { useState } from "react";

export default function AlertCookie({ children }) {
  const [show, setShow] = useState(true);

  const renderElAlert = function () {
    return React.cloneElement(children);
  };

  return (
    <>
      <div
        className={`${
          show
            ? `m:flex-wrap m:px-3 m:py-3 d:flex d:justify-center d:gap-[10px] d:items-center`
            : `hidden`
        }`}
      >
        <div className="m:text-[13px] d:text-[18px] d:w-[40rem]  m:mb-2">
          <div>
            By accessing and using this website, you acknowledge that you have
            read and understand our{" "}
            <a className="text-blue-700" href="##">
              Cookie Policy
            </a>{" "}
            ,{" "}
            <a className="text-blue-700" href="##">
              Privacy Policy
            </a>{" "}
            , and our{" "}
            <a className="text-blue-700" href="##">
              Terms of Service
            </a>{" "}
            .
          </div>
        </div>
        <button
          className="bg-blue-700 hover:bg-blue-600 rounded-[3px] text-white m:text-[13px] d:text-[12px] m:px-3 d:px-[10px] m:py-1 d:py-[5px] d:right-[390px] d:top-[0px] d:my-4"
          onClick={() => setShow(false)}
        >
          <span className="d:text-[18px]">Got it</span>
        </button>
      </div>
      {children ? renderElAlert() : "Loading ..."}
    </>
  );
}

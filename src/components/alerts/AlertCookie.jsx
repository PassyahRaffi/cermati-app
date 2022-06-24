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
          show ? `flex d:items-center m:px-3 m:py-3 d:justify-center d:gap-10 d:py-2` : `hidden`
        }`}
      >
        <div className="m:block d:flex">
          <div className="flex items-center m:text-[13px] d:text-[18px] d:w-[40rem]  m:mb-2">
            By accessing and using this website, you acknowledge that you have
            read and understand our Cookie Policy, Privacy Policy, and our Terms
            of Service.
          </div>
          <button
            className="bg-blue-700 rounded-[3px] text-white m:text-[13px] d:text-[12px] m:px-3 d:px-[10px] m:py-1 d:py-[5px] d:right-[390px] d:top-[0px] d:my-4"
            onClick={() => setShow(false)}
          >
            <span className="d:text-[18px]">Got it</span>
          </button>
        </div>
      </div>
      {children ? renderElAlert() : "Loading ..."}
    </>
  );
}

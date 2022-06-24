import React, { useState } from "react";

export default function AlertEmail({ children }) {
  const [show, setShow] = useState(true);

  const renderElAlert = function () {
    return React.cloneElement(children);
  };

  return (
    <>
      <div className="relative">
        <div
          className={`${show ? `flex opacity-[0.9]` : `hidden`}`}
        >
          <div className="absolute m:top-[-39.5vh] d:top-[-39vh] bg-blue-400 py-5 px-8 m:mb-[5.5rem] d:h-[16rem] d:w-[38rem] dv:w-[46rem]">
            <button
              className="hover:text-white absolute font-bold text-[25px] right-[20px] top-0"
              onClick={() => setShow(false)}
            >
              x
            </button>
            <h1 className="m:text-[20px] d:text-[25px] dv:text-[30px] font-bold pt-3 pb-3">
              {" "}
              Get latest updates in web technologies
            </h1>
            <p className="m:d:text-[15px] d:text-[18px]">
              I write articles related to web technologies, such as design
              trends, development tools, UI/UX case studies and reviews, and
              more. Sign up to my newsletter to get them all.
            </p>
            <div className="flex justify-between mt-5 gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-3 bg-white border border-slate-300 rounded-[5px] text-[17px] placeholder-slate-400
                                   focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                   disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                   invalid:border-blue-500 invalid:text-black
                                   focus:invalid:border-blue-500 focus:invalid:ring-blue-500"
              />
              <span className="flex items-center font-bold justify-center bg-orange-400 hover:bg-orange-300 hover:cursor-pointer text-white m:w-[180px] d:w-[150px] h-[40px] rounded-[5px] m:px-[7px]">
                Count me in!
              </span>
            </div>
          </div>
        </div>
      </div>
      {children ? renderElAlert() : ""}
    </>
  );
}

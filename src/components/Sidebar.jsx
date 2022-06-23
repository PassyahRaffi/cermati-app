import React from "react";
import { ImBubbles4 } from "react-icons/im";
import { FaPaintBrush } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { MdOutlineManageSearch } from "react-icons/md";
import { RiLineChartFill } from "react-icons/ri";

export default function Sidebar() {
  return (
    <>
      <main className="bg-gray-100">
        <div className="text-center py-5 bg-gray-100">
          <h1 className="d:text-[50px] m:text-[25px] py-5 font-bold">
            How Can I Help You?
          </h1>
          <p className="d:text-[25px] m:px-[15px]">
            Our work then targeted, best practices outcomes social innovation
            synergy. <br />
            Venture philanthropy, revolutionary inclusive policymaker relief.
            User-centered <br />
            program areas scale.
          </p>
        </div>
        <div className="flex justify-center d:px-[25px] m:px-[15px] d:py-10 m:py-5 bg-gray-100">
          <div className="grid gap-[25px] m:gap-6 d:grid-cols-3 d:grid-rows-2">
            <div className="px-[15px] py-[20px] border-gray-400 border-[1px]">
              <div className="flex justify-between">
                <div className="text-[25px] font-bold">Consult</div>
                <ImBubbles4 className="absolute d:left-[395px] m:right-[30px] w-[40px] h-[30px] text-gray-400" />
              </div>
              <p className="py-[8px] text-[15.3px]">
                {" "}
                Co-create, design thinking; strengthen infrastructure resist
                granular. Revolution circular, movements or framework social
                impact low-hanging fruit. Save the world compelling
                revolutionary progress.
              </p>
            </div>
            <div className="px-[15px] py-[20px] border-gray-400 border-[1px]">
              <div className="flex justify-between">
                <div className="text-[25px] font-bold">Design</div>
                <FaPaintBrush className="absolute d:left-[845px] m:right-[30px] w-[40px] h-[30px] text-gray-400" />
              </div>
              <p className="py-[8px] text-[15.3px]">
                {" "}
                Policymaker collaborates collective impact humanitarian shared
                value vocabulary inspire issue outcomes agile. Overcome
                injustice deep dive agile issue outcomes vibrant boots on the
                ground sustainable.
              </p>
            </div>
            <div className="px-[15px] py-[20px] border-gray-400 border-[1px]">
              <div className="flex justify-between">
                <div className="text-[25px] font-bold">Develop</div>
                <BsBoxSeam className="absolute d:right-[40px] m:right-[30px] w-[40px] h-[30px] text-gray-400" />
              </div>
              <p className="py-[8px] text-[15.3px]">
                {" "}
                Revolutionary circular, movements a or impact framework social
                impact low- hanging. Save the compelling revolutionary inspire
                progress. Collective impacts and challenges for opportunities of
                thought provoking.
              </p>
            </div>
            <div className="px-[15px] py-[20px] m:right-[30px] border-gray-400 border-[1px]">
              <div className="flex justify-between">
                <div className="text-[25px] font-bold">Marketing</div>
                <HiOutlineSpeakerphone className="absolute d:left-[395px] m:right-[30px] w-[40px] h-[35px] text-gray-400" />
              </div>
              <p className="py-[8px] text-[15.3px]">
                {" "}
                Peaceful; vibrant paradigm, collaborative cities. Shared
                vocabulary agile, replicable, effective altruism youth. Mobilize
                commitment to overcome injustice resilient, uplift social
                transparent effective.
              </p>
            </div>
            <div className="px-[15px] py-[20px] border-gray-400 border-[1px]">
              <div className="flex justify-between">
                <div className="text-[25px] font-bold">Manage</div>
                <MdOutlineManageSearch className="absolute d:left-[845px] m:right-[30px] w-[40px] h-[40px] text-gray-400" />
              </div>
              <p className="py-[8px] text-[15.3px]">
                {" "}
                Change-makers innovation or shared unit of analysis. Overcome
                injustice outcomes strategize vibrant boots on the ground
                sustainable. Optimism, effective altruism invest optimism
                corporate social.
              </p>
            </div>
            <div className="px-[15px] py-[20px] border-gray-400 border-[1px]">
              <div className="flex justify-between">
                <div className="text-[25px] font-bold">Evolve</div>
                <RiLineChartFill className="absolute d:right-[40px] m:right-[30px] w-[40px] h-[35px] text-gray-400" />
              </div>
              <p className="py-[8px] text-[15.3px]">
                {" "}
                Activate catalyze and impact contextualize humanitarian. Unit of
                analysis overcome injustice storytelling altruism. Thought
                leadership mass incarceration. Outcomes big data, fairness,
                social game-changer.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

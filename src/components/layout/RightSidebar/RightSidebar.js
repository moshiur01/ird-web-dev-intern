import Image from "next/image";
import { useState } from "react";

const RightSidebar = () => {
  const [activeTab, setActiveTab] = useState(false);

  return (
    <div className="w-[300px] h-[812px] col-span-2">
      {/* user profile  */}
      <div className="w-[67.50px] h-[45px] ml-auto mb-8  ">
        <div className="flex  gap-2 ">
          <Image src="/assets/avatar.png" alt="avatar" width={45} height={45} />
          <div className="my-auto">
            <Image
              src="/assets/Polygon.png"
              alt="avatar"
              width={12}
              height={9}
            />
          </div>
        </div>
      </div>

      {/* below avatar  */}
      <div className=" bg-white rounded-[32px] border border-neutral-200  h-[772px]">
        {/* settings  */}
        <div className="text-center text-neutral-700 text-xl font-bold font-['Inter'] mt-9">
          Settings
        </div>

        {/* lang setting  */}
        <div className="w-64 h-14 bg-[#F7F8FA] mx-auto flex items-center gap-3 mt-6 text-zinc-500 text-base font-normal font-['Inter']  relative ">
          <div className="ms-4">
            {/* img background  */}
            <Image
              className="ml-[-4px]"
              src="/assets/Ellipse-1.png"
              width={38}
              height={38}
              alt="language icon"
            />
            <Image
              className="absolute top-4 left-[-10]"
              src="/assets/lang.png"
              width={24}
              height={24}
              alt="language icon"
            />
          </div>
          <div>Language Settings</div>
        </div>

        {/* General setting  */}
        <div className="w-64 h-14 bg-[#F7F8FA] mx-auto flex items-center gap-3 mt-6 text-zinc-500 text-base font-normal font-['Inter']  relative ">
          <div className="ms-4">
            {/* img background  */}
            <Image
              className="ml-[-4px]"
              src="/assets/Ellipse-1.png"
              width={38}
              height={38}
              alt="language icon"
            />
            <Image
              className="absolute top-4 left-[-10]"
              src="/assets/general-set.png"
              width={24}
              height={24}
              alt="language icon"
            />
          </div>
          <div>General Settings</div>
        </div>

        {/* Font setting  */}
        <div className="w-64 h-14 bg-[#F7F8FA] mx-auto flex items-center gap-3 mt-6 text-zinc-500 text-base font-normal font-['Inter']  relative ">
          <div className="ms-4">
            {/* img background  */}
            <Image
              className="ml-[-4px]"
              src="/assets/Ellipse-1.png"
              width={38}
              height={38}
              alt="language icon"
            />
            <Image
              className="absolute top-4 left-[-10]"
              src="/assets/font-set.png"
              width={24}
              height={24}
              alt="language icon"
            />
          </div>
          <div>Font Settings</div>
        </div>

        {/* Appearance settings */}
        <div
          className={
            activeTab === true
              ? " cursor-pointer w-64 h-14 bg-[#F7F8FA] mx-auto flex items-center gap-3 mt-6 relative border-l-[5px]  rounded-md border-green-600 "
              : " cursor-pointer w-64 h-14 bg-[#F7F8FA] mx-auto flex items-center gap-3 mt-6 relative text-zinc-500 text-base font-normal font-['Inter']"
          }
          onClick={() => {
            setActiveTab(!activeTab);
          }}
        >
          <div className="ms-4">
            {/* img background  */}
            <Image
              className="ml-[-4px]"
              src="/assets/Ellipse-1.png"
              width={38}
              height={38}
              alt="language icon"
            />
            <Image
              className="absolute top-4 left-[-10]"
              src="/assets/font-set.png"
              width={24}
              height={24}
              alt="language icon"
            />
          </div>
          <div
            className={
              activeTab === true
                ? "text-green-600 text-base font-medium font-['Inter']"
                : ""
            }
          >
            Appearance Settings
          </div>
        </div>

        {/* night mode  */}
        {activeTab && (
          <div className="w-64 h-[97px] mx-auto bg-white rounded-[5px] border border-neutral-200  border-t-0 flex justify-between items-center">
            <div className="text-gray-400 text-base font-semibold ml-4">
              Night Mode
            </div>
            <div className=" mr-4 cursor-pointer">
              <Image
                src="/assets/toggle-mode.png"
                width={24}
                height={24}
                alt="language icon"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RightSidebar;

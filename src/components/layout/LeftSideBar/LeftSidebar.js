import Image from "next/image";
import NavigationButtons from "./NavigationButtons";

const LeftSidebar = () => {
  return (
    <div className="w-[100px] h-[847px] bg-white rounded-3xl flex flex-col justify-between">
      {/* logo  */}
      <div className="mx-auto mt-8">
        <Image
          src="/assets/logo.png"
          width={90}
          height={90}
          alt="logo of the website"
        />
      </div>

      {/* navigation btns  */}
      <NavigationButtons />

      {/* support btn  */}
      <div className="w-[57px] h-14 bg-green-600 rounded-[10px] shadow flex justify-center items-center mx-auto mb-10">
        <Image
          src="/assets/support.png"
          width={21.19}
          height={8}
          alt="support button"
        />
      </div>
    </div>
  );
};

export default LeftSidebar;

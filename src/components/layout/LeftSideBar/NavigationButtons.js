import Image from "next/image";

const NavigationButtons = () => {
  return (
    <div className=" space-y-5 mx-auto">
      {/* home btn  */}
      <div className="w-[38px] h-[38px] relative cursor-pointer group">
        <p className=" hidden absolute left-11 px-2 py-1 top-[3px] bg-green-600 rounded-xl font-medium text-white   group-hover:block">
          Home
        </p>
        <div className="w-[38px] h-[38px] left-0 top-0 absolute bg-slate-100 rounded-full" />
        <div className="w-5 h-5 left-[9px] top-[9px] absolute">
          <div className="w-5 h-5 left-0 top-0 absolute ">
            <Image
              src="/assets/home-1.png"
              width={21.19}
              height={8}
              alt="support button"
            />
          </div>
        </div>
      </div>

      {/* menu btn  */}
      <div className="w-[38px] h-[38px] relative cursor-pointer group">
        <p className=" hidden absolute left-11 px-2 py-1 top-[3px] bg-green-600 rounded-xl font-medium text-white   group-hover:block">
          All Dua
        </p>
        <div className="w-[38px] h-[38px] left-0 top-0 absolute bg-slate-100 rounded-full" />
        <div className="w-5 h-5 left-[9px] top-[9px] absolute">
          <div className="w-5 h-5 left-0 top-0 absolute ">
            <Image
              src="/assets/54-menu-2.png"
              width={21.19}
              height={8}
              alt="support button"
            />
          </div>
        </div>
      </div>

      {/* memorize btn  */}
      <div className="w-[38px] h-[38px] relative cursor-pointer group">
        <p className=" hidden absolute left-11 px-2 py-1 top-[3px] bg-green-600 rounded-xl font-medium text-white   group-hover:block">
          Memorize
        </p>
        <div className="w-[38px] h-[38px] left-0 top-0 absolute bg-slate-100 rounded-full" />
        <div className="w-5 h-5 left-[9px] top-[9px] absolute">
          <div className="w-5 h-5 left-0 top-0 absolute ">
            <Image
              src="/assets/memorize-1.png"
              width={21.19}
              height={8}
              alt="support button"
            />
          </div>
        </div>
      </div>

      {/* saved btn  */}
      <div className="w-[38px] h-[38px] relative cursor-pointer group">
        <p className=" hidden absolute left-11 px-2 py-1 top-[3px] bg-green-600 rounded-xl font-medium text-white   group-hover:block">
          Bookmark
        </p>
        <div className="w-[38px] h-[38px] left-0 top-0 absolute bg-slate-100 rounded-full" />
        <div className="w-5 h-5 left-[9px] top-[9px] absolute">
          <div className="w-5 h-5 left-0 top-0 absolute ">
            <Image
              src="/assets/3-keep-minus.png"
              width={21.19}
              height={8}
              alt="support button"
            />
          </div>
        </div>
      </div>

      {/* Ruqyah btn  */}
      <div className="w-[38px] h-[38px] relative cursor-pointer group">
        <p className=" hidden absolute left-11 px-2 py-1 top-[3px] bg-green-600 rounded-xl font-medium text-white   group-hover:block">
          Ruqyah
        </p>
        <div className="w-[38px] h-[38px] left-0 top-0 absolute bg-slate-100 rounded-full" />
        <div className="w-5 h-5 left-[9px] top-[9px] absolute">
          <div className="w-5 h-5 left-0 top-0 absolute ">
            <Image
              src="/assets/ruqyah-1.png"
              width={21.19}
              height={8}
              alt="support button"
            />
          </div>
        </div>
      </div>

      {/* dua-info btn  */}
      <div className="w-[38px] h-[38px] relative cursor-pointer group">
        <p className=" hidden absolute left-11 px-2 py-1 top-[3px] bg-green-600 rounded-xl font-medium text-white   group-hover:block">
          Books
        </p>
        <div className="w-[38px] h-[38px] left-0 top-0 absolute bg-slate-100 rounded-full" />
        <div className="w-5 h-5 left-[9px] top-[9px] absolute">
          <div className="w-5 h-5 left-0 top-0 absolute ">
            <Image
              src="/assets/dua-info 1.png"
              width={21.19}
              height={8}
              alt="support button"
            />
          </div>
        </div>
      </div>

      {/* book btn  */}
      <div className="w-[38px] h-[38px] relative cursor-pointer group">
        <p className=" hidden absolute left-11 px-2 py-1 top-[3px] bg-green-600 rounded-xl font-medium text-white   group-hover:block">
          Books
        </p>
        <div className="w-[38px] h-[38px] left-0 top-0 absolute bg-slate-100 rounded-full" />
        <div className="w-5 h-5 left-[9px] top-[9px] absolute">
          <div className="w-5 h-5 left-0 top-0 absolute ">
            <Image
              src="/assets/books-1.png"
              width={21.19}
              height={8}
              alt="support button"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationButtons;

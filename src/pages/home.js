import Image from "next/image";

const Home = () => {
  return (
    <div className="m-12">
      <div className="grid grid-cols-12 gap-6">
        {/* left side bar  */}

        {/* logo  */}
        <div className="w-[100px] h-[847px] bg-white rounded-3xl flex flex-col justify-between  ">
          <div className="mx-auto mt-8">
            <Image
              src="/assets/logo.png"
              width={90}
              height={90}
              alt="logo of the website"
            />
          </div>

          {/* navigation btns  */}
          <div className=" space-y-5 mx-auto">
            <div className="w-[38px] h-[38px] relative">
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
            <div className="w-[38px] h-[38px] relative">
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
            <div className="w-[38px] h-[38px] relative">
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
            <div className="w-[38px] h-[38px] relative">
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
            <div className="w-[38px] h-[38px] relative">
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
            <div className="w-[38px] h-[38px] relative">
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
            <div className="w-[38px] h-[38px] relative">
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
        <div className="bg-cyan-200 col-span-9">body</div>
        <div className="w-[300px] h-[834px] bg-white rounded-[32px] border border-neutral-200 col-span-2">
          right
        </div>
      </div>
    </div>
  );
};

export default Home;

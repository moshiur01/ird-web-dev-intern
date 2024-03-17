import Image from "next/image";
import { useState } from "react";

const SubCat = ({ openState }) => {
  const [subCategoryView, setSubCategoryView] = useState("-");
  const [subSubCategoryView, setSubSubCategoryView] = useState("-");

  return (
    <div>
      {/* Subcategory */}
      <div className="ml-3">
        <div
          className={
            openState === true
              ? "border-l-2 border-[#1FA45B] border-dotted ml-4"
              : "border-l-2 border-[#1FA45B] border-dotted ml-4 h-0 overflow-hidden"
          }
        >
          <div className="text-sm font-semibold pl-3 py-4 relative">
            <button
              onClick={() => {
                setSubCategoryView("0");
                setSubSubCategoryView("-");
              }}
            >
              <p className="text-[#1FA45B] text-xl absolute top-1/2 -translate-y-1/2 -left-1.5">
                •
              </p>
              <p
                className={
                  subCategoryView === "0"
                    ? "text-left text-[#1FA45B]"
                    : "text-left"
                }
              >
                The servant is dependent on his Lord
              </p>
            </button>
          </div>

          {/* Sub subcategory */}
          <div className={subCategoryView === "0" ? "" : "h-0 overflow-hidden"}>
            <div className="ml-4 pb-5 last:pb-2">
              <button
                className=" relative"
                onClick={() => {
                  setSubSubCategoryView("0-0");
                }}
              >
                <Image
                  src="/icons/dua node.svg"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="w-4 absolute -top-1.5 left-0"
                />
                <p
                  className={
                    subSubCategoryView === "0-0"
                      ? "ml-5 text-[0.8rem] text-left text-[#1FA45B]"
                      : "ml-5 text-[0.8rem] text-left"
                  }
                >
                  The servant is dependent on his Lord #1
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCat;

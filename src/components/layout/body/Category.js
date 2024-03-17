/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Dua from "./Dua";
import SubCat from "./SubCat";

const Category = ({ allCategories, catId }) => {
  const [categoryDropdown, setCategoryDropdown] = useState(1);

  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };
  return (
    <div className="grid grid-cols-4 gap-6 mt-5">
      {/* category column  */}
      <div className="bg-white rounded-xl">
        {/* category name  */}
        <div className="bg-[#1FA45B] rounded-t-xl py-5 text-white text-center font-semibold text-[17px]">
          Categories
        </div>

        {/* search bar  */}
        <div className="p-3">
          <div className="relative flex">
            {/* search icon  */}
            <div className="px-3 py-2 rounded-md flex items-center justify-center absolute top-1 left-1 bottom-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M19 19L13 13L19 19ZM15 8C15 8.91925 14.8189 9.82951 14.4672 10.6788C14.1154 11.5281 13.5998 12.2997 12.9497 12.9497C12.2997 13.5998 11.5281 14.1154 10.6788 14.4672C9.82951 14.8189 8.91925 15 8 15C7.08075 15 6.1705 14.8189 5.32122 14.4672C4.47194 14.1154 3.70026 13.5998 3.05025 12.9497C2.40024 12.2997 1.88463 11.5281 1.53284 10.6788C1.18106 9.82951 1 8.91925 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8Z"
                  stroke="#868686"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* input field  */}
            <input
              className="w-full rounded-md pr-4 pl-12 py-3 shadow-sm focus:outline-none border-[1.5px] border-[#E2E2E2] focus:border-green-700 focus:ring-green-700 focus:ring-1 placeholder:text-mute-grey placeholder:text-sm bg-white"
              id="search"
              name="search"
              type="text"
              placeholder="Search by Dua Name"
            />
          </div>
        </div>

        <div className="2xl:h-[71vh] overflow-y-scroll scrollbar-light">
          {/* Category map  start */}

          {allCategories?.map((category) => (
            <>
              <div key={category?.id} className="ml-3 mr-2">
                <Link
                  href={`/duas/${category?.cat_name_en}?cat=${category?.id}`}
                  key={category?.id}
                >
                  <button
                    className={
                      categoryDropdown === category?.id
                        ? "bg-[#e8f0f5] p-3 rounded-xl flex gap-2 w-[280px] justify-between items-center"
                        : "bg-white p-3 rounded-xl flex gap-2 w-[280px] justify-between  items-center hover:bg-[#e8f0f5]"
                    }
                    onClick={() => {
                      setCategoryDropdown(category?.id);
                      handleCategoryClick(category?.id);
                    }}
                  >
                    <div className="bg-[#f7f8fa] flex items-center justify-center p-2 rounded-lg">
                      <Image
                        src="/icons/duar_gurutto.svg"
                        alt="Logo"
                        width={100}
                        height={100}
                        className="w-9"
                      />
                    </div>
                    <div className="">
                      <p className="font-medium">{category?.cat_name_en}</p>
                      <p className="text-xs mt-1 text-gray-500">
                        Subcategory: {category?.no_of_subcat}
                      </p>
                    </div>
                    <div className="h-full border-l-2 hidden 2xl:block pl-2">
                      <p className="font-medium text-center">
                        {category?.no_of_dua}
                      </p>
                      <p className="text-xs  text-center mt-1 text-gray-500">
                        Duas
                      </p>
                    </div>
                  </button>
                </Link>

                <SubCat
                  openDropdown={
                    categoryDropdown === category?.id ? true : false
                  }
                  catId={selectedCategoryId}
                />
              </div>
            </>
          ))}

          {/* Category  map End */}
        </div>
      </div>

      {/* dua details columns */}
      <div className="h-[85vh] col-span-3 overflow-y-scroll rounded-xl pr-1">
        <div className="bg-white px-6 py-4 mb-5 rounded-xl font-medium">
          <span className="text-[#1FA45B] font-semibold">Section: </span>
          The servant is dependent on his Lord
        </div>

        <Dua catId={catId} />
      </div>
    </div>
  );
};

export default Category;

import { useEffect, useState } from "react";
const SubCat = ({ openDropdown, catId }) => {
  const [subCategoryView, setSubCategoryView] = useState("-");
  const [subSubCategoryView, setSubSubCategoryView] = useState("-");

  //get specific sub category of each category
  const [subCategoryData, setSubCategoryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/specific-sub-category/${catId}`
        );
        const data = await res.json();
        setSubCategoryData(data);
      } catch (error) {
        console.error("Error fetching subcategory data:", error);
      }
    };

    fetchData();
  }, [catId]);

  return (
    <div>
      {/* Subcategory map  */}

      {subCategoryData?.map((subCat) => (
        <div key={subCat?.subcat_id} className="ml-3">
          <div
            className={
              openDropdown === true
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
                <p className="text-[#1FA45B] text-xl absolute top-1/2 -translate-y-1/2 -left-[5px]">
                  •
                </p>
                <p
                  className={
                    subCategoryView === "0"
                      ? "text-left text-[#1FA45B]"
                      : "text-left"
                  }
                >
                  {subCat?.subcat_name_en}
                </p>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubCat;

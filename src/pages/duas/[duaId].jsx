import LeftSidebar from "@/components/layout/LeftSideBar/LeftSidebar";
import RightSidebar from "@/components/layout/RightSidebar/RightSidebar";
import Category from "@/components/layout/body/Category";
import TopBar from "@/components/layout/body/Topbar";
import { useRouter } from "next/router";

const DuaDetails = ({ allCategories }) => {
  const router = useRouter();
  const catId = router.query.cat;

  return (
    <div className="m-12">
      <div className="grid grid-cols-12 gap-6">
        {/* left side bar  */}
        <LeftSidebar />

        {/* body  */}
        <div className="col-span-9">
          <TopBar />
          <Category allCategories={allCategories} catId={catId} />
        </div>

        {/* right side bar  */}
        <RightSidebar />
      </div>
    </div>
  );
};

export default DuaDetails;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:5000/category");
  const data = await res.json();

  return {
    props: {
      allCategories: data,
    },
  };
}

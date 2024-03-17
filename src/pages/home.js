import LeftSidebar from "@/components/layout/LeftSideBar/LeftSidebar";
import RightSidebar from "@/components/layout/RightSidebar/RightSidebar";
import Category from "@/components/layout/body/Category";
import TopBar from "@/components/layout/body/Topbar";

const Home = () => {
  return (
    <div className="m-12">
      <div className="grid grid-cols-12 gap-6">
        {/* left side bar  */}
        <LeftSidebar />

        {/* body  */}
        <div className="col-span-9">
          <TopBar />
          <Category />
        </div>

        {/* right side bar  */}
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;

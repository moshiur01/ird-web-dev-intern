import LeftSidebar from "@/components/layout/LeftSideBar/LeftSidebar";
import RightSidebar from "@/components/layout/RightSidebar/RightSidebar";

const Home = () => {
  return (
    <div className="m-12">
      <div className="grid grid-cols-12 gap-6">
        {/* left side bar  */}
        <LeftSidebar />

        {/* body  */}
        <div className="bg-cyan-200 col-span-9">body</div>

        {/* right side bar  */}
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;

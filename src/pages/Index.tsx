import Sidebar from "@/components/Sidebar";
import Work from "@/components/Work";
import TrendingTags from "@/components/TrendingTags";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_300px] gap-8">
          <Work />
          <TrendingTags />
        </div>
      </main>
    </div>
  );
};

export default Index;

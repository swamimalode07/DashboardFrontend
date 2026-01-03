import ActivityTimeline from "@/components/activityTimeline/ActivityTimeline";
import Dashboard from "@/components/dashboard/Dashboard";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";

export default function Home() {
  return (
    <div className="flex bg-[#F4F5FA]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <Dashboard />
        <ActivityTimeline/>
        <Footer/>
      </div>
    </div>
  );
}

import DashboardContent from "./DashboardContent";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  
  return (
    <div className="h-screen w-screen overflow-hidden flex">
        <Sidebar />
        <DashboardContent />
    </div>
  )
}

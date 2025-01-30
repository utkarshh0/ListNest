import Avatar from "react-avatar";
import { IoMdNotifications } from "react-icons/io";
import { useSelector } from "react-redux";
import Explore from "./Explore";
import Home from "./Home";

export default function DashboardContent() {

  const activeTab = useSelector(state => state.activeTab)

  return (
    <div className="w-11/12 h-full">
        <header className="px-8 py-4 flex justify-between border-b-3 border-gray-100">
            <div>
                <p className="text-xl text-gray-600 font-medium">Dashboard</p>
            </div>
            <div className="flex items-center space-x-6">
                <button className="text-lg"><IoMdNotifications /></button>
                <Avatar size="30" className="rounded-lg" name="Utkarsh Kataria"/>
                <p className="text-sm text-gray-500">Utkarsh Kataria</p>
            </div>
        </header>
        <div className="w-full h-full">
          {activeTab === "explore" && <Explore />}
          {activeTab === "home" && <Home />}
      </div>
    </div>
  )
}

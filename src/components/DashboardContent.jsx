import Avatar from "react-avatar";
import { IoMdNotifications } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import Explore from "./Explore";
import Home from "./Home";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import {toggleTheme} from '../redux/features/themeSlice'

export default function DashboardContent() {

  const activeTab = useSelector(state => state.activeTab)
  const theme = useSelector(state => state.theme)
  const dispatch = useDispatch()

  return (
    <div className={`w-full h-full ${theme === `light` ? `text-black` : `text-white`}`}>
        <header className={`h-1/12 px-8 py-4 flex justify-between ${theme === `light` ? `bg-white` : `bg-[#1F2937]`}`}>
            <div>
                <p className="text-xl font-medium">Dashboard</p>
            </div>
            <div className="flex items-center space-x-6">
                <button className="text-lg"><IoMdNotifications /></button>
                <Avatar size="30" className="rounded-lg" name="Utkarsh Kataria"/>
                <p className="text-sm text-gray-500">Utkarsh Kataria</p>
                <button className="text-xl" onClick={() => dispatch(toggleTheme())}>{theme === 'light' ? <MdDarkMode/> : <MdLightMode /> }</button>
            </div>
        </header>
        <div className={`w-full h-11/12 overflow-y-scroll ${theme === `light` ? `bg-gray-100` : `bg-[#111827]`}`}>
          {activeTab === "explore" && <Explore />}
          {activeTab === "home" && <Home />}
          {["stats", "ship", "calendar", "setting"].includes(activeTab) && (
            <div className="w-full h-full flex justify-center items-center">
              <p className="text-2xl font-bold">Under Development</p>
            </div>
          )}
        </div>
    </div>
  )
}

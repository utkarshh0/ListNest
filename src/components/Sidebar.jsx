import logo from '../assets/logo.png'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { RiShutDownLine } from 'react-icons/ri'
import { FiCalendar, FiHome, FiPieChart, FiSettings, FiShoppingBag } from 'react-icons/fi'
import SidebarButton from './SidebarButton'
import { useDispatch } from 'react-redux'
import { setActiveTab } from '../redux/features/activeTabSlice'
export default function Sidebar() {

  const dispatch = useDispatch()

  return (
    <div className="h-fit md:h-full w-full z-40 absolute md:relative bottom-0 bg-white md:w-1/12 py-2 md:py-6 border border-r-3 border-gray-100 flex md:flex-col items-center justify-center space-y-8">
        <img src={logo} alt="" className='w-10 hidden md:block' />
        <div className='w-full h-full flex md:flex-col justify-between py-2 mt-4 text-gray-500'>
            <div className='w-full flex md:flex-col space-y-8'>
                <SidebarButton name="explore" onClick={() => dispatch(setActiveTab("explore"))} Icon={MdOutlineTravelExplore} />
                <SidebarButton name="home" onClick={() => dispatch(setActiveTab("home"))} Icon={FiHome} />
                <SidebarButton name="stats" onClick={() => dispatch(setActiveTab("stats"))} Icon={FiPieChart} />
                <SidebarButton name="ship" onClick={() => dispatch(setActiveTab("ship"))} Icon={FiShoppingBag} style={"hidden md:flex"} />
                <SidebarButton name="calendar" onClick={() => dispatch(setActiveTab("calendar"))} Icon={FiCalendar} />
                <SidebarButton name="setting" onClick={() => dispatch(setActiveTab("setting"))} Icon={FiSettings} />
            </div>
            <div className='flex justify-center hidden md:block'>
                <button className='hover:text-[#7942FB]'><RiShutDownLine /></button>
            </div>
        </div>
    </div>
  )
}

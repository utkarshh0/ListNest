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
    <div className="h-full w-1/12 py-6 border border-r-3 border-gray-100 flex flex-col items-center space-y-8">
        <img src={logo} alt="" className='w-10' />
        <div className='w-full h-full flex flex-col justify-between py-2 mt-4 text-xl text-gray-500'>
            <div className='w-full space-y-8'>
                <SidebarButton name="explore" onClick={() => dispatch(setActiveTab("explore"))} Icon={MdOutlineTravelExplore} />
                <SidebarButton name="home" onClick={() => dispatch(setActiveTab("home"))} Icon={FiHome} />
                <SidebarButton Icon={FiPieChart} />
                <SidebarButton Icon={FiShoppingBag} />
                <SidebarButton Icon={FiCalendar} />
                <SidebarButton Icon={FiSettings} />
            </div>
            <div className='flex justify-center'>
                <button className='hover:text-[#7942FB]'><RiShutDownLine /></button>
            </div>
        </div>
    </div>
  )
}

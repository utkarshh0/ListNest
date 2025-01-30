import { useSelector } from "react-redux";

export default function SidebarButton({ Icon, onClick, name, style = "" }) {
  const activeTab = useSelector((state) => state.activeTab);

  return (
    <button
      onClick={onClick}
      className={`w-full text-2xl md:text-xl flex justify-center md:border-l-4 transition-all 
        ${activeTab === name ? 'text-[#7942FB] border-[#ED5B75]' : 'text-gray-500 border-transparent hover:text-[#7942FB] hover:border-[#ED5B75]'} ${style}`}
    >
      <Icon />
    </button>
  );
}

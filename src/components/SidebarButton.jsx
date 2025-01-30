import { useSelector } from "react-redux";

export default function SidebarButton({ Icon, onClick, name }) {
  const activeTab = useSelector((state) => state.activeTab);

  return (
    <button
      onClick={onClick}
      className={`w-full flex justify-center border-l-4 transition-all 
        ${activeTab === name ? 'text-[#7942FB] border-[#ED5B75]' : 'text-gray-500 border-transparent hover:text-[#7942FB] hover:border-[#ED5B75]'}`}
    >
      <Icon />
    </button>
  );
}

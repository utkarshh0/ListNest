import { BsThreeDots } from 'react-icons/bs';
import house from '../assets/house.png'
import img1 from '../assets/image 1.png'
import img2 from '../assets/image 2.png'

import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FaCommentDollar, FaEthereum, FaRegCalendar } from 'react-icons/fa';
import { SiTether } from 'react-icons/si';
import { useSelector } from 'react-redux';


// Sample top picks data
const topPicks = [
  { name: "Roma Avenue", price: "$ 400,000", eth: "0.0000345 Ether" },
  { name: "Atlas Shack", price: "$ 500,000", eth: "0.0000678 Ether" },
  { name: "Germanrin", price: "$ 785,000", eth: "0.0000887 Ether" },
  { name: "Heavens", price: "$ 667,000", eth: "0.0000761 Ether" },
  { name: "Heretho", price: "$ 348,000", eth: "0.0000302 Ether" },
];

const portfolio = [
  {
    img : img1,
    name : "Mandragora Mansion",
    ether : "0.005"
  },
  {
    img : img2,
    name : "Halbert Avenue",
    ether : "0.076"
  }
]
// Sample chart data
const chartData = [
  { name: "Mon", value: 200 },
  { name: "Tue", value: 300 },
  { name: "Wed", value: 250 },
  { name: "Thu", value: 180 },
  { name: "Fri", value: 220 },
  { name: "Sat", value: 280 },
  { name: "Sun", value: 250 },
];

// Sample NFT ownership data
const nftsOwned = [
  { name: "Roma Avenue", value: "0.91 Ether", change: "+10%" },
  { name: "Thorian Park", value: "0.89 Ether", change: "+19%" },
  { name: "Linda Mansion", value: "1.1 Ether", change: "-17%" },
  { name: "Villa Mary", value: "0.71 Ether", change: "+22%" },
];

export default function Explore(){

  const theme = useSelector(state => state.theme)
  return (
    <div className="w-full min-h-full md:h-full p-2 flex flex-col md:flex-row md:space-x-4 mb-16 md:mb-0">
      {/* Left Section */}
      <div className="w-full md:w-9/12 h-full flex flex-col gap-4">
        {/* NFT Marketplace and Investment Stats */}
        <div className="w-full flex flex-col md:flex-row gap-4">
          {/* NFT Marketplace */}
          <div className="w-full md:w-2/5 h-64 md:h-full hover:cursor-pointer p-1 flex flex-col space-y-2">
            <div className="flex justify-between items-between p-1">
              <p className="text-sm font-semibold">NFT Marketplace</p>
              <BsThreeDots />
            </div>
            <div
              className="w-full h-full bg-cover bg-center rounded-lg overflow-hidden relative"
              style={{ backgroundImage: `url(${house})` }}
            >
              {/* Black transparent overlay */}
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute top-4 left-4 flex gap-2 z-10 text-black">
                <button className="px-3 py-1 bg-white/80 rounded-full hover:bg-white/90 cursor-pointer text-sm">
                  Top picks
                </button>
                <button className="px-3 py-1 bg-white/80 rounded-full hover:bg-white/90 cursor-pointer text-sm">
                  Featured
                </button>
              </div>
              {/* Content (Bottom Left) */}
              <div className="absolute bottom-4 left-4 text-white z-10">
                <h3 className="font-semibold">House Andromeda</h3>
                <p className="text-sm">1.44 Ether ★★★★★</p>
              </div>
            </div>
          </div>

          {/* Investment Stats */}
          <div className="w-full md:w-3/5 h-64 md:h-full p-1 flex flex-col space-y-2">
            <div className="flex justify-between items-between p-1">
              <p className="text-sm font-semibold">Investment Stats</p>
              <BsThreeDots />
            </div>
            <div className={`w-full h-full rounded-lg shadow-md hover:shadow-xl duration-300 py-4 flex  justify-between px-8 ${theme === `light` ? `bg-white` : `bg-[#1F2937]`}`}>
              <div className="h-full flex flex-col justify-around">
                {/* Total Investment */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="content-center">
                      <span className="bg-[rgba(251,177,66,1)] flex justify-center items-center text-center h-[38px] w-[38px] text-white">
                        <SiTether />
                      </span>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">Total Investment</p>
                      <p className="text-sm text-[rgba(251,177,66,1)] font-semibold flex items-center gap-2">
                        <FaEthereum />
                        0.56 Ether
                      </p>
                    </div>
                  </div>
                </div>
                {/* Weekly Returns */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <div>
                      <span className="bg-[rgba(79,223,177,1)] flex justify-center items-center text-center h-[38px] w-[38px] text-white">
                        <FaRegCalendar />
                      </span>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">Weekly Returns</p>
                      <p className="text-sm text-[rgba(79,223,177,1)] font-semibold flex items-center gap-2">
                        <FaEthereum />
                        0.005 Ether
                      </p>
                    </div>
                  </div>
                </div>
                {/* Expenses */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <div>
                      <span className="bg-[rgba(237,91,117,1)] flex justify-center items-center text-center h-[38px] w-[38px] text-white">
                        <FaCommentDollar />
                      </span>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">Expenses</p>
                      <p className="text-sm font-semibold text-[rgba(237,91,117,1)] flex items-center gap-2">
                        <FaEthereum />
                        0.005 Ether
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-full flex space-x-8 mt-4 md:mt-0">
                <div className="h-full flex items-baseline gap-6">
                  <div className="w-1 rounded-lg h-9/12 bg-[#FBB142]"></div>
                  <div className="w-1 rounded-lg h-10/12 bg-[#4FDFB1]"></div>
                  <div className="w-1 rounded-lg h-7/12 bg-[#ED5B75]"></div>
                </div>
                <div className="h-full text-gray-400 text-xs flex flex-col justify-between">
                  <p>MAX</p>
                  <p>MIN</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NFTs Owned and Portfolio */}
        <div className="w-full flex flex-col md:flex-row gap-4">
          {/* NFTs Owned */}
          <div className="w-full md:w-1/4 h-full flex flex-col justify-around">
            <div className="flex justify-between items-between p-1">
              <p className="text-sm font-semibold">NFTs owned</p>
              <BsThreeDots />
            </div>
            <div className="flex flex-col space-y-4">
              {nftsOwned.map((nft, index) => (
                <div
                  key={index}
                  className={`${theme === `light` ? `bg-white` : `bg-[#1F2937]`} p-2 rounded-lg flex items-center gap-4 justify-between`}
                >
                  <div>
                    <p className="text-xs text-gray-500">{nft.name}</p>
                    <p className="text-sm font-bold flex items-center gap-1">
                      <FaEthereum />
                      {nft.value}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className={`h-6 w-12 ${
                        nft.change.includes("+") ? "bg-green-100" : "bg-red-100"
                      }`}
                    >
                      <svg viewBox="0 0 100 20" className="w-full h-full">
                        <path
                          d="M0,10 Q25,5 50,10 T100,10"
                          fill="none"
                          stroke={
                            nft.change.includes("+") ? "#22c55e" : "#ef4444"
                          }
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <span
                      className={
                        nft.change.includes("+") ? "text-green-500" : "text-red-500"
                      }
                    >
                      {nft.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* My Portfolio and Total Distributions */}
          <div className="w-full md:w-3/4 h-full flex flex-col gap-4">
            {/* My Portfolio */}
            <div className="w-full h-1/3">
              <p className="text-sm font-bold my-1">My Portfolio</p>
              <div className="flex flex-col md:flex-row space-x-2 p-1">
                {portfolio.map((pf, index) => (
                  <div
                    key={index}
                    className={`w-full p-2 rounded-lg flex space-x-4 mb-4 md:mb-0 ${theme === `light` ? `bg-white` : `bg-[#1F2937]`}`}
                  >
                    <img
                      src={pf.img}
                      alt=""
                      className="rounded-lg overflow-hidden w-16 h-16"
                    />
                    <div>
                      <p className="text-sm">{pf.name}</p>
                      <p className="text-md text-gray-300">{pf.ether}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Total Distributions */}
            <div className={`w-full h-46 md:h-2/3 px-4 py-2 rounded-lg flex flex-col justify-center items-between space-y-2 ${theme === `light` ? `bg-white` : `bg-[#1F2937]`}`}>
              <p className="text-sm font-bold">Total Distributions</p>
              <div className="h-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#8b5cf6"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Section */}
      <div className={`w-full md:w-3/12 h-full rounded-lg px-4 mt-4 md:mt-0 ${theme === `light` ? `bg-white` : `bg-[#1F2937]`}`}>
        {/* My Cards */}
        <div className="w-full md:h-2/4 p-4 flex flex-col md:space-y-4">
          <h2 className="text-sm font-bold my-2">My Cards</h2>
          <div className="bg-gradient-to-br shadow-2xl from-purple-500 to-purple-600 p-6 rounded-2xl text-white">
            <h2 className="text-lg font-semibold mb-4">Balance</h2>
            <div>
              <p className="text-4xl font-bold mb-4">$521,652</p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm opacity-80">Monthly Profit</p>
                  <p className="text-xl font-semibold">$14,225</p>
                </div>
                <span className="bg-white/20 px-2 py-1 rounded text-sm">
                  +10%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Top Picks */}
        <div className="w-full md:h-2/4 flex flex-col space-y-2">
          <div className="w-full h-1/6 flex justify-between items-between p-1">
            <p className="text-sm font-semibold">Top Picks</p>
            <BsThreeDots />
          </div>
          <div className="w-full h-5/6 flex flex-col justify-around">
            {topPicks.map((pick, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold">{pick.name}</p>
                  <p className="text-xs text-gray-500">{pick.price}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-xs text-gray-500">{pick.eth}</p>
                  <button className="text-2xl text-gray-400">&gt;</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      
</div>
  );
};
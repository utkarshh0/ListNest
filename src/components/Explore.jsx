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
  return (
    <div className="w-full h-full bg-gray-100 p-2 flex space-x-4">      
      {/* Left Section */}
      <div className="w-9/12 h-full flex flex-col gap-4">
        <div className="w-full h-5/12 flex gap-4">
          {/* Nft Marketplace   */}
          <div className="w-2/5 h-full hover:cursor-pointer p-1 flex flex-col space-y-2">
              <div className='flex justify-between items-between p-1'>
                <p className="text-sm font-semibold">NFT Marketplace</p>
                <BsThreeDots />
              </div>
              <div
                className="w-full h-full bg-cover bg-center rounded-lg overflow-hidden relative"
                style={{ backgroundImage: `url(${house})` }}
              >
                {/* Black transparent overlay */}
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute top-4 left-4 flex gap-2 z-10">
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

          {/* Investment Sales */}
          <div className="h-full w-3/5 p-1 flex flex-col space-y-2">
            <div className='flex justify-between items-between p-1'>
                <p className="text-sm font-semibold">Investment Stats</p>
                <BsThreeDots />
              </div>
            <div className="w-full h-full bg-white rounded-lg shadow-md hover:shadow-xl duration-300 py-4 flex justify-between px-8">
              <div className='h-full flex flex-col justify-around'>
                {/*I-1 */}{" "}
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className=" content-center">
                      <span className="bg-[rgba(251,177,66,1)] flex justify-center items-center text-center h-[38px] w-[38px] text-white">
                        <svg
                          width="19"
                          height="19"
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.14981 12.9C2.76697 12.9 0.0248108 10.1579 0.0248108 6.77502C0.0248108 3.39219 2.76697 0.650024 6.14981 0.650024C9.53265 0.650024 12.2748 3.39219 12.2748 6.77502C12.2748 10.1579 9.53265 12.9 6.14981 12.9ZM6.14981 11.675C7.44937 11.675 8.69571 11.1588 9.61463 10.2398C10.5336 9.32092 11.0498 8.07459 11.0498 6.77502C11.0498 5.47546 10.5336 4.22913 9.61463 3.3102C8.69571 2.39127 7.44937 1.87502 6.14981 1.87502C4.85025 1.87502 3.60392 2.39127 2.68499 3.3102C1.76606 4.22913 1.24981 5.47546 1.24981 6.77502C1.24981 8.07459 1.76606 9.32092 2.68499 10.2398C3.60392 11.1588 4.85025 11.675 6.14981 11.675ZM6.14981 3.74315L9.18169 6.77502L6.14981 9.8069L3.11794 6.77502L6.14981 3.74315ZM6.14981 5.47591L4.8507 6.77502L6.14981 8.07414L7.44892 6.77502L6.14981 5.47591Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="">
                      <p className="text-gray-500 text-xs">Total Investment</p>
                      <p className="text-sm text-[rgba(251,177,66,1)] font-semibold flex items-center gap-2">
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.0062 6.66084L7.17979 8.857L3.35333 6.66084L7.17979 0.495117L11.0062 6.66084ZM-4.95875 18.7528C-4.89449 18.7528 -4.8406 18.7004 -4.8406 18.638C-4.8406 17.9214 -5.39819 17.2551 -6.16721 17.2571C-6.93623 17.2571 -7.48553 17.9254 -7.48553 18.642C-7.48553 19.3587 -6.93831 20.027 -6.16721 20.027C-5.71741 20.027 -5.25931 19.8357 -5.02922 19.4452C-5.01886 19.4251 -5.00849 19.405 -5.01471 19.3687C-5.02093 19.3325 -5.04581 19.3023 -5.07897 19.2882C-5.14116 19.262 -5.1909 19.2902 -5.22407 19.3345C-5.45415 19.6526 -5.75679 19.8035 -6.16721 19.8035C-6.76626 19.8035 -7.19119 19.3023 -7.24923 18.7528H-4.95875ZM-6.16721 17.4765C-5.56816 17.4765 -5.13494 17.9778 -5.08519 18.5273H-7.24923C-7.19119 17.9778 -6.76626 17.4765 -6.16721 17.4765ZM-1.94899 17.4222C-1.94899 17.3678 -1.99666 17.3115 -2.06299 17.3115H-2.67448V16.4519C-2.67448 16.3815 -2.73459 16.3312 -2.81129 16.3432C-2.86725 16.3513 -2.90456 16.4016 -2.90456 16.456V17.3115H-3.49532C-3.55958 17.3115 -3.60933 17.3658 -3.60933 17.4222C-3.60933 17.4846 -3.56165 17.5329 -3.49532 17.5329H-2.90456V19.872C-2.90456 19.9263 -2.85689 19.9827 -2.79056 19.9827C-2.7263 19.9827 -2.67655 19.9283 -2.67655 19.872V17.5329H-2.06299C-1.99874 17.5329 -1.94899 17.4866 -1.94899 17.4222ZM1.68262 19.8579V18.4407C1.68262 17.8369 1.29708 17.2632 0.625477 17.2632C0.217128 17.2632 -0.135255 17.4947 -0.332175 17.8369V15.2039C-0.332175 15.1495 -0.37985 15.0932 -0.446181 15.0932C-0.510438 15.0932 -0.560187 15.1475 -0.560187 15.2039V19.8579C-0.560187 19.9283 -0.500073 19.9787 -0.423378 19.9666C-0.367412 19.9585 -0.330101 19.9082 -0.330101 19.8539V18.791C-0.330101 18.7877 -0.331524 18.7736 -0.33319 18.7572C-0.335548 18.7339 -0.338393 18.7058 -0.338393 18.6964C-0.37985 18.0824 -0.0772157 17.4866 0.627549 17.4866C1.17685 17.4866 1.45461 17.9637 1.45461 18.4407V19.8579C1.45461 19.9203 1.50229 19.9686 1.56862 19.9686C1.62458 19.9686 1.68262 19.9223 1.68262 19.8579ZM5.66869 18.7528C5.73295 18.7528 5.78684 18.7004 5.78684 18.638C5.78477 17.9214 5.22925 17.2551 4.46022 17.2571C3.6912 17.2571 3.1419 17.9254 3.1419 18.642C3.1419 19.3587 3.68913 20.027 4.46022 20.027C4.91003 20.027 5.36813 19.8357 5.59821 19.4452C5.60858 19.4251 5.61894 19.405 5.61272 19.3687C5.6065 19.3325 5.58163 19.3023 5.54846 19.2882C5.48628 19.262 5.43653 19.2902 5.40337 19.3345C5.17328 19.6526 4.87065 19.8035 4.46022 19.8035C3.86117 19.8035 3.43624 19.3023 3.3782 18.7528H5.66869ZM4.45815 17.4765C5.0572 17.4765 5.49042 17.9778 5.54017 18.5273H3.37613C3.43417 17.9778 3.8591 17.4765 4.45815 17.4765ZM8.49189 17.5329C8.55615 17.5248 8.59761 17.4866 8.59761 17.4141C8.59761 17.3497 8.53128 17.3115 8.47531 17.3095C8.08354 17.3095 7.70629 17.6034 7.51766 17.9134V17.4202C7.51766 17.3497 7.45755 17.2994 7.38085 17.3115C7.32489 17.3195 7.28758 17.3698 7.28758 17.4242V19.8498C7.28758 19.9203 7.34769 19.9706 7.42438 19.9585C7.48035 19.9505 7.51766 19.9002 7.51766 19.8458V18.783C7.51766 18.1609 7.82029 17.6275 8.49189 17.5329ZM12.2396 18.7528C12.3038 18.7528 12.3577 18.7004 12.3577 18.638C12.3557 17.9214 11.8001 17.2551 11.0311 17.2571C10.2621 17.2571 9.7128 17.9254 9.7128 18.642C9.7128 19.3587 10.26 20.027 11.0311 20.027C11.4809 20.027 11.939 19.8357 12.1691 19.4452C12.1795 19.4251 12.1898 19.405 12.1836 19.3687C12.1774 19.3325 12.1525 19.3023 12.1194 19.2882C12.0572 19.262 12.0074 19.2902 11.9743 19.3345C11.7442 19.6526 11.4415 19.8035 11.0311 19.8035C10.4321 19.8035 10.0071 19.3023 9.9491 18.7528H12.2396ZM11.029 17.4765C11.6281 17.4765 12.0613 17.9778 12.1111 18.5273H9.94702C10.0051 17.9778 10.43 17.4765 11.029 17.4765ZM16.0536 19.872V17.4423C16.0536 17.392 16.0204 17.3457 15.9707 17.3296C15.8899 17.3074 15.8235 17.3719 15.8235 17.4363V18.3441C15.8235 19.1151 15.6432 19.8156 14.8721 19.8156C14.3228 19.8156 14.045 19.3385 14.045 18.8615V17.4363C14.045 17.3819 13.9973 17.3256 13.931 17.3256C13.8668 17.3256 13.817 17.3799 13.817 17.4363V18.8615C13.817 19.4653 14.1943 20.039 14.8742 20.039C15.3012 20.039 15.637 19.7774 15.8256 19.411V19.872C15.8256 19.9344 15.8733 19.9827 15.9396 19.9827C15.9956 19.9827 16.0536 19.9364 16.0536 19.872ZM21.8451 19.8579V18.4327C21.8451 17.8288 21.4596 17.2632 20.79 17.2611C20.3154 17.2611 19.9464 17.555 19.7578 17.9697C19.6106 17.547 19.2499 17.2611 18.7835 17.2611C18.3752 17.2611 18.0228 17.4846 17.8259 17.8268V17.4202C17.8259 17.3497 17.7658 17.2994 17.6891 17.3115C17.6331 17.3195 17.5958 17.3698 17.5958 17.4242V19.8579C17.5958 19.9283 17.6559 19.9787 17.7326 19.9666C17.7886 19.9585 17.8259 19.9082 17.8259 19.8539V18.783C17.8315 18.7774 17.8295 18.7607 17.8276 18.7454C17.8267 18.7384 17.8259 18.7317 17.8259 18.7266C17.801 18.018 18.0871 17.4846 18.7835 17.4846C19.3328 17.4846 19.6106 17.9536 19.6106 18.4307V19.8559C19.6106 19.9183 19.6583 19.9666 19.7246 19.9666C19.7806 19.9666 19.8386 19.9203 19.8386 19.8559V18.7588C19.8386 18.2032 20.1019 17.4866 20.79 17.4866C21.3393 17.4866 21.6171 17.9556 21.6171 18.4327V19.8579C21.6171 19.9203 21.6648 19.9686 21.7311 19.9686C21.7871 19.9686 21.8451 19.9223 21.8451 19.8579ZM11.0083 7.36566L7.17978 12.6014L3.35332 7.36566L7.17978 9.5598L11.0083 7.36566Z"
                            fill="#FBB142"
                          />
                        </svg>
                        0.56 Ether
                      </p>
                    </div>
                  </div>
                </div>
                {/*I-2 */}{" "}
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="">
                      <span className="bg-[rgba(79,223,177,1)] flex justify-center items-center text-center h-[38px] w-[38px] text-white">
                        ◆
                      </span>
                    </div>
                    <div className="text-[rgba(79,223,177,1)] ">
                      <p className="text-gray-500 text-xs">Weekly Returns</p>
                      <p className="text-sm text-[rgba(79,223,177,1)]] font-semibold flex items-center gap-2">
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.0062 6.38094L7.17979 8.57709L3.35333 6.38094L7.17979 0.21521L11.0062 6.38094ZM-4.95875 18.4729C-4.89449 18.4729 -4.8406 18.4205 -4.8406 18.3581C-4.8406 17.6415 -5.39819 16.9752 -6.16721 16.9772C-6.93623 16.9772 -7.48553 17.6455 -7.48553 18.3621C-7.48553 19.0788 -6.93831 19.7471 -6.16721 19.7471C-5.71741 19.7471 -5.25931 19.5558 -5.02922 19.1653C-5.01886 19.1452 -5.00849 19.1251 -5.01471 19.0888C-5.02093 19.0526 -5.04581 19.0224 -5.07897 19.0083C-5.14116 18.9821 -5.1909 19.0103 -5.22407 19.0546C-5.45415 19.3726 -5.75679 19.5236 -6.16721 19.5236C-6.76626 19.5236 -7.19119 19.0224 -7.24923 18.4729H-4.95875ZM-6.16721 17.1966C-5.56816 17.1966 -5.13494 17.6979 -5.08519 18.2474H-7.24923C-7.19119 17.6979 -6.76626 17.1966 -6.16721 17.1966ZM-1.94899 17.1423C-1.94899 17.0879 -1.99666 17.0316 -2.06299 17.0316H-2.67448V16.172C-2.67448 16.1016 -2.73459 16.0512 -2.81129 16.0633C-2.86725 16.0714 -2.90456 16.1217 -2.90456 16.1761V17.0316H-3.49532C-3.55958 17.0316 -3.60933 17.0859 -3.60933 17.1423C-3.60933 17.2047 -3.56165 17.253 -3.49532 17.253H-2.90456V19.5921C-2.90456 19.6464 -2.85689 19.7028 -2.79056 19.7028C-2.7263 19.7028 -2.67655 19.6484 -2.67655 19.5921V17.253H-2.06299C-1.99874 17.253 -1.94899 17.2067 -1.94899 17.1423ZM1.68262 19.578V18.1608C1.68262 17.5569 1.29708 16.9833 0.625477 16.9833C0.217128 16.9833 -0.135255 17.2147 -0.332175 17.5569V14.924C-0.332175 14.8696 -0.37985 14.8133 -0.446181 14.8133C-0.510438 14.8133 -0.560187 14.8676 -0.560187 14.924V19.578C-0.560187 19.6484 -0.500073 19.6988 -0.423378 19.6867C-0.367412 19.6786 -0.330101 19.6283 -0.330101 19.5739V18.5111C-0.330101 18.5078 -0.331524 18.4937 -0.33319 18.4773C-0.335548 18.454 -0.338393 18.4259 -0.338393 18.4165C-0.37985 17.8025 -0.0772157 17.2067 0.627549 17.2067C1.17685 17.2067 1.45461 17.6838 1.45461 18.1608V19.578C1.45461 19.6404 1.50229 19.6887 1.56862 19.6887C1.62458 19.6887 1.68262 19.6424 1.68262 19.578ZM5.66869 18.4729C5.73295 18.4729 5.78684 18.4205 5.78684 18.3581C5.78477 17.6415 5.22925 16.9752 4.46022 16.9772C3.6912 16.9772 3.1419 17.6455 3.1419 18.3621C3.1419 19.0788 3.68913 19.7471 4.46022 19.7471C4.91003 19.7471 5.36813 19.5558 5.59821 19.1653C5.60858 19.1452 5.61894 19.1251 5.61272 19.0888C5.6065 19.0526 5.58163 19.0224 5.54846 19.0083C5.48628 18.9821 5.43653 19.0103 5.40337 19.0546C5.17328 19.3726 4.87065 19.5236 4.46022 19.5236C3.86117 19.5236 3.43624 19.0224 3.3782 18.4729H5.66869ZM4.45815 17.1966C5.0572 17.1966 5.49042 17.6979 5.54017 18.2474H3.37613C3.43417 17.6979 3.8591 17.1966 4.45815 17.1966ZM8.49189 17.253C8.55615 17.2449 8.59761 17.2067 8.59761 17.1342C8.59761 17.0698 8.53128 17.0316 8.47531 17.0296C8.08354 17.0296 7.70629 17.3234 7.51766 17.6334V17.1403C7.51766 17.0698 7.45755 17.0195 7.38085 17.0316C7.32489 17.0396 7.28758 17.0899 7.28758 17.1443V19.5699C7.28758 19.6404 7.34769 19.6907 7.42438 19.6786C7.48035 19.6706 7.51766 19.6202 7.51766 19.5659V18.503C7.51766 17.881 7.82029 17.3476 8.49189 17.253ZM12.2396 18.4729C12.3038 18.4729 12.3577 18.4205 12.3577 18.3581C12.3557 17.6415 11.8001 16.9752 11.0311 16.9772C10.2621 16.9772 9.7128 17.6455 9.7128 18.3621C9.7128 19.0788 10.26 19.7471 11.0311 19.7471C11.4809 19.7471 11.939 19.5558 12.1691 19.1653C12.1795 19.1452 12.1898 19.1251 12.1836 19.0888C12.1774 19.0526 12.1525 19.0224 12.1194 19.0083C12.0572 18.9821 12.0074 19.0103 11.9743 19.0546C11.7442 19.3726 11.4415 19.5236 11.0311 19.5236C10.4321 19.5236 10.0071 19.0224 9.9491 18.4729H12.2396ZM11.029 17.1966C11.6281 17.1966 12.0613 17.6979 12.1111 18.2474H9.94702C10.0051 17.6979 10.43 17.1966 11.029 17.1966ZM16.0536 19.5921V17.1624C16.0536 17.1121 16.0204 17.0658 15.9707 17.0497C15.8899 17.0275 15.8235 17.092 15.8235 17.1564V18.0642C15.8235 18.8352 15.6432 19.5357 14.8721 19.5357C14.3228 19.5357 14.045 19.0586 14.045 18.5816V17.1564C14.045 17.102 13.9973 17.0457 13.931 17.0457C13.8668 17.0457 13.817 17.1 13.817 17.1564V18.5816C13.817 19.1854 14.1943 19.7591 14.8742 19.7591C15.3012 19.7591 15.637 19.4975 15.8256 19.1311V19.5921C15.8256 19.6545 15.8733 19.7028 15.9396 19.7028C15.9956 19.7028 16.0536 19.6565 16.0536 19.5921ZM21.8451 19.578V18.1528C21.8451 17.5489 21.4596 16.9833 20.79 16.9812C20.3154 16.9812 19.9464 17.2751 19.7578 17.6898C19.6106 17.2671 19.2499 16.9812 18.7835 16.9812C18.3752 16.9812 18.0228 17.2047 17.8259 17.5469V17.1403C17.8259 17.0698 17.7658 17.0195 17.6891 17.0316C17.6331 17.0396 17.5958 17.0899 17.5958 17.1443V19.578C17.5958 19.6484 17.6559 19.6988 17.7326 19.6867C17.7886 19.6786 17.8259 19.6283 17.8259 19.5739V18.503C17.8315 18.4975 17.8295 18.4808 17.8276 18.4655C17.8267 18.4585 17.8259 18.4518 17.8259 18.4467C17.801 17.7381 18.0871 17.2047 18.7835 17.2047C19.3328 17.2047 19.6106 17.6737 19.6106 18.1508V19.576C19.6106 19.6384 19.6583 19.6867 19.7246 19.6867C19.7806 19.6867 19.8386 19.6404 19.8386 19.576V18.4789C19.8386 17.9233 20.1019 17.2067 20.79 17.2067C21.3393 17.2067 21.6171 17.6757 21.6171 18.1528V19.578C21.6171 19.6404 21.6648 19.6887 21.7311 19.6887C21.7871 19.6887 21.8451 19.6424 21.8451 19.578ZM11.0083 7.0855L7.17978 12.3212L3.35332 7.0855L7.17978 9.27964L11.0083 7.0855Z"
                            fill="#4FDFB1"
                          />
                        </svg>
                        0.005 Ether
                      </p>
                    </div>
                  </div>
                </div>
                {/*I-3 */}{" "}
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="">
                      <span className="bg-[rgba(237,91,117,1)] flex justify-center items-center text-center h-[38px] w-[38px] text-white">
                        ◆
                      </span>
                    </div>
                    <div className="">
                      {" "}
                      <p className="text-gray-500 text-xs">Expenses</p>
                      <p className="text-sm font-semibold text-[rgba(237,91,117,1)] flex items-center gap-2">
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 14 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.0062 7.10091L7.17979 9.29706L3.35333 7.10091L7.17979 0.935181L11.0062 7.10091ZM-4.95875 19.1928C-4.89449 19.1928 -4.8406 19.1405 -4.8406 19.0781C-4.8406 18.3615 -5.39819 17.6952 -6.16721 17.6972C-6.93623 17.6972 -7.48553 18.3655 -7.48553 19.0821C-7.48553 19.7987 -6.93831 20.467 -6.16721 20.467C-5.71741 20.467 -5.25931 20.2758 -5.02922 19.8853C-5.01886 19.8652 -5.00849 19.845 -5.01471 19.8088C-5.02093 19.7726 -5.04581 19.7424 -5.07897 19.7283C-5.14116 19.7021 -5.1909 19.7303 -5.22407 19.7746C-5.45415 20.0926 -5.75679 20.2436 -6.16721 20.2436C-6.76626 20.2436 -7.19119 19.7424 -7.24923 19.1928H-4.95875ZM-6.16721 17.9166C-5.56816 17.9166 -5.13494 18.4178 -5.08519 18.9674H-7.24923C-7.19119 18.4178 -6.76626 17.9166 -6.16721 17.9166ZM-1.94899 17.8622C-1.94899 17.8079 -1.99666 17.7515 -2.06299 17.7515H-2.67448V16.892C-2.67448 16.8215 -2.73459 16.7712 -2.81129 16.7833C-2.86725 16.7913 -2.90456 16.8417 -2.90456 16.896V17.7515H-3.49532C-3.55958 17.7515 -3.60933 17.8059 -3.60933 17.8622C-3.60933 17.9247 -3.56165 17.973 -3.49532 17.973H-2.90456V20.312C-2.90456 20.3664 -2.85689 20.4227 -2.79056 20.4227C-2.7263 20.4227 -2.67655 20.3684 -2.67655 20.312V17.973H-2.06299C-1.99874 17.973 -1.94899 17.9267 -1.94899 17.8622ZM1.68262 20.2979V18.8808C1.68262 18.2769 1.29708 17.7032 0.625477 17.7032C0.217128 17.7032 -0.135255 17.9347 -0.332175 18.2769V15.644C-0.332175 15.5896 -0.37985 15.5332 -0.446181 15.5332C-0.510438 15.5332 -0.560187 15.5876 -0.560187 15.644V20.2979C-0.560187 20.3684 -0.500073 20.4187 -0.423378 20.4066C-0.367412 20.3986 -0.330101 20.3483 -0.330101 20.2939V19.2311C-0.330101 19.2277 -0.331524 19.2137 -0.33319 19.1972C-0.335548 19.174 -0.338393 19.1459 -0.338393 19.1365C-0.37985 18.5225 -0.0772157 17.9267 0.627549 17.9267C1.17685 17.9267 1.45461 18.4037 1.45461 18.8808V20.2979C1.45461 20.3603 1.50229 20.4087 1.56862 20.4087C1.62458 20.4087 1.68262 20.3624 1.68262 20.2979ZM5.66869 19.1928C5.73295 19.1928 5.78684 19.1405 5.78684 19.0781C5.78477 18.3615 5.22925 17.6952 4.46022 17.6972C3.6912 17.6972 3.1419 18.3655 3.1419 19.0821C3.1419 19.7987 3.68913 20.467 4.46022 20.467C4.91003 20.467 5.36813 20.2758 5.59821 19.8853C5.60858 19.8652 5.61894 19.845 5.61272 19.8088C5.6065 19.7726 5.58163 19.7424 5.54846 19.7283C5.48628 19.7021 5.43653 19.7303 5.40337 19.7746C5.17328 20.0926 4.87065 20.2436 4.46022 20.2436C3.86117 20.2436 3.43624 19.7424 3.3782 19.1928H5.66869ZM4.45815 17.9166C5.0572 17.9166 5.49042 18.4178 5.54017 18.9674H3.37613C3.43417 18.4178 3.8591 17.9166 4.45815 17.9166ZM8.49189 17.973C8.55615 17.9649 8.59761 17.9267 8.59761 17.8542C8.59761 17.7898 8.53128 17.7515 8.47531 17.7495C8.08354 17.7495 7.70629 18.0434 7.51766 18.3534V17.8602C7.51766 17.7898 7.45755 17.7395 7.38085 17.7515C7.32489 17.7596 7.28758 17.8099 7.28758 17.8643V20.2899C7.28758 20.3603 7.34769 20.4107 7.42438 20.3986C7.48035 20.3905 7.51766 20.3402 7.51766 20.2859V19.223C7.51766 18.601 7.82029 18.0676 8.49189 17.973ZM12.2396 19.1928C12.3038 19.1928 12.3577 19.1405 12.3577 19.0781C12.3557 18.3615 11.8001 17.6952 11.0311 17.6972C10.2621 17.6972 9.7128 18.3655 9.7128 19.0821C9.7128 19.7987 10.26 20.467 11.0311 20.467C11.4809 20.467 11.939 20.2758 12.1691 19.8853C12.1795 19.8652 12.1898 19.845 12.1836 19.8088C12.1774 19.7726 12.1525 19.7424 12.1194 19.7283C12.0572 19.7021 12.0074 19.7303 11.9743 19.7746C11.7442 20.0926 11.4415 20.2436 11.0311 20.2436C10.4321 20.2436 10.0071 19.7424 9.9491 19.1928H12.2396ZM11.029 17.9166C11.6281 17.9166 12.0613 18.4178 12.1111 18.9674H9.94702C10.0051 18.4178 10.43 17.9166 11.029 17.9166ZM16.0536 20.312V17.8824C16.0536 17.8321 16.0204 17.7858 15.9707 17.7697C15.8899 17.7475 15.8235 17.8119 15.8235 17.8763V18.7842C15.8235 19.5552 15.6432 20.2557 14.8721 20.2557C14.3228 20.2557 14.045 19.7786 14.045 19.3015V17.8763C14.045 17.822 13.9973 17.7656 13.931 17.7656C13.8668 17.7656 13.817 17.82 13.817 17.8763V19.3015C13.817 19.9054 14.1943 20.4791 14.8742 20.4791C15.3012 20.4791 15.637 20.2174 15.8256 19.8511V20.312C15.8256 20.3744 15.8733 20.4227 15.9396 20.4227C15.9956 20.4227 16.0536 20.3764 16.0536 20.312ZM21.8451 20.2979V18.8728C21.8451 18.2689 21.4596 17.7032 20.79 17.7012C20.3154 17.7012 19.9464 17.9951 19.7578 18.4098C19.6106 17.9871 19.2499 17.7012 18.7835 17.7012C18.3752 17.7012 18.0228 17.9247 17.8259 18.2669V17.8602C17.8259 17.7898 17.7658 17.7395 17.6891 17.7515C17.6331 17.7596 17.5958 17.8099 17.5958 17.8643V20.2979C17.5958 20.3684 17.6559 20.4187 17.7326 20.4066C17.7886 20.3986 17.8259 20.3483 17.8259 20.2939V19.223C17.8315 19.2175 17.8295 19.2007 17.8276 19.1855C17.8267 19.1785 17.8259 19.1717 17.8259 19.1667C17.801 18.4581 18.0871 17.9247 18.7835 17.9247C19.3328 17.9247 19.6106 18.3937 19.6106 18.8707V20.2959C19.6106 20.3583 19.6583 20.4066 19.7246 20.4066C19.7806 20.4066 19.8386 20.3603 19.8386 20.2959V19.1989C19.8386 18.6433 20.1019 17.9267 20.79 17.9267C21.3393 17.9267 21.6171 18.3957 21.6171 18.8728V20.2979C21.6171 20.3603 21.6648 20.4087 21.7311 20.4087C21.7871 20.4087 21.8451 20.3624 21.8451 20.2979ZM11.0083 7.80547L7.17978 13.0412L3.35332 7.80547L7.17978 9.99961L11.0083 7.80547Z"
                            fill="#ED5B75"
                          />
                        </svg>
                        0.005 Ether
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='h-full flex space-x-8'>
                <div className="h-full bg-white flex items-baseline gap-6">
                    <div className='w-1 rounded-lg h-9/12 bg-[#FBB142]'></div>
                    <div className='w-1 rounded-lg h-10/12 bg-[#4FDFB1]'></div>
                    <div className='w-1 rounded-lg h-7/12 bg-[#ED5B75]'></div>
                </div>
                <div className='h-full text-gray-400 text-xs flex flex-col justify-between'>
                  <p>MAX</p>
                  <p>MIN</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-3/5 p-1 flex justify-between gap-4">
          {/* NFTs Owned */}
            <div className="w-1/4 h-full flex flex-col justify-around
            ">
              <div className='flex justify-between items-between p-1'>
                <p className="text-sm font-semibold">NFTs owned</p>
                <BsThreeDots />
              </div>
              <div className="flex flex-col space-y-4">
                {nftsOwned.map((nft, index) => (
                  <div
                    key={index}
                    className="bg-white p-2 rounded-lg flex items-center gap-4 justify-between"
                  >
                    <div>
                      <p className="text-xs text-gray-500 ">{nft.name}</p>
                      <p className="text-sm text-black font-bold flex items-center gap-1">
                        <span className="">
                          <svg
                            width="21"
                            height="21"
                            viewBox="0 0 14 15"
                            fill="black"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.956 7.00643L7.12955 9.20258L3.3031 7.00643L7.12955 0.840698L10.956 7.00643ZM-5.00898 19.0983C-4.94472 19.0983 -4.89083 19.046 -4.89083 18.9836C-4.89083 18.267 -5.44842 17.6007 -6.21744 17.6027C-6.98647 17.6027 -7.53577 18.271 -7.53577 18.9876C-7.53577 19.7042 -6.98854 20.3725 -6.21744 20.3725C-5.76764 20.3725 -5.30954 20.1813 -5.07945 19.7908C-5.06909 19.7707 -5.05873 19.7505 -5.06494 19.7143C-5.07116 19.6781 -5.09604 19.6479 -5.1292 19.6338C-5.19139 19.6076 -5.24114 19.6358 -5.2743 19.6801C-5.50439 19.9981 -5.80702 20.1491 -6.21744 20.1491C-6.81649 20.1491 -7.24142 19.6479 -7.29946 19.0983H-5.00898ZM-6.21744 17.8221C-5.61839 17.8221 -5.18517 18.3233 -5.13542 18.8729H-7.29946C-7.24142 18.3233 -6.81649 17.8221 -6.21744 17.8221ZM-1.99922 17.7678C-1.99922 17.7134 -2.0469 17.6571 -2.11323 17.6571H-2.72471V16.7975C-2.72471 16.7271 -2.78482 16.6767 -2.86152 16.6888C-2.91749 16.6969 -2.9548 16.7472 -2.9548 16.8015V17.6571H-3.54556C-3.60981 17.6571 -3.65956 17.7114 -3.65956 17.7678C-3.65956 17.8302 -3.61189 17.8785 -3.54556 17.8785H-2.9548V20.2175C-2.9548 20.2719 -2.90712 20.3283 -2.84079 20.3283C-2.77653 20.3283 -2.72678 20.2739 -2.72678 20.2175V17.8785H-2.11323C-2.04897 17.8785 -1.99922 17.8322 -1.99922 17.7678ZM1.63239 20.2035V18.7863C1.63239 18.1824 1.24684 17.6087 0.575245 17.6087C0.166896 17.6087 -0.185487 17.8402 -0.382407 18.1824V15.5495C-0.382407 15.4951 -0.430082 15.4388 -0.496413 15.4388C-0.56067 15.4388 -0.610419 15.4931 -0.610419 15.5495V20.2035C-0.610419 20.2739 -0.550305 20.3242 -0.47361 20.3122C-0.417644 20.3041 -0.380333 20.2538 -0.380333 20.1994V19.1366C-0.380333 19.1333 -0.381756 19.1192 -0.383422 19.1028C-0.38578 19.0795 -0.388625 19.0514 -0.388625 19.042C-0.430082 18.428 -0.127448 17.8322 0.577317 17.8322C1.12662 17.8322 1.40438 18.3093 1.40438 18.7863V20.2035C1.40438 20.2659 1.45205 20.3142 1.51838 20.3142C1.57435 20.3142 1.63239 20.2679 1.63239 20.2035ZM5.61846 19.0983C5.68272 19.0983 5.73661 19.046 5.73661 18.9836C5.73454 18.267 5.17902 17.6007 4.40999 17.6027C3.64097 17.6027 3.09167 18.271 3.09167 18.9876C3.09167 19.7042 3.6389 20.3725 4.40999 20.3725C4.8598 20.3725 5.3179 20.1813 5.54798 19.7908C5.55834 19.7707 5.56871 19.7505 5.56249 19.7143C5.55627 19.6781 5.5314 19.6479 5.49823 19.6338C5.43605 19.6076 5.3863 19.6358 5.35313 19.6801C5.12305 19.9981 4.82041 20.1491 4.40999 20.1491C3.81094 20.1491 3.38601 19.6479 3.32797 19.0983H5.61846ZM4.40792 17.8221C5.00697 17.8221 5.44019 18.3233 5.48994 18.8729H3.3259C3.38394 18.3233 3.80887 17.8221 4.40792 17.8221ZM8.44166 17.8785C8.50592 17.8704 8.54737 17.8322 8.54737 17.7597C8.54737 17.6953 8.48104 17.6571 8.42508 17.655C8.03331 17.655 7.65606 17.9489 7.46743 18.2589V17.7658C7.46743 17.6953 7.40732 17.645 7.33062 17.6571C7.27465 17.6651 7.23734 17.7154 7.23734 17.7698V20.1954C7.23734 20.2659 7.29745 20.3162 7.37415 20.3041C7.43012 20.2961 7.46743 20.2457 7.46743 20.1914V19.1285C7.46743 18.5065 7.77006 17.9731 8.44166 17.8785ZM12.1894 19.0983C12.2536 19.0983 12.3075 19.046 12.3075 18.9836C12.3054 18.267 11.7499 17.6007 10.9809 17.6027C10.2119 17.6027 9.66256 18.271 9.66256 18.9876C9.66256 19.7042 10.2098 20.3725 10.9809 20.3725C11.4307 20.3725 11.8888 20.1813 12.1189 19.7908C12.1292 19.7707 12.1396 19.7505 12.1334 19.7143C12.1272 19.6781 12.1023 19.6479 12.0691 19.6338C12.0069 19.6076 11.9572 19.6358 11.924 19.6801C11.6939 19.9981 11.3913 20.1491 10.9809 20.1491C10.3818 20.1491 9.95691 19.6479 9.89887 19.0983H12.1894ZM10.9788 17.8221C11.5779 17.8221 12.0111 18.3233 12.0608 18.8729H9.89679C9.95483 18.3233 10.3798 17.8221 10.9788 17.8221ZM16.0034 20.2175V17.7879C16.0034 17.7376 15.9702 17.6913 15.9205 17.6752C15.8396 17.653 15.7733 17.7174 15.7733 17.7819V18.6897C15.7733 19.4607 15.593 20.1612 14.8219 20.1612C14.2726 20.1612 13.9948 19.6841 13.9948 19.207V17.7819C13.9948 17.7275 13.9471 17.6711 13.8808 17.6711C13.8165 17.6711 13.7668 17.7255 13.7668 17.7819V19.207C13.7668 19.8109 14.144 20.3846 14.8239 20.3846C15.2509 20.3846 15.5867 20.1229 15.7754 19.7566V20.2175C15.7754 20.28 15.823 20.3283 15.8894 20.3283C15.9453 20.3283 16.0034 20.282 16.0034 20.2175ZM21.7949 20.2035V18.7783C21.7949 18.1744 21.4093 17.6087 20.7398 17.6067C20.2651 17.6067 19.8962 17.9006 19.7075 18.3153C19.5604 17.8926 19.1997 17.6067 18.7333 17.6067C18.3249 17.6067 17.9726 17.8302 17.7756 18.1724V17.7658C17.7756 17.6953 17.7155 17.645 17.6388 17.6571C17.5829 17.6651 17.5456 17.7154 17.5456 17.7698V20.2035C17.5456 20.2739 17.6057 20.3242 17.6824 20.3122C17.7383 20.3041 17.7756 20.2538 17.7756 20.1994V19.1285C17.7813 19.123 17.7792 19.1062 17.7774 19.091C17.7765 19.084 17.7756 19.0773 17.7756 19.0722C17.7508 18.3636 18.0368 17.8302 18.7333 17.8302C19.2826 17.8302 19.5604 18.2992 19.5604 18.7763V20.2014C19.5604 20.2638 19.608 20.3122 19.6744 20.3122C19.7303 20.3122 19.7884 20.2659 19.7884 20.2014V19.1044C19.7884 18.5488 20.0516 17.8322 20.7398 17.8322C21.2891 17.8322 21.5669 18.3012 21.5669 18.7783V20.2035C21.5669 20.2659 21.6145 20.3142 21.6809 20.3142C21.7368 20.3142 21.7949 20.2679 21.7949 20.2035ZM10.9582 7.7112L7.12967 12.9469L3.30321 7.7112L7.12967 9.90534L10.9582 7.7112Z"
                              fill="#272727"
                            />
                          </svg>
                        </span>
                        {nft.value}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-6 w-12 ${
                          nft.change.includes("+")
                            ? "bg-green-100"
                            : "bg-red-100"
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
                          nft.change.includes("+")
                            ? "text-green-500"
                            : "text-red-500"
                        }
                      >
                        {nft.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='w-3/4 h-full flex flex-col'>
                {/* My Portfolio */}
                <div className='w-full h-1/3'>
                  <p className='text-sm font-bold my-1'>My Portfolio</p>
                  <div className="flex space-x-2 p-1">
                    {portfolio.map((pf, index) => (
                      <div key={index} className='w-full p-2 bg-white rounded-lg flex space-x-4'>
                          <img src={pf.img} alt="" className='rounded-lg overflow-hidden'/>
                          <div>
                            <p className='text-sm'>{pf.name}</p>
                            <p className='text-md text-gray-300'>{pf.ether}</p>
                          </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Total Distributions */}
                <div className="w-full h-2/3 px-4 py-2 bg-white rounded-lg flex flex-col justify-center items-between space-y-2">
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
      <div className='w-3/12 h-full bg-white rounded-lg px-4'>
        
        {/* My Cards */}
        <div className='w-full h-2/4 p-4 flex flex-col space-y-4'>
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
        <div className="w-full h-2/4 flex flex-col space-y-2">
          <div className='w-full h-1/6 flex justify-between items-between p-1'>
            <p className="text-sm font-semibold">Top Picks</p>
            <BsThreeDots />
          </div>
          <div className="w-full h-5/6 flex flex-col justify-around">
            {topPicks.map((pick, index) => (
              <div
                key={index}
                className="flex items-center justify-between"
              >
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
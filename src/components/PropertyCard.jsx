import { IoBedSharp } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import { TbRulerMeasure } from "react-icons/tb";
import { useSelector } from "react-redux";

export default function PropertyCard({property}){

    const theme = useSelector(state => state.theme)
    return ( 
        <div className={`${theme === `light` ? `bg-white` : `bg-[#1F2937]`} rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out overflow-hidden shadow-sm`}>
            <div className="relative ">
                <img  className='w-full h-48 object-cover object-center' src={property.image} alt={property.title}/>
                {property.featured && (
                    <span className='flex items-center absolute top-2 left-2 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium'>
                      <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.78667 5.87999C7.73333 5.71999 7.62667 5.63999 7.46667 5.63999H5.50667L6.06667 1.07999C6.09333 0.919992 6.03333 0.799993 5.88667 0.719993C5.74 0.639993 5.6 0.653326 5.46667 0.759993L0.106667 5.71999C0 5.85333 -0.0266667 5.99333 0.0266667 6.13999C0.08 6.28666 0.186667 6.35999 0.346667 6.35999H2.30667L1.74667 10.92C1.72 11.08 1.78 11.2 1.92667 11.28C2.07333 11.36 2.21333 11.3467 2.34667 11.24L7.70667 6.23999C7.81333 6.13333 7.84 6.01333 7.78667 5.87999ZM2.58667 10.04L3.06667 6.03999C3.09333 5.93333 3.06667 5.83999 2.98667 5.75999C2.90667 5.67999 2.81333 5.63999 2.70667 5.63999H1.22667L5.22667 1.95999L4.74667 5.95999C4.72 6.06666 4.74667 6.15999 4.82667 6.23999C4.90667 6.31999 5 6.35999 5.10667 6.35999H6.58667L2.58667 10.04Z" fill="white"/>
                      </svg>
                      FEATURED
                    </span>
                )}
            </div>
            <div className="p-4 flex flex-col space-y-2">
                <div className=" flex justify-between items-center mb-2">
                    <span className='text-xl font-bold'> ${property.price} / mo</span>
                </div>
                <h3 className='text-md font-bold'>{property.title}</h3>
                <p className='text-sm text-gray-600'>{property.location}</p>
                <div className="flex justify-between gap-2 text-gray-600 text-sm">
                    <div className="flex gap-1">
                        <IoBedSharp className="text-md"/>
                         <span className="text-xs">{property.beds} Beds</span>
                    </div>
                    <div className="flex gap-1">
                        <LiaBathSolid className="text-md"/>
                         <span className="text-xs">{property.baths} Baths</span>
                    </div>
                    <div className="flex gap-1">
                        <TbRulerMeasure className="text-md"/>
                        <span className="text-xs">{property.sqft} Sqft</span>
                    </div>
                </div>
            </div>
        </div>
    )
  }
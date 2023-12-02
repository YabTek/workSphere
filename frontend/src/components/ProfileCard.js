import React from 'react';
import status from "../assets/statusImg.png";

const ProfileCard = () => {
  return (
    <div className="items-center bg-[#D3DEF9] w-64 h-56 shadow-2xl shadow-indigo-500/70 rounded-lg ">
      <header className="bg-[#B470AD] h-[80px] rounded-sm rounded-tr-14  shadow-2xl shadow-indigo-500/50 relative">
        <img src={status} alt="" className="relative bottom-0 mx-auto transform translate-y-10 w-[4.5rem] h-[4.5rem] border-2 border-gray-200 rounded-full " />
      </header>
    <div className="flex flex-col border-t border-solid border-gray-300 text-center">
        <div className="flex-1">
          <h2 className="pt-8 font-semibold text-lg">Abebe Bikela</h2>
        </div>
        <button
        className="text-md text-[#0404FF] mt-3  hover:underline hover:text-[#B40DA4]"
        >
          View freelancer's application
        </button>
      </div>
      
    </div>
  );
}

export default ProfileCard;

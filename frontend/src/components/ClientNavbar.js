import React from 'react'
import { Link } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import profile from "../assets/profile.png";


const ClientNavbar = () => {
  return (
    <div class="flex justify-around my-14 items-center">
    <div>
      <button class="rounded-lg bg-[#F5C1F4] hover:bg-blue-300 w-20 h-10  mx-10 text-xl text-serif font-bold border-none shadow-lg">
        Ask?
      </button>
    </div>
    <div class="flex items-center">
      <Link to="/clientSettings" >
        <SettingsIcon class="w-8"/>
      </Link>
      <NotificationsIcon class="w-8 mx-4"/>
      <img
        class="w-20 h-12 rounded-full -ml-3 mr-6"
        src={profile}
        alt=""
      />
    </div>
  </div>
  )
}

export default ClientNavbar

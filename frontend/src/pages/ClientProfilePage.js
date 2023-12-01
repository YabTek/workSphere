import React from 'react'
import Logo from "../components/logo";
import profile from "../assets/profile.png";
import setting from "../assets/setting.png";
import bell from "../assets/bell.png";
import InputField from "../components/InputField";

const ClientProfilePage = () => {
  return (
    <div>
      <div class="flex justify-between">
        <Logo />
        <div class="flex justify-around my-14 items-center">
          <div>
            <button class="rounded-lg bg-[#F5C1F4] hover:bg-blue-300 w-20 h-10  mx-10 text-xl text-serif font-bold border-none shadow-lg">
              Ask?
            </button>
          </div>
          <div class="flex items-center">
            <img class="w-16 h-8 rounded-full" src={setting} alt="" />
            <img class="w-16 h-8 rounded-full -ml-3" src={bell} alt="" />
            <img
              class="w-20 h-12 rounded-full -ml-3 mr-6"
              src={profile}
              alt=""
            />
          </div>
        </div>
      </div>
      <form>
        <div class="p-10">
          <InputField label="Job title" />
          <InputField label="Job description" />
          <InputField label="Location" />
          <InputField label="Salary" />
          <InputField label="Working hours" />
          <button
            type="submit"
            class=" bg-[#B0E8E8] hover:bg-blue-300 rounded-lg w-[42.5rem] p-3.5 font-bold text-xl font-serif text-black-50 ml-8 my-8 "
          >
            Post job
          </button>
        </div>
      </form>
    </div>
  )
}

export default ClientProfilePage

import React from "react";
import Logo from "../components/logo";
import profile from "../assets/profile.png";
import setting from "../assets/setting.png";
import bell from "../assets/bell.png";
import Card from "../components/Card";

const JobListPage = () => {
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

      <form class="flex items-center justify-center my-20">
        <div class="w-[36rem]">
          <input
            type="text"
            class="bg-[#BBC9EE] border border-gray-300 text-black font-800 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
            placeholder="Search for jobs..."
            required
          />
        </div>
        <button
          type="submit"
          class="p-4 ml-2 text-lg font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          <svg
            class="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </form>
      <Card
        title="Backend developer"
        description="Are you on the lookout for a seasoned backend developer who can skillfully tackle your 
        projects with a deep well of expertise and unwavering precision? Our quest leads us
        to seek out a proficient backend developer, a true maestro of code, who can 
        seamlessly translate your conceptual ideas into high-quality, impeccably functional
        solutions that not only meet but exceed your expectations."
        salary="20$ per hour"
        hours="40hrs"
      />
      <Card
        title="Web developer"
        description="Are you on the lookout for a seasoned backend developer who can skillfully tackle your 
        projects with a deep well of expertise and unwavering precision? Our quest leads us
        to seek out a proficient backend developer, a true maestro of code, who can 
        seamlessly translate your conceptual ideas into high-quality, impeccably functional
        solutions that not only meet but exceed your expectations."
        salary="20$ per hour"
        hours="40hrs"
      />
      <Card
        title="Python developer"
        description="Are you on the lookout for a seasoned backend developer who can skillfully tackle your 
        projects with a deep well of expertise and unwavering precision? Our quest leads us
        to seek out a proficient backend developer, a true maestro of code, who can 
        seamlessly translate your conceptual ideas into high-quality, impeccably functional
        solutions that not only meet but exceed your expectations."
        salary="20$ per hour"
        hours="40hrs"
      />
    </div>
  );
};

export default JobListPage;
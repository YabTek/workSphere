import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/logo";
import loginimg from "../assets/loginimg.png";

const AuthPage = () => {
  return (
    <div>
      <Logo />
      <div class="flex justify-around px-12">
        <div class="py-[7rem]">
          <Link to="/signup/client">
            <button class=" bg-[#DCE4E4] hover:bg-blue-300 rounded-lg w-full p-3.5 font-bold text-xl font-serif text-black-50 text-center my-8 mb-2">
              Register as a client
            </button>
          </Link>
          <Link to="/signup/freelancer">
            <button class=" bg-[#DCE4E4] hover:bg-blue-300 rounded-lg w-full p-3.5 font-bold text-xl font-serif text-black-50 text-center my-8 mb-2">
              Register as a freelancer
            </button>
          </Link>
        </div>
        <img class="h-[24rem] w-[20rem]" src={loginimg} alt="" />
      </div>
    </div>
  );
};

export default AuthPage;

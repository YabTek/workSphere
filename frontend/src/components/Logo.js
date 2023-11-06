import React from "react";
import logoImg from "../assets/logoImg.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link class="flex p-12" to="/">
      <img class="w-12 h-12 rouded-full" src={logoImg} alt="logo" />
      <p class="text-2xl text-[#56AAAA] py-3">work</p>
      <p class="text-3xl text-[#C882C6] py-2">Sphere</p>
    </Link>
  );
};

export default Logo;

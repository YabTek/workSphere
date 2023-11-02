import React from "react";
import Logo from "../components/Logo";
import Position from "../components/Position";
import workingimg from "../assets/working.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import react from "../assets/react.png";
import python from "../assets/python.png";
import phone from "../assets/phone.png";
import go from "../assets/go.png";
import nodejs from "../assets/nodejs.png";
import adobeps from "../assets/adobe-photoshop.png";

const LandingPage = () => {
  return (
    <div>
      <div class="md:flex justify-between">
        <Logo />
        <div>
          <button class="w-36 h-10  text-2xl font-serif font-bold bg-[#C8F3F3] border-none shadow-md">
            login
          </button>
          <button class="w-36 h-10 my-14 mx-16 text-2xl font-serif font-bold bg-[#C8F3F3] border-none shadow-md">
            signup
          </button>
        </div>
      </div>
      <div class="flex justify-around mb-16">
        <div class="text-3xl py-60">
          <p>Make your dreams</p>
          <p>
            a reality with{" "}
            <span class="text-3xl text-[#56AAAA] py-3">work</span>
            <span class="text-3xl text-[#C882C6] py-2">Sphere</span>
          </p>
        </div>
        <img class="h-1/4 w-2/5 py-12" src={workingimg} alt="" />
      </div>
      <p class="text-4xl px-[400px] my-6 font-bold">
        What is <span class="text-4xl text-[#56AAAA] py-3">work</span>
        <span class="text-4xl text-[#C882C6] py-2">Sphere ?</span>
      </p>
      <p class="text-xl text-neutral-600 px-[100px]">
        WorkSphere is a revolutionary platform that transcends the traditional
        concept of a job vacancy portal. It is a vibrant and forward-thinking
        ecosystem where individuals can harness their potential and transform
        their dreams into tangible accomplishments. Our platform serves as the
        nexus where aspirations come to life, talents discover their true
        calling, and grand visions are transformed into concrete realities. We
        are not merely a job-matching service; we are your dynamic partner in
        personal and professional growth.
      </p>

      <div class="p-10 my-8">
        <div class="flex justify-around">
          <Position title="Web developer" image={react} />
          <Position title="Mobile developer" image={phone} />
          <Position title="Golang developer" image={go} />
        </div>
        <div class="flex justify-around py-16">
          <Position title="Python developer" image={python} />
          <Position title="Graphic designer" image={adobeps} />
          <Position title="Nodejs developer" image={nodejs} />
        </div>
      </div>

      <div class="flex justify-end py-16">
        <h1 class = "text-xl font-600">Follow us</h1>
        <img class="h-10 w-10 rouded-full" src={facebook} alt="" />
        <img class="h-10 w-10 px-2 rouded-full" src={instagram} alt="" />
        <img class="h-10 w-10 px-2 rouded-full" src={linkedin} alt="" />
      </div>
    </div>
  );
};

export default LandingPage;

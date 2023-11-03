import React from "react";
import Logo from "../components/logo";
import ready from "../assets/ready.png";

const JobDetailPage = () => {
  return (
    <div>
      <Logo />
      <div class="flex justify-around py-8">
        <div class="py-10 ml-[10rem]">
          <h2 class="text-2xl font-bold mb-4">Backend developer</h2>
          <p>
            xjbzkvhaslsbxz snvuihousl xhkbshkbkxb svkh,b vs,bvjlns.bvx,
            <br />
            bvshdvj, smvskBdv dshkkz,bdvk b,xdhkvh,
            <br />
            basdhkvgl. d ,nkjufdlbrukdf bxkfbsldj,.bv shsolefgls,
            <br />
            vd jnhjsuflgos,bskedfgkgfekhgsk dfkgsoeuflbske,gyn
          </p>
          <button class=" rounded-lg w-full h-16 bg-blue-600 hover:bg-blue-800 mt-8 text-center text-white font-semibold text-xl ">
            Apply
          </button>
        </div>
        <img class="h-[30rem] w-[40rem]" src={ready} alt="" />
      </div>
    </div>
  );
};

export default JobDetailPage;

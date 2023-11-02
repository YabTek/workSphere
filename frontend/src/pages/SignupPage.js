import React from "react";

const SignupPage = () => {
  return (
    <div class="rounded-lg h-[30rem] w-[32rem] bg-[#F6F7F7] mx-[22rem] my-[4rem]">
      <form>
        <div class="p-10">
          <input
            type="text"
            class="bg-[#DCE4E4] border-none text-gray-800 rounded-lg text-lg focus:ring-blue-500 w-full p-4 my-4"
            placeholder="Username"
            required
          />
          <input
            type="text"
            class="bg-[#DCE4E4] border-none text-gray-800  rounded-lg text-lg focus:ring-blue-500  w-full p-4 my-4"
            placeholder="Email"
            required
          />
          <input
            type="text"
            class="bg-[#DCE4E4] border-none text-gray-800  rounded-lg text-lg focus:ring-blue-500  w-full p-4 my-4"
            placeholder="Password"
            required
          />
          <button
            type="submit"
            class=" bg-[#B0E8E8] hover:bg-blue-300 rounded-lg w-full p-3.5 font-bold text-xl font-serif text-black-50 text-center my-8 mb-2"
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;

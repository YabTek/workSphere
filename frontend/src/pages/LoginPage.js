import React from "react";

const LoginPage = () => {
  return (
    <div class="rounded-lg h-[30rem] w-[32rem] bg-[#F6F7F7] mx-[22rem] my-[4rem]">
      <form>
        <div class="p-10">
          <input
            type="text"
            class="bg-[#DCE4E4] border-none text-gray-800 rounded-lg text-lg focus:ring-blue-500 w-full p-4 my-8"
            placeholder="Enter your email"
            required
          />
          <input
            type="text"
            class="bg-[#DCE4E4] border-none text-gray-800  rounded-lg text-lg focus:ring-blue-500  w-full p-4"
            placeholder="Enter your password"
            required
          />
          <button
            type="submit"
            class=" bg-[#B0E8E8] hover:bg-blue-300 rounded-lg w-full p-3.5 font-bold text-xl font-serif text-black-50 text-center my-8 mb-2"
          >
            Login
          </button>
        </div>
      </form>
      <div class="flex justify-around text-lg px-2">
        <a href="vxvd" class="text-blue-600 hover:text-blue-400">
          forget password?
        </a>
        <h1>
          Don't have an account?{" "}
          <a href="xvd" class="text-blue-600 hover:text-blue-400">
            signUp
          </a>
        </h1>
      </div>
    </div>
  );
};

export default LoginPage;

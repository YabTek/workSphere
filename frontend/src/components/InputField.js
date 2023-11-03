import React from "react";

const InputField = ({ label }) => {
  return (
    <div class="ml-8 mr-[25rem]">
      <label class="text-md font-semibold">{label}</label>
      <input
        type="text"
        class=" relative mt-1 rounded-lg shadow-sm bg-[#DCE4E4] border-none text-gray-800 rounded-lg text-lg focus:ring-blue-500 w-full p-4 my-8"
        required
      />
    </div>
  );
};

export default InputField;

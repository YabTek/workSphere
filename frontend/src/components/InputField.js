// import React,{useState} from "react";


// const InputField = ({ label }) => {
//   const [input, setInput] = useState("")
//   return (
//     <div class="ml-8 mr-[25rem]">
//       <label class="text-md font-semibold">{label}</label>
//       <input
//         type="text"
//         value = {input}
//         class=" relative mt-1 rounded-lg shadow-sm bg-[#DCE4E4] border-none text-gray-800 rounded-lg text-lg focus:ring-blue-500 w-full p-4 my-8"
//         required
//         onChange = {e => setInput(e.target.value)}
//       />
//     </div>
//   );
// };

// export default InputField;

import React, { useState } from "react";

const InputField = ({ label, value, onInputChange }) => {
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    onInputChange(newValue);
  };

  return (
    <div class="ml-8 mr-[25rem]">
      <label class="text-md font-semibold">{label}</label>
      <input
        type="text"
        value={value}
        class="relative mt-1 rounded-lg shadow-sm bg-[#DCE4E4] border-none text-gray-800 rounded-lg text-lg focus:ring-blue-500 w-full p-4 my-8"
        required
        onChange={handleInputChange}
      />
    </div>
  );
};

export default InputField;

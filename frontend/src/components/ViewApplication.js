import React from 'react'

const ViewApplication = ({onClose, coverLetter}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 overflow-y-auto z-50">
    <div className="bg-[#D3DEF9] p-8 mt-12 w-[30rem] rounded-lg ">
      <h2 className="text-lg font-semibold ">Cover letter</h2>

      <p>khskhefkj{coverLetter}</p>
      <h2 className="text-lg font-semibold  pt-3">Project files</h2>

      <div class="flex ">
      
      <button
        className=" mt-8 text-center text-green-500 font-semibold text-md hover:underline hover:text-green-400"
        >
            Accept
      </button>
      <button
        className=" mt-8 mx-8 text-center text-red-700 font-semibold text-md hover:underline hover:text-red-500"
        >
            Reject
      </button>
      <button
        onClick={() => onClose()}
        className="text-md text-blue-600 mt-8 font-semibold hover:underline hover:text-blue-500"
      >
        Cancel
      </button>
       
      </div>
      

      
    </div>
  </div>
  )
}

export default ViewApplication

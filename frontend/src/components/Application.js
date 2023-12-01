import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import FileUpload from './FileUpload';
import { addApplication } from '../redux/features/application/applicationSlice';

const Application = ({ onClose }) => {
  const dispatch = useDispatch()
  const [letter,setLetter] = useState("")
  const [files,setFiles] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addApplication())
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-[#D3DEF9] p-8 mt-12 w-[30rem] rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Application Form</h2>

        <label className="block mb-4">
          <span className="text-lg font-semibold ">Cover Letter:</span>
          <textarea
            className="w-full h-32 p-2 mt-2 border border-gray-300 rounded-md bg-[#A8B7DE] placeholder-gray-600"
            placeholder="Write your cover letter here..."
            onChange={e=>setLetter(e.target.value)}
          ></textarea>
        </label>

        {/* Project Files Upload */}
        {/* <label className="block mb-4">
          <span className="text-lg font-semibold">Upload Project Files:</span>
          <input
            type="file"  multiple
            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
           
          />
        </label> */}
        <FileUpload/>

        <button
          onClick={() => {
            handleSubmit();
            onClose(); 
          }}
          className="rounded-lg w-full h-16 bg-[#2F9797] hover:bg-[#774976] mt-8 text-center text-white font-semibold text-xl"
        >
          Submit Application
        </button>

        <button
          onClick={() => onClose()}
          className="text-md text-blue-600 mt-4 hover:underline hover:text-[#774976]"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Application;

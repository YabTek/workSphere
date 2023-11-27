import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../components/logo";
import profile from "../assets/profile.png";
import setting from "../assets/setting.png";
import bell from "../assets/bell.png";
import { addJob } from "../redux/features/job/jobSlice";
import {selectAuth} from "../redux/features/auth/authSlice"
import {selectJob} from "../redux/features/job/jobSlice"

const AddJobPage = () => {
  const dispatch = useDispatch();
  const {_id} = useSelector(selectAuth)
  const {addJobStatus, addJobError} = useSelector(selectJob)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [location, setLocation] = useState("")
  const [workinghours,setWorkinghours] = useState(0)
  const [salary, setSalary] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addJob({client:_id,title,description,location,workinghours,salary}))
  }

  return (
    <div>
      <div class="flex justify-between">
        <Logo />
        <div class="flex justify-around my-14 items-center">
          <div>
            <button class="rounded-lg bg-[#F5C1F4] hover:bg-blue-300 w-20 h-10  mx-10 text-xl text-serif font-bold border-none shadow-lg">
              Ask?
            </button>
          </div>
          <div class="flex items-center">
            <img class="w-16 h-8 rounded-full" src={setting} alt="" />
            <img class="w-16 h-8 rounded-full -ml-3" src={bell} alt="" />
            <img
              class="w-20 h-12 rounded-full -ml-3 mr-6"
              src={profile}
              alt=""
            />
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div class="p-10">
          <div class="ml-8 mr-[25rem]">
            <label class="text-md font-semibold">Job title</label>
            <input
              type="text"
              class="relative mt-1 rounded-lg shadow-sm bg-[#DCE4E4] border-none text-gray-800 rounded-lg text-lg focus:ring-blue-500 w-full p-4 my-8"
              required
              onChange={e => setTitle(e.target.value)}
            />

            <label class="text-md font-semibold">Job description</label>
            <input
              type="text"
              class="relative mt-1 rounded-lg shadow-sm bg-[#DCE4E4] border-none text-gray-800 rounded-lg text-lg focus:ring-blue-500 w-full p-4 my-8"
              required
              onChange={e => setDescription(e.target.value)}
            />
            
            <label class="text-md font-semibold">Location</label>
            <input
              type="text"
              class="relative mt-1 rounded-lg shadow-sm bg-[#DCE4E4] border-none text-gray-800 rounded-lg text-lg focus:ring-blue-500 w-full p-4 my-8"
              required
              onChange={e => setLocation(e.target.value)}
            />

            <label class="text-md font-semibold">Salary</label>
            <input
              type="text"
              class="relative mt-1 rounded-lg shadow-sm bg-[#DCE4E4] border-none text-gray-800 rounded-lg text-lg focus:ring-blue-500 w-full p-4 my-8"
              required
              onChange={e => setSalary(e.target.value)}
            />

            <label class="text-md font-semibold">Working hours</label>
            <input
              type="text"
              class="relative mt-1 rounded-lg shadow-sm bg-[#DCE4E4] border-none text-gray-800 rounded-lg text-lg focus:ring-blue-500 w-full p-4 my-8"
              required
              onChange={e => setWorkinghours(e.target.value)}
            />
           
          </div>
          {addJobStatus === "success" ? 
          <p class = "text-[#55FF05] ml-8">Job has been posted</p> : null
            }
            {addJobStatus === "rejected" ? 
          <p class = "text-[#F70D0D] italic ml-8">{addJobError.message}</p> : null
            }
          <button
            type="submit"
            class=" bg-[#B0E8E8] hover:bg-blue-300 rounded-lg w-[42.5rem] p-3.5 font-bold text-xl font-serif text-black-50 ml-8 my-8 "
          >
            Post job
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJobPage;

import React,{useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import { Link } from "react-router-dom";
import { getAllJobs, selectJob } from '../redux/features/job/jobSlice'
import Logo from "../components/logo";
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import profile from "../assets/profile.png";
import setting from "../assets/setting.png";
import bell from "../assets/bell.png";
import Card from "../components/Card";
import { selectAuth } from "../redux/features/auth/authSlice";

const ClientPage = () => {
  const {jobs} = useSelector(selectJob)
  const {_id} = useSelector(selectAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllJobs())
  }, [dispatch])

  const clientJobs = jobs.filter((job) => job.client === _id)
  
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
            <Link to="/clientSettings" >
              <SettingsIcon class="w-8"/>
            </Link>
           
            <NotificationsIcon class="w-8 mx-4"/>
            <img
              class="w-20 h-12 rounded-full -ml-3 mr-6"
              src={profile}
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="mx-[7.5rem] -mb-[2rem] pt-12 flex justify-between">
        {clientJobs.length === 0 ? <p class="mt-5 text-lg font-semibold mb-12">No jobs posted</p>:
        <p class="mt-5 text-lg font-semibold">Jobs you have posted</p>
        }
        <Link to="/addjob">
          <button class="text-lg font-semibold bg-[#CFDCFD] hover:bg-blue-300 p-2.5 px-4 rounded-lg shadow-md">
            Add a new job
          </button>
        </Link>
      </div>
      {clientJobs.map((job ) => (
        <Card
        key={job._id}
        jobId= {job._id}
        title={job.title}
        description={job.description}
        location={job.location}
        salary={job.salary}
        hours={job.workinghours}
        showButtons={true}
      />
      ))}
      
      <Link class="mx-[7.5rem] py-8 mt-4 text-lg hover:text-blue-600 font-semibold" to = "/joblist">
       View all posts
      </Link>

    </div>
  );
};

export default ClientPage;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Logo from "../components/logo";
import statusImg from "../assets/statusImg.png";
import Application from "../components/Application";
import { selectJob, getJobDetail, updateJob } from "../redux/features/job/jobSlice";

const FillStatusPage = () => {
  const { id } = useParams();
  const [status, setStatus] = useState('');
  const dispatch = useDispatch();
  const { jobDetail,updateJobStatus,updateJobError } = useSelector(selectJob);

  useEffect(() => {
    dispatch(getJobDetail(id));
  }, [dispatch, id]);

  
  const handleSubmitStatus = () => {
    if (status) {
       dispatch(updateJob({ jobId: id, jobData: {jobStatus: status }}));
    } 
}

  return (
    <div>
      <Logo />
      <div className="flex justify-around py-8">
        <div className="py-10 ml-[10rem] w-full">
          <h2 className="text-2xl text-[#02B9B9] font-bold mb-6">{jobDetail.title}</h2>
          <p className="text-justify">
            {jobDetail.description}.
            <br />
            Your company is located in <span className="text-[#02B9B9] font-bold">{jobDetail.location}</span>.
            <br />
            You will pay <span className="text-[#D72AD2] font-bold">${jobDetail.salary}</span> with {jobDetail.workinghours} working hours per week.
          </p>
          <hr className="border border-gray-300 my-2" />
          <br />
          <p className="text-lg font-semibold mb-3">Please fill the current status of the job</p>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                value="inProgress"
                checked={status === "inProgress"}
                onChange={()=>setStatus("inProgress")}
                className="form-checkbox h-4 w-4 text-green-600"
              />
              <span className="text-[#0404FF] font-semibold">In Progress</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                value="completed"
                checked={status === "completed"}
                onChange={() => setStatus("completed")}
                className="form-checkbox h-4 w-4 text-green-600"
              />
              <span className="text-[#00EE0A] font-semibold">Completed</span>
            </label>
          </div>
          {updateJobStatus === "success"?
               <p class = "text-[#4ED70D] font-semibold -mb-[1.5rem] pt-6">Job has been updated</p> : null
          }
           {updateJobStatus === "rejected" ? 
          <p class = "text-[#F70D0D] italic -mb-[1.7rem]">{updateJobError.message}</p> : null
            }
          <button
            className="rounded-lg w-80 h-16 bg-[#46A9A9] hover:bg-[#774976] mt-6 text-center text-white font-semibold text-xl"
            onClick={handleSubmitStatus}
          >
            Submit Status
          </button>
        </div>
        <div>
        <img src={statusImg} alt="" />

        </div>
      </div>
    </div>
  );
};

export default FillStatusPage;

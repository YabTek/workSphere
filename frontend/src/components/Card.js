// Card.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { deleteJob, selectJob, updateJob } from '../redux/features/job/jobSlice';
import { selectAuth } from '../redux/features/auth/authSlice';
import DeletePopup from './Popup';  

const Card = ({ title, description, salary, hours, location, showButtons, jobId }) => {
  const dispatch = useDispatch();
  const {role} = useSelector(selectAuth)

  const [editableTitle, setEditableTitle] = useState(title);
  const [editableDescription, setEditableDescription] = useState(description.substring(0, 150));
  const [editableSalary, setEditableSalary] = useState(salary);
  const [editableLocation, setEditableLocation] = useState(location);
  const [editableHours, setEditableHours] = useState(hours);

  const [isDeletingOpen, setDeletingOpen] = useState(false);

  useEffect(() => {
    dispatch(updateJob({
      jobId,
      jobData: {
        title: editableTitle,
        description: editableDescription,
        salary: editableSalary,
        location: editableLocation,
        workinghours: editableHours
      }
    }))
  }, [jobId, editableTitle, editableDescription, editableSalary, editableLocation, editableHours, dispatch])

 
  const confirmDelete = () => {
    dispatch(deleteJob(jobId));
    setDeletingOpen(false);
  };

  
  return (
    <div className="bg-[#D3DEF9] rounded-[18px] shadow-2xl shadow-indigo-500/50  p-8 mx-[8rem] my-14">
       
        <div className="flex justify-between">
          <h2
            className="text-xl font-semibold mb-4 focus:outline-none focus:border-none"
            contentEditable={true}
            onInput={(e) => setEditableTitle(e.target.textContent)}
          >
            {editableTitle}
          </h2>
          {showButtons ?(
          <div className="mx-4">
            <button className="mx-2 text-red-500" onClick={() => setDeletingOpen(true)}>
              <DeleteForeverIcon />
            </button>
            <button>
              <VisibilityIcon />
            </button>
          </div>) : null }
        </div>
     
      <p className="text-black mb-1">
        <span className="font-semibold">Salary: </span>
        <span
          contentEditable={true}
          onInput={(e) => setEditableSalary(e.target.textContent)}
          className="focus:outline-none focus:border-none"
        >
          {editableSalary}
        </span>
      </p>
      <p className="text-black mb-1">
        <span className="font-semibold">Description: </span>
        <span
          contentEditable={true}
          onInput={(e) => setEditableDescription(e.target.textContent)}
          className="focus:outline-none focus:border-none "
        >
          {editableDescription}
        </span>
          <Link to={role === "client" ? `/filljobStatus/${jobId}` : `/jobDetailPage/${jobId}`}
           class = "font-semibold underline text-[#C754C4]">...More</Link>
      </p>
      <p className="text-black mb-1">
        <span className="font-semibold">Location: </span>
        <span
          contentEditable={true}
          onInput={(e) => setEditableLocation(e.target.textContent)}
          className="focus:outline-none focus:border-none"
        >
          {editableLocation}
        </span>
      </p>
      <p className="text-black">
        <span className="font-semibold">Hours per Week: </span>
        <span
          contentEditable={true}
          onInput={(e) => setEditableHours(e.target.textContent)}
          className="focus:outline-none focus:border-none"
        >
          {editableHours}
        </span>
      </p>

      <DeletePopup
        isOpen={isDeletingOpen}
        onClose={() => setDeletingOpen(false)}
        onDelete={confirmDelete}
      />
    </div>
  );
};

export default Card;

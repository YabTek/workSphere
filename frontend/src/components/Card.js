// Card.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { deleteJob, selectJob, updateJob } from '../redux/features/job/jobSlice';
import DeletePopup from './Popup';  

const Card = ({ title, description, salary, hours, location, showButtons, jobId }) => {
  const dispatch = useDispatch();

  const [editableTitle, setEditableTitle] = useState(title);
  const [editableDescription, setEditableDescription] = useState(description);
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
    <div className="bg-[#D3DEF9] rounded-[18px] shadow-md p-8 mx-[7rem] my-12">
      {showButtons ? (
        <div className="flex justify-between">
          <h2
            className="text-xl font-semibold mb-4 focus:outline-none focus:border-none"
            contentEditable={true}
            onInput={(e) => setEditableTitle(e.target.textContent)}
          >
            {editableTitle}
          </h2>
          <div className="mx-4">
            <button className="mx-2 text-red-500" onClick={() => setDeletingOpen(true)}>
              <DeleteForeverIcon />
            </button>
          </div>
        </div>
      ) : (
        <h2
          className="text-xl font-semibold mb-4 focus:outline-none focus:border-none"
          contentEditable={true}
          onInput={(e) => setEditableTitle(e.target.textContent)}
        >
          {editableTitle}
        </h2>
      )}
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
          className="focus:outline-none focus:border-none"
        >
          {editableDescription}
        </span>
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

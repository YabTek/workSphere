import React, { useState } from 'react';

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState('jobsApplied');

  const handleItemClick = (item) => {
    setSelectedItem(item);
    // You can add logic here to change the content based on the selected item.
  };

  return (
    <div className="bg-[#3E60B6] h-screen rounded-lg w-64 text-white text-md">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Your Settings</h1>
      </div>
      <ul>
        <li
          className={`p-4 cursor-pointer ${
            selectedItem === 'jobsApplied' && 'bg-blue-500'
          }`}
          onClick={() => handleItemClick('jobsApplied')}
        >
          Jobs Applied
        </li>
        <li
          className={`p-4 cursor-pointer ${
            selectedItem === 'jobsInProgress' && 'bg-blue-500'
          }`}
          onClick={() => handleItemClick('jobsInProgress')}
        >
          Jobs In Progress
        </li>
        <li
          className={`p-4 cursor-pointer ${
            selectedItem === 'jobsCompleted' && 'bg-blue-500'
          }`}
          onClick={() => handleItemClick('jobsCompleted')}
        >
          Jobs Completed
        </li>
        <li
          className={`p-4 cursor-pointer ${
            selectedItem === 'profileSettings' && 'bg-blue-500'
          }`}
          onClick={() => handleItemClick('profileSettings')}
        >
          Profile Settings
        </li>
        <li
          className={`p-4 cursor-pointer ${
            selectedItem === 'paymentTransactions' && 'bg-blue-500'
          }`}
          onClick={() => handleItemClick('paymentTransactions')}
        >
          Payment & Transactions
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

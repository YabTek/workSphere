// DeleteConfirmationModal.js
import React from 'react';

const DeletePopup = ({ isOpen, onClose, onDelete }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-md">
        <p className="text-lg mb-4">Are you sure you want to delete this job?</p>
        <div className="flex justify-end">
          <button className="text-blue-500 mr-4" onClick={onClose}>
            Cancel
          </button>
          <button className="text-red-500" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;

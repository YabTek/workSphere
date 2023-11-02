const Application = require('../models/applicationModel');


const createApplication = async (req, res) => {
  try {
    const { freelancer, job, coverLetter, status } = req.body;
    const application = new Application({ freelancer, job, coverLetter, status });
    const savedApplication = await application.save();
    res.status(201).json(savedApplication);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getApplicationById = async (req, res) => {
    try {
      const application = await Application.findById(req.params.id);
      if (!application) {
        return res.status(404).json({ message: 'Application not found' });
      }
      res.status(200).json(application);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };

const updateApplicationStatus = async (req, res) => {
    try {
      const { status } = req.body;
      const updatedApplication = await Application.findByIdAndUpdate(req.params.id, { status }, { new: true });
      if (!updatedApplication) {
        return res.status(404).json({ message: 'Application not found' });
      }
      res.status(200).json(updatedApplication);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
 
const deleteApplication = async (req, res) => {
    try {
      const deletedApplication = await Application.findByIdAndRemove(req.params.id);
      if (!deletedApplication) {
        return res.status(404).json({ message: 'Application not found' });
      }
      res.status(204).send(); // 204 No Content
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  
module.exports = {createApplication, getApplicationById, updateApplicationStatus, deleteApplication}
  
  
  
  
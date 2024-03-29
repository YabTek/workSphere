const Job = require('../models/jobModel')

const createJob = async(req,res) => {
    try {
        const { client, title, description, location, workinghours, salary} = req.body;
        const job = new Job({ client, title, description, location, workinghours, salary });
        const savedJob = await job.save();
        res.status(201).json(savedJob);
      } 
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
}

const getAllJobs = async (req, res) => {
    try {
      const jobs = await Job.find().sort({ createdAt: 'desc' });
      res.status(200).json(jobs);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };

const getJobById = async (req, res) => {
    try {
      const job = await Job.findById(req.params.id);
      if (!job) {
        return res.status(404).json({ message: 'Job not found' });
      }
      res.status(200).json(job);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };

const updateJob = async (req, res) => {
    try {
      const jobId = req.params.id;
      const { title, description, location, workinghours, salary, jobStatus } = req.body;
      const updatedJob = await Job.findByIdAndUpdate(jobId, {  title, description, location, workinghours, salary, jobStatus }, { new: true });
      if (!updatedJob) {
        return res.status(404).json({ message: 'Job not found' });
      }
      res.status(200).json(updatedJob);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };

const deleteJob = async (req, res) => {
    try {
      const deletedJob = await Job.findByIdAndRemove(req.params.id);
      if (!deletedJob) {
        return res.status(404).json({ message: 'Job not found' });
      }
      res.status(204).send(); 
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };

  module.exports = {createJob, getAllJobs, getJobById, updateJob, deleteJob}
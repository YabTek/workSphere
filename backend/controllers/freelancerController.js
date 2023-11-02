const Freelancer = require('../models/freelancerModel');

const createFreelancerProfile = async (req, res) => {
  try {
    const { profileOwner, skills, education, portfolio } = req.body;
    const freelancer = new Freelancer({ profileOwner, skills, education, portfolio });
    const savedFreelancer = await freelancer.save();
    res.status(201).json(savedFreelancer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getFreelancerProfileById = async (req, res) => {
  try {
    const freelancer = await Freelancer.findById(req.params.id);
    if (!freelancer) {
      return res.status(404).json({ message: 'Freelancer profile not found' });
    }
    res.status(200).json(freelancer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const updateFreelancerProfile = async (req, res) => {
  try {
    const { skills, education, portfolio } = req.body;
    const updatedFreelancer = await Freelancer.findByIdAndUpdate(req.params.id, { skills, education, portfolio }, { new: true });
    if (!updatedFreelancer) {
      return res.status(404).json({ message: 'Freelancer profile not found' });
    }
    res.status(200).json(updatedFreelancer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteFreelancerProfile = async (req, res) => {
  try {
    const deletedFreelancer = await Freelancer.findByIdAndRemove(req.params.id);
    if (!deletedFreelancer) {
      return res.status(404).json({ message: 'Freelancer profile not found' });
    }
    res.status(204).send(); // 204 No Content
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};


module.exports = {createFreelancerProfile, getFreelancerProfileById, updateFreelancerProfile, deleteFreelancerProfile}
const Client = require('../models/clientModel');

const createClientProfile = async (req, res) => {
    try {
      const { profileOwner, companyName, companyWebsite } = req.body;
      const client = new Client({ profileOwner, companyName, companyWebsite });
      const savedClient = await client.save();
      res.status(201).json(savedClient);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };

const getClientProfileById = async (req, res) => {
    try {
      const client = await Client.findById(req.params.id);
      if (!client) {
        return res.status(404).json({ message: 'Client profile not found' });
      }
      res.status(200).json(client);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };

 const updateClientProfile = async (req, res) => {
    try {
      const { companyName, companyWebsite } = req.body;
      const updatedClient = await Client.findByIdAndUpdate(req.params.id, { companyName, companyWebsite }, { new: true });
      if (!updatedClient) {
        return res.status(404).json({ message: 'Client profile not found' });
      }
      res.status(200).json(updatedClient);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
const deleteClientProfile = async (req, res) => {
    try {
      const deletedClient = await Client.findByIdAndRemove(req.params.id);
      if (!deletedClient) {
        return res.status(404).json({ message: 'Client profile not found' });
      }
      res.status(204).send(); // 204 No Content
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
 
  module.exports = {createClientProfile, getClientProfileById, updateClientProfile, deleteClientProfile}
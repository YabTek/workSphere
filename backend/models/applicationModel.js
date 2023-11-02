const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
    freelancer: {
      type: Schema.Types.ObjectId,
      ref: 'Freelancer',
      required: true,
    },
    job: {
      type: Schema.Types.ObjectId,
      ref: 'Job',
      required: true,
    },
    coverLetter: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['applied', 'accepted', 'rejected', 'completed', 'canceled'],
      required: true,
    },
   
  }, {
    timestamps: true,
  });
  
  
const Application = mongoose.model('Application',applicationSchema);

module.exports = Application;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  client: {
    type: Schema.Types.ObjectId,
    ref: 'Client',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  skillsRequired: [{
    type: String
}],
  salary: {
    type: Number,
    required: true,
  },
 
}, {
  timestamps: true,
});

export default Job = mongoose.model('Job', jobSchema);


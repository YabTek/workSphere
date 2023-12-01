const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const freelancerSchema = new Schema({
    profileOwner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    jobs: [{
        type: Schema.Types.ObjectId,
        ref: "Job"
    }],
    skills: [{
        type: String
    }],
    education: {
        type: String,
        level: String
    },
    portfolio: {
        type: String
    }
},{
    timestamps: true,
  })

const Freelancer= mongoose.model('Freelancer', freelancerSchema);
module.exports = Freelancer;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const freelancerSchema = new Schema({
    profileOwner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
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

export default Freelancer = mongoose.model('Freelancer', freelancerSchema);
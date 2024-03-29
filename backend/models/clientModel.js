const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    profileOwner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    companyName: {
        type: String
    },
    companyWebsite: {
        type: String
    },
    jobs: [{
        type: Schema.Types.ObjectId,
        ref: "Job"
    }]
},{
    timestamps: true,
  })

const Client = mongoose.model('Client', clientSchema)
module.exports = Client;
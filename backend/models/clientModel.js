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
    }
},{
    timestamps: true,
  })

export default Client = mongoose.model('Client', clientSchema)
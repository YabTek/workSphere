const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        validate: {
            validator: (email) => validator.isEmail(email), 
            message: 'Invalid email address',
          },
    },
    password: {
        type: String,
        required: [true,"Password is required"],
    },
    bio: {
        type: String
    },
    profilePic: {
        type: String
    },
    contact: {
        type: String
    },
    location: {
        type: String
    },
    role: {
        type: String,
        enum: ["client", "freelancer"],
        required: [true, "Role is required"]
    }
},{
    timestamps: true,
  })

userSchema.pre("save", async function() {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(this.password, enteredPassword)
}

userSchema.methods.generateToken = function() {
    return jwt.sign({userId: this._id}, process.env.JWT_SECRET_KEY,{
        expiresIn: "30d"}
        )
}

export default User = mongoose.model('User',userSchema);
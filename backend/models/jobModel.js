const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  client: {
    type: Schema.Types.ObjectId,
    ref: 'Client',
    required: true
 
  },
  freelancers: [{
    type: Schema.Types.ObjectId,
    ref: 'Freelancer'
  }],
  title: {
    type: String,
    required: true,
  //   validate: {
  //     validator: function (input) {
  //       const words = input.split(' ');
  //       return words.length >= 2;
  //     },
  //     message: 'Title must have at least two words'
  //   }
  },
  description: {
    type: String,
    required: true,
    // validate: {
    //   validator: function (input) {
    //     return input.length >= 200;
    //   },
    //   message: 'Description must have at least 200 characters'
    // }
  },
  location: {
    type: String,
  },
  workinghours: {
    type: Number
},
  salary: {
    type: Number,
    required: true,
  },

  jobStatus: { 
    type: String, 
    enum: ['inProgress', 'completed'], 
    },
}, {
  timestamps: true,
});

// jobSchema.pre('save', function (next) {
//   this.validate(function (err) {
//     if (err) {
//       next(err);
//     } else {
//       next();
//     }
//   });
// });

const Job = mongoose.model('Job', jobSchema);
module.exports = Job;


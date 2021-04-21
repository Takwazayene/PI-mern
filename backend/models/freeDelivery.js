var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const userSchema = require('./user').schema;

var freeDelivery = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },

      fromDate: {
        type: Date,
        min: '2020-09-28',
        max: '2050-05-23'
      },
      toDate: {
        type: Date,
        min: '2020-09-28',
        max: '2050-05-23'
      },



    governorate: {
    type: String, 
  },
  ville: {
    type: String,
    required: [true,'name is required']
  },
  vehicle: {
    type: String,
  },
  state: {
    type: String,
    enum: ['valid', 'invalid', 'Cancled'],
  },
  constraint:  {
    type: String,
  },
  packageSize: {
    type: String,
    enum: ['big', 'meduim', 'small'],
  },
  affectedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

 
});

module.exports = mongoose.model("freeDelivery", freeDelivery);

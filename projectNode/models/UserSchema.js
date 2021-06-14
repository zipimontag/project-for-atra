const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userName: {
        type: String,
    },
    age: {
        type: String,   
    },
    city: {
        type: String,   
    },
  email:{
      type:String
  },
  phone:{
    type:String
}
})

module.exports = mongoose.model('UserSchema', userSchema);

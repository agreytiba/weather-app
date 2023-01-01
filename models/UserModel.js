const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required:[true,'please add a name']
    },
    email: {
        type: String,
        required:[true , 'please add an email'],
        unique:true
    },
      phone: {
        type: Number,
        required:[true , 'please add a phone number'],
        
    },
      password: {
        type: String,
        required:[true , 'please add a password'],
        
    },
     imgProfile:{
        type: String,
        default:""
    },
    address: {
        type:[Array]
    },
      isAdmin: {
          type: Boolean,
          default:false
    }
},{
    timestamps:true
})
 export default mongoose.models.User ||mongoose.model('User', userSchema)
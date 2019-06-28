const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt =  require('bcrypt');
const jwt = require("jsonwebtoken");


const userSchema = new Schema({
    userName:{type:String,required:[true,'email should not be empty']},
    email:{type:String,required:[true,'password should not be empty'],match:/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/},
    password:{type:String,min:6,required:[true,'should not be empty']},
    tokens:[{ token:{type:String} }]
});

userSchema.pre('save',async function(next){
    try {
        let user = this;
        if(user.isNew){
            let salt = await bcrypt.genSalt(10);
            let hash = await bcrypt.hash(user.password,salt);
            user.password = hash;
            next()
        }else{
            next()
        }
        
    } catch (error) {
        next(error)
    }
})

userSchema.methods.generateToken = async function(){
   
  let user = this;
  let payload = {
    userId:this._id
  };
  let jwtToken = jwt.sign(payload,'supersecret');
   user.tokens.push({token:jwtToken});
   let token = await user.save();
   return jwtToken
  
}

userSchema.statics.findByCredential =  async(email,password)=>{

}

const User = mongoose.model('User',userSchema);
module.exports = {User}
const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const { type } = require("express/lib/response");



const topSchema = new mongoose.Schema({
  mobileno: { type:String, required:true},
  pin: { type:String, required:true },
  registrationDate : { type: Date,default:Date.now()},
  // registrationTime : {type: Time,default:Time.now()}
});



// userSchema.method.validatePassword = function(password,
//   callback){
//     console.log(password);
//     console.log(this);
//     bcryptjs.compare(password,this.password,(err,result)=>{
//       // console.log(result);
//       if(!err){
//         callback(err,result)
//       }else{
//         next()
//       }
//     })
//   }

let saltRound = 15; //The number of times our password is to be hashed
// adminSchema.pre("save", function (next) {
//   bcryptjs
//     .hash(this.password, saltRound)
//     .then((hashed) => {
//       this.password = hashed;
//       next();
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

// const usersModel = mongoose.models.users_tbs || mongoose.model("users_tbs", userSchema);
// module.exports = usersModel;

const adminModel = mongoose.models.admin_collections || mongoose.model("admin_collections", topSchema);

module.exports = adminModel;
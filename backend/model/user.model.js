const mongoose =require("mongoose")

const userSchema=new mongoose.Schema({
    fullname:{ type: String, required: true},
   username: { type: String, required: true,unique: true },
    email: { type: String, unique: true, required: true },
    pass: { type: String, required: true },
    profile_Picture: {
        type: String,
        default: "https://t4.ftcdn.net/jpg/00/64/67/27/360_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg",
      },
},{
    version_Key:false,
})

const UserModel=mongoose.model("user",userSchema);
module.exports={
    UserModel
};

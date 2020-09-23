const User = require("../../models/userModel");

// Add post Controller
const CreateUser = async (req,res)=>{
let data  = req.body;
     console.log(data)
    
    let user_added = await User.query().skipUndefined().insert(data).returning("*");
      if(!user_added) return res.send("User not Created");

    return res.send("User registered successfully");
}

// Get user Controller 
const GetUser = async (req,res)=>{
    let data = req.params;
    console.log(data.name);
    if(!data.name) return res.send("field is invalid");

    let user = await User.query().skipUndefined().where("name",data.name).first();
    if(user === undefined ) return res.send("No user found");

    return res.send(user);
}

// Get users Controller 
const GetUsers = async (req,res)=>{
    
    let users = await User.query().skipUndefined();
    
    return res.send(users);
}

// Update user Controller 
const UpdateUser = async(req,res)=>{
    let data = req.params;
    let raw = req.body;

    let updated_user = await User.query().skipUndefined().update(raw).where("id",data.id);

    if(!updated_user) return res.send("User not updated");

    return res.send("User Updated Successfully");
}

// Remove user Controller 
const RemoveUser = async(req,res)=>{
    let data = req.params;

    let removed_user = await User.query().skipUndefined().deleteById(data.id);

    if(!removed_user) return res.send("User not removed");

    return res.send("Post Removed Successfully");
}



// Export Controllers
module.exports = {
    CreateUser,
    GetUser,
    GetUsers,
    UpdateUser,
    RemoveUser
}
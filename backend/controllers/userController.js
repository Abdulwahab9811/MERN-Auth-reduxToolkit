import asyncHandler from 'express-async-handler';
import User from "../models/userModels.js"

//@desc  Auth user/set token
//route POST api/users/auth
//@acces public 

const authUser = asyncHandler (async(req,res) => {
    res.status(200).json({message:'Auth user' });

});

//@desc  Register a new user
//route POST api/users
//@acces public 

const RegisterUser = asyncHandler (async(req,res) => {
    const { name,email,password} = req.body;

    const userExists = await User.findOne({email:email});
    
    if(userExists){
        res.status(400);
        throw new Error('User already exist')
    }

    const user = User.create({
        name,
        email,
        password,
    });

    if (user) {
        res.status(201).json({
         _id: user._id,
         name: user.name,
         email: user.email
        });

    }else {
        res.status(400)
        throw new Error('Invalid user data')
    }


});

//@desc  logout user
//route POST api/users/logout
//@acces public 

const logoutUser = asyncHandler (async(req,res) => {
    res.status(200).json({message:'Logout user' });

});

//@desc  Get user profile
//route GET api/users/profile
//@acces private. 

const getUserPorifle = asyncHandler (async(req,res) => {
    res.status(200).json({message:' User profile' });

});

//@desc  Update user profile
//route PUT api/users/profile
//@acces public 

const updateUserProfile = asyncHandler (async(req,res) => {
    res.status(200).json({message:'Update user Profile' });

});

export { authUser ,  RegisterUser , logoutUser , getUserPorifle ,updateUserProfile};
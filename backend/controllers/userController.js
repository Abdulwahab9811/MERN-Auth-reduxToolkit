import asyncHandler from 'express-async-handler';
//description: authh user/set token
// route POST/api/users/auth
// acces public
const authUser = asyncHandler(async(req,res) => {
    res.status(200).json({message: 'Auth User'});
    });


    //description: RegisterUser
// route POST/api/users/register
// acces public
const RegisterUser = asyncHandler(async(req,res) => {
    res.status(200).json({message: 'Register User'});
    });


      //description: LogoutUser
// route POST/api/users/logout
// acces public
const LogoutUser = asyncHandler(async(req,res) => {
    res.status(200).json({message: 'Logout User'});
    });

       //description: Get User Profile
// route GET/api/users/profile
// acces Private
const getUserProfile = asyncHandler(async(req,res) => {
    res.status(200).json({message: 'User profile'});
    });


        //description: Update User Profile
// route PUT/api/users/profile
// acces Private
const updateUserProfile = asyncHandler(async(req,res) => {
    res.status(200).json({message: 'Update user profile' });
    });



export { authUser , RegisterUser, LogoutUser ,   getUserProfile , updateUserProfile };
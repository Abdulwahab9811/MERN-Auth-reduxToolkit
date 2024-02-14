import asyncHandler from 'express-async-handler';

//@desc  Auth user/set token
//route POST api/users/auth
//@acces public 

const authUser = asyncHandler (async(req,res) => {
    res.status(401);
    throw error ('Something went wrong' , 'Authentication failed');
    res.status(200).json({message:'Auth user' });

});

export { authUser };
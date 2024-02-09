import express from 'express';

import { authUser , RegisterUser, LogoutUser ,   getUserProfile , updateUserProfile } from '../controllers/userController.js';

const router = express.Router();

router.post ('/' , RegisterUser )
router.post ('/auth',authUser);
router.post ('/logout' , LogoutUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);


export default router
import express from 'express'
import { authUser , RegisterUser , logoutUser , getUserPorifle ,updateUserProfile } 
from '../controllers/userController.js'
import { protect } from '../Middleware/authMiddleware.js';
const router = express.Router();


router.post('/auth', authUser);
router.post('/', RegisterUser);
router.post('/logout' , logoutUser);
router.route('/profile').get(protect, getUserPorifle).put(protect,updateUserProfile)


export default router
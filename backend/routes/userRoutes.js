import express from 'express'
import { authUser , RegisterUser , logoutUser , getUserPorifle ,updateUserProfile } from '../controllers/userController.js'
const router = express.Router();

router.post('/auth', authUser);
router.post('/', RegisterUser);
router.post('/logout' , logoutUser);
router.route('/profile').get(getUserPorifle).put(updateUserProfile)


export default router
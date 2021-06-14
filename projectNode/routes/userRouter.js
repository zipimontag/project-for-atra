const router=require('express').Router();
const user=require('../controllers/userController');
router.post('/createUser',user.createUser)
router.get('/getAllUsers',user.getAllUsers );
module.exports=router;
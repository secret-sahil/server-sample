import {Router} from 'express'
const router = Router()
import * as controller from '../controllers/appController.js'
import * as fileController from '../controllers/fileController.js'
import { registerMail } from '../controllers/mailer.js'
import Auth, { localVariables } from '../middleware/auth.js'
/** POST Methods */
router.route('/register').post(controller.register)
router.route('/registerMail').post(registerMail) // register mail
router.route('/authenticate').post(controller.verifyUser,(req,res)=>res.end()) // authenticate user
router.route('/login').post(controller.verifyUser,controller.login) // login in app
    //-- File Handler
router.route('/upload').post(fileController.handleFileUpload, fileController.upload) // upload xlsx file

/** GET Methods */
router.route('/user/:username').get(controller.getUser) // user with username
router.route('/generateOTP').get(controller.verifyUser, localVariables, controller.generateOTP) //generate random OTP
router.route('/verifyOTP').get(controller.verifyOTP) // verify generated OTP
router.route('/createResetSession').get(controller.createResetSession) // reset all variables
//-- Get File Details
router.route('/createResetSession').get(controller.createResetSession) // 


/** PUT Methods */
router.route('/updateuser').put(Auth, controller.updateUser); // is use to update the user profile
router.route('/resetPassword').put(controller.verifyUser, controller.resetPassword) // used to reset password

export default router
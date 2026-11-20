import { Router } from "express";
import { authController } from "./auth.controller.js";
import { UserValidation } from "./auth.validate.js";
import validateRequest from "../../middleware/validateRequest.js";
// import { UserValidation } from "./auth.validate.js";
// import validateRequest from "../../middleware/validateRequest.js";


const route:Router = Router();

route.post('/login',  authController.login)
route.post('/register',validateRequest(UserValidation.createUserValidationSchema), authController.registerUser)

export const authRouther = route;

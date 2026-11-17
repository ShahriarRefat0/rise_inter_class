import { Request, Response } from "express";
import { authSevice } from "./auth.service.js";
import { catchAsync } from "../../utils/catchAsync.js";
import { ApiResponse } from "../../utils/apiResonse.js";

const login = catchAsync( (req:Request, res:Response)=>{
    const {email, password} = req.body;

    const result = authSevice.login({email, password})
    // res.send({
    //     seccess: true,
    //     message: "Login success full",
    //     result: result
    // })
    ApiResponse.success(res, result, "Login successful")
}
)

// const register = catchAsync()

export const authController = {
    login,
}
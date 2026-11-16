import { Request, Response } from "express";
import { authSevice } from "./auth.service.js";

const login = (req:Request, res:Response)=>{
    const {email, password} = req.body;

    const result = authSevice.login({email, password})
    res.send({
        seccess: true,
        message: "Login success full",
        data: result
    })
}


export const authController = {
    login,
}
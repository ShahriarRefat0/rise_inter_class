import { ApiError } from "../../utils/ApiError.js";
import { Ilogin } from "./auth.types.js";

const login = (payload:Ilogin)=>{
    const {email, password} = payload;
    //logic
    // user data
const user = {
    name:"refat",
    email: "refat@gmail.com",
    password: "1234"
}

if ( user.email !== email) throw new ApiError (404,"User not found");

if(user.password !== password) throw new ApiError(401,"Wrong Pass");

return user;

}

//regster 

//otp

// pass reset

export const authSevice = {
    login,
    // register,
    // otp,
    // pass_reset
}
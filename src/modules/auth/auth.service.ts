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

if ( user.email !== email) throw new Error ("User not found");

if(user.password !== password) throw new Error("Wrong Pass");

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
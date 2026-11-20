import bcrypt from "bcrypt";
import { StatusCodes } from "http-status-codes";
import { prisma } from "../../config/prisma.config.js";
import { ApiError } from "../../utils/ApiError.js";
import { Ilogin, RegisterUser } from "./auth.types.js";
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
const registerUser = async (payload: RegisterUser) => {

  const isExistUser = await prisma.user.findUnique({
    where: { email: payload.email },
  });

  if (isExistUser) {
    throw new ApiError(StatusCodes.CONFLICT, "User already exist");
  }

  const hashedPassword = await bcrypt.hash(payload.password, 10);


  const newUser = await prisma.user.create({
    data: {
      name: payload.name,
      email: payload.email,
      password: hashedPassword,
    },
    omit: {
      password: true,
    },
  });

  return newUser;
};


export const authSevice = {
    login,
    registerUser,
    // otp,
    // pass_reset
}
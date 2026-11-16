import express, { Application, Request, Response } from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";
import { authRouther } from "./modules/auth/auth.route.js";


export const app:Application = express();

//cors
app.use(cors({
//   origin: 'http://localhost:3000', // Your frontend URL
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   credentials: true, // Set to true if you send cookies or auth headers
}));

//express
app.use(express.json()); //re.body data = undefined

//cookie parser
app.use(cookieParser()); //cookieparser = undefined

//urlecorded
app.use(express.urlencoded({extended: true}))
//login api
// app.post('/login', (req:Request, res:Response)=>{
//     const {email, password} = req.body;
//     //logic
//     // user data
// const user = {
//     name:"refat",
//     email: "refat@gmail.com",
//     password: "1234"
// }

// if (!user) throw new Error ("User not found");

// if(user.password !== password) throw new Error("Wrong Pass");

// res.send(user);

// })

app.use("/auth",  authRouther)



app.get('/', (req: Request, res: Response) => {
    res.send({
        success: true,
        message: "Server is running on port 5000"
    })
})

app.use((req: Request, res: Response) => {
    res.status(404).json({
        success: false,
        message: 'Route Not Found',
        error: {
            path: req.originalUrl,
            message: 'Your requested path was not found.'
        }
    })
})


// setTimeout(()=>{
//     Promise.reject(new Error ('Test unhandle rejection'));
// }, 5000)
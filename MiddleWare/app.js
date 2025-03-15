import express from 'express';
import dotenv from 'dotenv';
import userRoute from './Routes/User.js';
import bodyParser from 'body-parser';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use("/api/v1/user",userRoute); //"/api/v1/user register , "/api/v1/user login"

// app.post("/api/v1/user/register", (req, res) => {
//     const  user = req.body;
//     console.log(user);
//     res.status(200).json({
//         success: true,
//         message : "User registered successfully"
//     })
    
// })
// app.post("/api/v1/user/login", (req, res) => {
//     const  {gmail, password} = req.body;
//     console.log(gmail, password);
//     res.status(200).json({
//         success: true,
//         message : "User login again successfully"
//     })
    
// })

app.listen(PORT, ()=>{
    console.log(`Sevrver is listening on port ${PORT}`);
    
})
const express =require("express");


const app=express();

const {connection}= require("./config/config.js");
const {SignupRouter}=require("./routs/signup.router")


app.use(express.json());


app.get("/", (req,res)=>{
res.send("started on ")
})

app.use("/api",SignupRouter)


app.listen(6000,()=>{
    console.log("strted on 6000")
})
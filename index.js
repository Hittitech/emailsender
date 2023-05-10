const express=require("express");
const sendMail = require("./controllers/sendMail");
const app=express()
let PORT=5000;

app.get('/',(req,res)=>{
    res.send(" i am on bro")
})


app.get("/mail",sendMail)
const start=async()=>{
    try{
        app.listen(PORT,()=>{
            console.log(`i am  listening at port ${PORT}`)
        })

    }
    catch(error){}
}

start();
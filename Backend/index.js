const express = require('express');
const app = express();
const {mongoose} = require('./db') ;


const port  = process.env.port || 3333;
app.use(express.json())

const {UserRouter} = require('./App/CONTROLLER/User(C)');

app.use('/user', UserRouter)

app.use((req,res,next)=>{
    let error = new Error (`Hey! this url ${req.url} you are searching is not in code try some burger hahaha...`)
    error.status = 404;
    next(error)
})

app.use((err,req,res,next)=>{
    
    res.status(err.status);
    res.send({
        message:err.message,
        status:err.status
    })
    next(err)
})

app.listen(port,()=>console.log('server running on ' +port))
const express = require('express');
const router  = express.Router();
const {User} = require('../MODEL/User(M)')

router.post('/registration', async(req,res)=>{
    try {
    let {userName,email,password} = req.body;
    let findUser = await User.findOne({email},{userName});
    if(findUser){
        res.send({
            message:'Hey! i am seeing you, email and username you provided is already used plase try new one',
            status:422,
            success:false
        })
    }
    let user = new User({userName,email,password});
    let savingUser = await user.save();
    let token = await savingUser.generateToken();
    console.log(token)
    res.send({message:'yess...!! successfully registerd',token,status:202,success:true})
    } catch (error) {
       res.send(error) 
    }
    


})

router.post('/loggin' ,(req,res)=>{
    res.send('i am loggin ')
});

router.post('/uploadImage',(req,res)=>{
    res.send('i am uplaod image')
})

module.exports = {
    UserRouter : router 
}
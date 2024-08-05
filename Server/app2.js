const express=require('express');
const mongoose=require('mongoose');

const app=express();

mongoose.connect('mongodb://localhost:27017/Shidi');


const ShidiSchema=new mongoose.Schema({
    Name:String,
    Dept:String
});

const Shidi_Model=mongoose.model('Shidi',ShidiSchema);

app.get('/',(req,res)=>{
    Shidi_Model.find({}).then(function(Shidi_Model){
        res.json(Users);
    }).catch(function(err){
        res.send(err);
        console.log
    })
})

app.listen(3000,()=>{
    console.log("Port is 3000")
})
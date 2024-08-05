const express=require('express');
const router=express.Router();
const Item=require('../models/Item');

//CREATE
router.post('/',async(req,res)=>{
    const newItem=new Item(req.body);

    try{
        const savedItem=await newItem.save();
        res.json(savedItem);
    }
    catch(err){
        res.status(400).json({error:err.message});
        console.log(err);
    }
})

//READ
router.get('/',async(req,res)=>{
    res.write("Hello")
    try{
        const items=await Item.find();
        res.json(items);
    }
    catch(err){
        res.status(400).json({error:err.message});
        console.log(err);
    }
})

//UPDATE
router.put('/:id',async(req,res)=>{
    try{
        const updatedItem=await Item.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(updatedItem);
    }
    catch(err){
        res.status(400).json({error:err.message});
        console.log(err);
    }
});

//DELETE
router.delete('/:id',async(req,res)=>{
    try{
        await Item.findByIdAndDelete(req.params.id);
        res.json({message:'Item Deleted!'});
    }
    catch(err){
        res.status(400).json({error:err.message});
        console.log(err);
    }
})

module.exports = router;
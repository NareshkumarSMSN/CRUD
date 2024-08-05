// //Using packages
// const express=require('express');
// // const mongoose=require('mongoose');
// const cors=require('cors');
// const bodyParser=require('body-parser');
// require('dotenv').config();

// const app=express();

// // //Middleware
// app.use(cors());
// app.use(bodyParser.json());



// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/Shidi";

// // MongoClient.connect(url, function(err, db) {
// //   if (err) throw err;
// //   console.log("Database created!");
// //   db.close();
// // });

// MongoClient.connect(url).then((err,db)=>{
//     console.log("DB Connected");
//     var dbo=db.db("Shidi");
//     dbo.collection("Shidi_Test").find({}).toArray().then((err,result)=>{
//         console.log(result)
//     })
// })



// // url="mongodb://localhost:27017/";

// // mongoose.connect(url,(err,db)=>{
// //     if(err) throw err;
// //     var dbo=db.db("Shidi");
// //     dbo.collection("Shidi_Test").find({}).toArray(function(err,result){
// //         if(err) throw err;
// //         console.log(result);
// //         db.close();
// //     })
// // });

// // mongoose.connect(url,()=>{
// //     console.log("DB Connected!!!")
// // })






// // //MongoDB Connection
// // mongoose.connect("mongodb://localhost:27017/Shidi").then(()=>{
// //     console.log('Connected to MongoDB');
// // }).catch(err=>{
// //     console.log(err);
// // })

// // //Routes
// // const itemRoutes=require('./routes/items');




// // //Test
// // app.get('/test',async(req,res)=>{
// //     res.send("Hello");
// //     mongoose.Collection("Shidi_Test").find({}).toArray(function(err,result){
// //         if(err) throw err;
// //         console.log(result);
// //     })
// //     // try{
// //     // const items=await Item.find();
// //     // res.json(items);
// //     // }catch(err){
// //     //     res.status(400).json({error:err.message});
// //     //     console.log(err);
// //     // }
// // })




// // //CREATE
// // app.post('/',async(req,res)=>{
// //     const newItem=new Item(req.body);

// //     try{
// //         const savedItem=await newItem.save();
// //         res.json(savedItem);
// //     }
// //     catch(err){
// //         res.status(400).json({error:err.message});
// //         console.log(err);
// //     }
// // })

// // //READ
// // app.get('/',async(req,res)=>{
// //     res.write("Hello")
// //     try{
// //         const items=await Item.find();
// //         res.json(items);
// //     }
// //     catch(err){
// //         res.status(400).json({error:err.message});
// //         console.log(err);
// //     }
// // })

// // //UPDATE
// // app.put('/:id',async(req,res)=>{
// //     try{
// //         const updatedItem=await Item.findByIdAndUpdate(req.params.id,req.body,{new:true});
// //         res.json(updatedItem);
// //     }
// //     catch(err){
// //         res.status(400).json({error:err.message});
// //         console.log(err);
// //     }
// // });

// // //DELETE
// // app.delete('/:id',async(req,res)=>{
// //     try{
// //         await Item.findByIdAndDelete(req.params.id);
// //         res.json({message:'Item Deleted!'});
// //     }
// //     catch(err){
// //         res.status(400).json({error:err.message});
// //         console.log(err);
// //     }
// // })

// // app.use(itemRoutes);

// const PORT=process.env.PORT || 3100;

// app.listen(PORT,()=>{
//     console.log(`Server running on port ${PORT}`);
// })









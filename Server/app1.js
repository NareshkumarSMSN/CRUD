const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

//MONGODB CONNECTION
mongoose.connect('mongodb://localhost:27017/CRUD');

//SCHEMA
const UserSchema=new mongoose.Schema({
    Name:String,
    Dept:String,
    Rollno:String,
    Year:String
})

//MODEL
const UserModel=mongoose.model('DATAS',UserSchema);

//GET DATA
app.get('/GET_DATA',(req,res)=>{
    UserModel.find({}).then(function(Users){
        res.json(Users)
    }).catch(function(err){
        res.send(err);
        console.log
    })
})

//GET SINGLE DATA
app.post('/GET_SINGLE_DATA',async (req,res)=>{
    await UserModel.findById(req.body.id)
    .then((result)=>{
        res.send(result);
    }).catch((err)=>{
        res.send("Data Not Found");
        console.log(err);
    })
})

//CREATE DATA
app.post('/ADD_DATA',async (req,res)=>{
    console.log(req.body)
    const data=new UserModel({
        Name:req.body.name,
        Dept:req.body.dept,
        Rollno:req.body.rollno,
        Year:req.body.year
    });  

    await data.save()
    .then((result)=>{
        res.json({ message: 'Data Inserted Successfully' });
    })
    .catch((err)=>{
        res.send("Data Insertion Failed");
        console.log(err);
    })

})

//UPDATE DATA
app.post('/UPDATE_DATA',async(req,res)=>{
    console.log(req.body)
    await UserModel.findByIdAndUpdate(req.body.id,req.body,{new:true})
   .then((result)=>{
    res.json({message:"Data Updated"})
    console.log(result);  
   })
   .catch((err)=>{
    res.send("Data Update Failed");
        console.log(err);
   })
})

//DELETE DATA
app.post('/DELETE_DATA',async (req,res)=>{
    console.log(req.body);
    await UserModel.findByIdAndDelete(req.body.id)
    .then((result)=>{
        res.json({message:"Data Deleted"})
    })
    .catch((err)=>{
        res.json({message:"Data Deleted failed"})
        console.log(err);
    })
})

//SERVER LISTENING
app.listen(3000,()=>{
    console.log("Port is 3000")
})
const mongoose=require('mongoose');


const url='mongodb+srv://ayushagarwal2502:AyushAgarwal@cluster0.c3u05xs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' ;

module.exports.connect=()=>{
    mongoose.connect(url,{
        useNewUrlParser:true ,
        useUnifiedTopology:true
    }).then(()=>{ 
        console.log("mongo db connected succesfully");
    }).catch((error)=>{
        console.log(error); 
    })  
} 

const express=require('express');
const port=8000;
const app=express();
const db=require('./db.js');
const login=require('./models/login.js');
const cors=require('cors');
const secret1234='Ayush@12345'; 
const jwt=require('jsonwebtoken');
const nodemailer = require('nodemailer');
const {Server}=require('socket.io');  
const http=require('http');
const server=http.createServer(app);
const io=new Server(server,{
  cors:true,
});

//socket  
const  emailToSocketIdMap=new Map();
const  socketidToEmailMap=new Map();

io.on('connection',(socket)=>{

     

      socket.on('chat message',(arg)=>{
        console.log(arg)
        io.emit('messageResponse',arg)
      });

      socket.on("room:join", (data) => {
        const { email, room } = data;
        emailToSocketIdMap.set(email, socket.id);
        socketidToEmailMap.set(socket.id, email);
        io.to(room).emit("user:joined", { email, id: socket.id });
        socket.join(room);
        io.to(socket.id).emit("room:join", data);
      });
    
      socket.on("user:call", ({ to, offer }) => {
        io.to(to).emit("incomming:call", { from: socket.id, offer });
      });
    
      socket.on("call:accepted", ({ to, ans }) => {
        io.to(to).emit("call:accepted", { from: socket.id, ans });
      });
    
      socket.on("peer:nego:needed", ({ to, offer }) => {
        console.log("peer:nego:needed", offer);
        io.to(to).emit("peer:nego:needed", { from: socket.id, offer });
      });
    
      socket.on("peer:nego:done", ({ to, ans }) => {
        console.log("peer:nego:done", ans);
        io.to(to).emit("peer:nego:final", { from: socket.id, ans });
      });
    });
  
  

db.connect();  
app.use(cors());
app.use(express.json());
app.post('/signup',(req,res)=>{  
     login.create(req.body)
        .then((data)=>{
            res.json(data) 
        })
    .catch((err)=>{
          res.json(err)
    })
})
app.post('/login',(req,res)=>{
    login.findOne({email:req.body.email,password:req.body.password})
    .then((user)=>{
        const token=jwt.sign({
          name:user.name, 
          email:user.email, 
          _id:user._id 
    },secret1234) 
    res.json(token)   
    }).catch((err)=>{
    res.json(err);
    })
    })
    app.post('/forgetpassword',(req,res)=>{
      const email=req.body.email;
        login.findOne({email:req.body.email})
        .then((user)=>{
            const token=jwt.sign({
                name:user.name, 
                email:user.email, 
                _id:user._id 
          },secret1234) 
         

          var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'ayushagarwal201889@gmail.com',
              pass: 'degdjugtabrypgzy'
            }
          });
          
          var mailOptions = {
            from: 'ayushagarwal201889@gmail.com',
            to: email,
            subject: 'Sending Email using Node.js',
            text: `http://localhost:3000/reset-Password/${user._id}/${token}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              res.json('Success');
            }
          })
          }).catch((err)=>{
          res.json(err);
          })
          })

   app.put('/reset-Password/:id',(req,res)=>{
              const id=req.params.id;
              login.findByIdAndUpdate({_id:id},{password:req.body.password})  
              .then((result)=>{
               res.json(result)
              })
              .catch((err)=>{
                res.json(result)
              })
        })
// app.listen(8000,(req,res)=>{ 
//     console.log('Server started at 8000') 
// })

 
server.listen(8000,()=>{
  console.log('Server started at 8000') 
})
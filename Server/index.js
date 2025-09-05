const express = require('express');
const app=express();
const http = require('http');
const cors = require('cors');
const { Server, Socket } = require('socket.io');
const session=require("express-session");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const mongoose = require('mongoose');
const colors=require("colors");
const userRoutes=require("./routes/userRoutes.js");
const dotenv=require("dotenv");
const User=require("./Schemas/userModel.js");
const {notFound,errorHandler}=require("./middlewares/errorMiddlewares.js");
const chatRoutes=require("./routes/chatRoutes.js")
const messageRoutes=require("./routes/messageRoutes");

//User.find().then((data)=>{console.log(data)}).catch();

// app.use(session(sessionOptions));
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

dotenv.config();
app.use(express.json())


main().then((data)=>{console.log("MongoDB connected sucessfully".cyan.underline)}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/MS-teams-Chat');
}

app.use(cors());

const server = http.createServer(app);


app.use("/user",userRoutes);
app.use("/chat",chatRoutes);
app.use("/message",messageRoutes);

const io = new Server(server, {
  pingTimeout:60000,
  cors: {
    origin: 'http://localhost:5173', //React app url
    methods: ['GET', 'POST'],
  },
});

io.on("connection",(socket)=>{
  console.log("connected to socket.io");
  socket.on("setup",(userData)=>{
    socket.join(userData?._id);
    socket.emit("connected");
  });

  socket.on("join chat",(room)=>{
    socket.join(room);
    console.log(`User joined room : ${room}`);    
  });

  socket.on("new message",(newMessageRecieved)=>{
    let chat=newMessageRecieved.chat;
    if(!chat.users) return console.log("chat.users not defined");

    chat.users.forEach((user) => {
      if(user._id===newMessageRecieved.sender._id) return;
      socket.in(user._id).emit("message recieved",newMessageRecieved);
    });
  });

  socket.off("setup",()=>{
    console.log("User Disconnected");
    socket.leave(userData._id);
  })

});


app.use(notFound);
app.use(errorHandler);

server.listen(3001, () => {
  console.log('Server is running on port 3001'.yellow.bold);
});

const mongoose=require('mongoose');

function connectDB(){

    // mongoose.connect('mongodb+srv://csudharshanraju964:spykar*964*@cluster0.axrjo2o.mongodb.net/rental-car',{useUnifiedTopology: true , useNewUrlParser: true})
   
    mongoose.connect(
      "mongodb+srv://csudharshanraju:spykar*964*@cluster0.bl1f528.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      { useUnifiedTopology: true, useNewUrlParser: true }
    );

    

    const connection=mongoose.connection;
    connection.on('connected',()=>{
        console.log("Succesfully connected to db...")
    })
    connection.on('error',()=>{
        console.log("Failed connecting to db...")
    })
}
connectDB();
module.exports=mongoose;
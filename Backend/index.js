import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import adminRoute from "./Routes/adminRoute.js"
import clientRoute from "./Routes/clientRoute.js"
import reagentRoute from "./Routes/reagentRoute.js"
import clientOrder from "./Routes/clientOrder.js"
import clientOrderDetails from "./Routes/clientOrderDetails.js";
import verifyToken from "./Authorization/jwtmiddleware.js";

const app = express();
app.use(express.json());
app.use(cors());
mongoose
  .connect(
    "mongodb+srv://ayushmishra3358:am21410006iitr@project.zmdlyeb.mongodb.net/Project1?retryWrites=true&w=majority&appName=project",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("database is connnected");
   
  });
  app.listen(3000, function () {
    console.log("server is running on port 3000");
  }); 

app.use('/admin',adminRoute)
app.use('/client',clientRoute)
app.use('/reagent',verifyToken,reagentRoute)
app.use('/clientOrder',verifyToken,clientOrder)
app.use('/clientorderDeatils',verifyToken,clientOrderDetails )
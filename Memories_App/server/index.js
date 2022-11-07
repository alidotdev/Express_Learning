import express from "express";
import bodyParser from "body-parser";
import mongoose, { mongo } from "mongoose";
import cors from "cors";
import postRoutes from './routes/posts.js'
const app = express();
app.use('/posts' , postRoutes)
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//for mongodb cloud
const CONNECTION_URL =
  "mongodb+srv://khadija_11:yoosijin11A.@cluster0.bmyifaw.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000; //now we're going to use port 5000
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }) //In this second para is not required but if we're not set them up then got some errors or warnings in console
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  ) //.then returns a promise
  .catch((error) => console.log(`${error} did not connect`)); //mongoose to connect to our database

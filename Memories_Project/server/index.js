import express  from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import postRoutes from "./routes/posts.js";

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://alidotdev:Ali%4003124922033@cluster0.yth0wq1.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;
// console.log(PORT)

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT , () => console.log(`Server Running on Port: www.localhost:${PORT}`)))
    .catch((error) => console.log(error.message));


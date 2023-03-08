import express from "express";
import dotenv from "dotenv";
//import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import cors from "cors"
import path, { dirname } from "path"

//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();

//middelwares
//
app.use(cors())
//Allow JSON data to make communicate with API. Allow the JSON data in a request by adding middleware for the body parser.
app.use(express.json());
// To log data
//app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
//app.use(express.static(path.join(__dirname, "./client/build")))

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname,"./client/build/index.html"));
// });

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`
      
  );
});

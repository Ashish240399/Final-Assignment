const express=require("express");
const cors=require("cors");
const app=express();
const productController=require("./src/controllers/productController");
app.use(express.json());
app.use(cors());
app.use("/products",productController)
module.exports=app;
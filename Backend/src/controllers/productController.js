const express=require("express");
const Product = require("../models/productModel");
const router=express.Router();
router.get("/",async(req,res)=>{
    try {
        const page=req.query.page || 1;
        const pageSize=req.query.pageSize || 10;
        const skip=(page-1)*pageSize
        const product=await Product.find().skip(skip).limit(pageSize).lean().exec();
        return res.send(product)
    } catch (error) {
        return res.send(error)
    }
})
module.exports=router;
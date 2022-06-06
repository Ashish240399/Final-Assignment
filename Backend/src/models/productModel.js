const mongoose=require("mongoose");

const productSchema=mongoose.Schema({
    title:{type:String},
    price:{type:String},
    rating:{type:String},
    barand:{type:String},
    image:{type:String},
})

const Product=mongoose.model("product",productSchema);

module.exports=Product;
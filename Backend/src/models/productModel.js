const mongoose=require("mongoose");

const productSchema=mongoose.Schema({
    title:{type:String},
    price:{type:String},
    rating:{type:String},
    brand:{type:String},
    image:{type:String},
});
const Product=mongoose.model("products",productSchema);
module.exports=Product;
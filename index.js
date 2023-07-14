const express =require('express')
const app =express();
const mongoose =require('mongoose');

const dbConnect=async()=>{
    mongoose.connect('mongodb://localhost:27017/databse')
    const productSchema =new  mongoose.Schema({});
    const product = mongoose.model('products',productSchema);
    const data =await product.find();
    console.warn(data)


} 
dbConnect();
app.listen(5000)
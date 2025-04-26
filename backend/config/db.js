import mongoose from "mongoose";

 export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://naazb597:sqkIqfFHk79Vs33Q@cluster0.tl4uvze.mongodb.net/food-del').then(()=>
        console.log("DB Connected"));

}
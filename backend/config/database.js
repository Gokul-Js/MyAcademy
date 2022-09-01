import mongoose from "mongoose";


export const connectDB = async()=>{
  const {connection} = await mongoose.connect(process.env.MANGO_URI);
  console.log(`Mongo Server is working on port: ${connection.host}`)
}
import mongoose from 'mongoose';
export default async function connectDB (contxt:string)
{
  return await mongoose.connect(contxt).then(() =>console.log("Connected") ).catch(e => console.log("Can't connect"))
}

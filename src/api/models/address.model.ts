import mongoose, { Schema } from 'mongoose';

const addressSchema: Schema = new mongoose.Schema( {
  _id: mongoose.Types.ObjectID,

} )


const model = mongoose.model('Address',addressSchema)
export default model;

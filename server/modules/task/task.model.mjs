import mongoose from 'mongoose'
const { Schema, model } = mongoose

export const TaskSchema = new Schema({
    appId    :  { type : String, required : true },
    content  : { type : String, required : true },
    completed: { type : Boolean, required : true}
}, {timestamps:true});
  
export default model('task',TaskSchema);
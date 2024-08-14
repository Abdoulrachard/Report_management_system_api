const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const taskSchema = new mongoose.Schema({
  title: {type: String , required : true},
  description:  {type: String , required : true},
  startedAt: {type: Date },
  finishedAt: {type: Date },
  date : {type: Date , required : true},
  taskPdf: {type: String },
  reportPdf: {type: String },
  taskDoc: {type: String },
  reportDoc: {type: String },
  status: {type: String , required : true , enum: ['sheduled'  , 'pending'  , 'started' , 'finished' , 'cancelled' ]},
  pourcentage: {type: Number , required : true},
  agentId: { type: Number},
});
taskSchema.plugin(uniqueValidator);


module.exports = mongoose.model('Task', taskSchema);

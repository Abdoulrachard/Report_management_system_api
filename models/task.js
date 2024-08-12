const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  startedAt: Date,
  finishedAt: Date,
  taskPdf: String,
  reportPdf: String,
  taskDoc: String,
  reportDoc: String,
  status: String,
  pourcentage: Number,
  agentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Task', taskSchema);

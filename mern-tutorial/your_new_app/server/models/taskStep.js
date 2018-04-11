import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const taskStepSchema = new Schema({
  description: { type: 'String', required: true },
  timeRequired: { type: 'Number', required: false }, // minutes
  cuidDependency: {	type: 'String', required: false },
  comment: { type: 'String', required: false },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('TaskStep', taskStepSchema);

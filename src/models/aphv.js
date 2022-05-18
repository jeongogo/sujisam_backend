import mongoose from 'mongoose';

const { Schema } = mongoose;

const AphvSchema = new Schema({
  gender: String,
  age: String,
  date: String,
  height: String,
  sittingHeight: String,
  weight: String,
  data: Number,
});

const Aphv = mongoose.model('Aphv', AphvSchema);
export default Aphv;

import mongoose from 'mongoose';

const { Schema } = mongoose;

const AthleteSchema = new Schema({
  name: String,
  gender: String,
  birthday: String,
  phone: String,
  height: String,
  weight: String,
  career: String,
  sports: String,
  dominance_hand: String,
  dominance_leg: String,
  team: String,
  register_date: {
    type: Date,
    default: Date.now,
  },
  measure_monitoring: [],
  measure_periodic: [],
});

const Athlete = mongoose.model('Athlete', AthleteSchema);
export default Athlete;

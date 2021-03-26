const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// const workoutSchema = new schema({
//   name: { type: String, required: true },
//   workout: { type: Array }
// });

const workoutSchema = new Schema({
  day: { type: Date, required: true },
  exercises: [
    {
      type: {
        type: String
      },
      name: {
        type: String
      },
      duration: {
        type: Number
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      }
    }
  ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
const mongoose = require("mongoose");
const { Schema } = mongoose;

const StudentSchema = new Schema({
  email: {
    type: String,
    required: [true, "email is required"],
  },
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  password: {
    type: String,
  },
  groupId: {
    type: Schema.Types.ObjectId,
    ref: "Group",
  },
  is_enrolled_in_capstone_projects: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Student", StudentSchema);

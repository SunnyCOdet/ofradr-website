import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: String,
  subject: String,
  message: String,
});

// ✅ Only create the model if it doesn't already exist
const User = mongoose.models.Sub || mongoose.model("Sub", UserSchema);

export default User;

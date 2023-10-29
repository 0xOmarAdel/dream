const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 30,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 30,
    },
    phone: {
      type: String,
      unique: true,
      min: 5,
      max: 14,
    },
    address: {
      type: String,
      minLength: 5,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email must be provided"],
      validator: {
        validate: validator.isEmail,
        message: "Please provide a valid email address",
      },
    },
    password: {
      type: String,
      required: [true, "Password must be provided"],
      minlength: 6,
      maxlength: 25,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePasswords = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model("User", UserSchema);

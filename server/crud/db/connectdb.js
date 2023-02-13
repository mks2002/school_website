import mongoose from "mongoose";
import redis from 'redis'

// if there is a database whose name is school then it will use that other wise first it create that database then use it...
const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "school",
    };
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("Connected Successfully..");
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
import mongoose from "mongoose";
const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => {
      console.log("connected to mongoDB");
    })
    .catch((err) => {
      console.log("unable to connect ", err);
    });
};

export default connectDB;

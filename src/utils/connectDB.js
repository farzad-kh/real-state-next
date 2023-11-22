
import mongoose, { mongo } from "mongoose";

const connectDB = async () => {
    mongoose.set('strictQuery', true);
    if (mongoose.connections[0].readyState) return

    await mongoose.connect(process.env.MONGODB_URI,{
        dbName: "Real-state",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    console.log("Connect to DB");
}

export default connectDB
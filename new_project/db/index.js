import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connectionDBInstance = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`\n MongoDB connected !! DB HOST: ${connectionDBInstance.connection.host}`);
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1);
  }
};

export default connectDB;

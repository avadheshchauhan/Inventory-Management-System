require('dotenv').config();
const mongoose = require('mongoose');
// const URI = `mongodb+srv://Avadhesh:admin@cluster0.z2dey.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // serverApi: ServerApiVersion.v1,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log('MongoDB is not connected!!!', error);
    process.exit();
  }
};

module.exports = connectDB;

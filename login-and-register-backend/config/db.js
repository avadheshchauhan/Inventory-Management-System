require('dotenv').config();
const mongoose = require('mongoose');
 //const URI = `mongodb+srv://Avadhesh:inventory@cluster0.w0ecq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_CONNECT, {
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

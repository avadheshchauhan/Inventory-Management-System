const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();
app.use(cors());
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;

// app.get('/', (req, res) => {
//   res.send('API is running!!!');
// });

app.use("/", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log(`App is running at port ${PORT}`));

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const connectDB = require("./db/connect");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
var cron = require("node-cron");
const axios = require("axios");
const authenticateUser = require("./middleware/authenticateUser");

const app = express();

app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));
app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({ origin: "*" }));

const authRouter = require("./routes/authRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const mealRoutes = require("./routes/mealRoutes");
const orderRoutes = require("./routes/orderRoutes");

app.get("/", (req, res) => {
  const responseData = {
    message: "YO, HOW U DOIN?",
  };

  res.status(200).json(responseData);
});

// cron.schedule("*/5 * * * *", () => {
//   console.log("SERVER PING IS ALRIGHT!");
//   const serverUrl = "https://cms-complaints-api.onrender.com";
//   axios
//     .get(serverUrl)
//     .then((response) => {
//       if (response.status === 200) {
//         console.log(`Request sent to ${serverUrl}`);
//       } else {
//         console.error(
//           `Failed to send request to ${serverUrl}. Status code: ${response.status}`
//         );
//       }
//     })
//     .catch((error) => {
//       console.error(`Error sending request to ${serverUrl}: ${error.message}`);
//     });
// });
app.use("/api/v1/validateToken", authenticateUser, async (req, res) => {
  const userData = req.user;
  if (!userData) {
    res.status(401).json({ message: "Token not valid" });
  }
  res.status(200).json({ userData });
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/categories", categoryRoutes);
app.use("/api/v1/meals", mealRoutes);
app.use("/api/v1/orders", orderRoutes);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();

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
const yup = require("yup");
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
const reviewRoutes = require("./routes/reviewRoutes");
const cartRoutes = require("./routes/cartRoutes");
const reservationRoutes = require("./routes/reservationRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const User = require("./models/User");

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
app.use("/api/v1/reviews", reviewRoutes);
app.use("/api/v1/cart", cartRoutes);
app.use("/api/v1/reservation", reservationRoutes);
app.use("/api/v1/admin", dashboardRoutes);

const userUpdateSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
});

app.put("/api/v1/users/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const userData = req.body;

    await userUpdateSchema.validate(userData, { abortEarly: false });

    const updatedUser = await User.findByIdAndUpdate(userId, userData, {
      new: true,
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

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

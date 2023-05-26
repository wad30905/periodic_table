const express = require("express");
const connectDB = require("./config/db");
const materialRoutes = require("./routes/materialRoutes");
const dotenv = require("dotenv");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");
const cors = require("cors");

dotenv.config();
connectDB();
const app = express();
app.use(express.json()); // to accept json data

app.get("/", (req, res) => {
  res.send("API Running!");
});

let corsOptions = {
  origin: "*", // 출처 허용 옵션
  credential: true, // 사용자 인증이 필요한 리소스(쿠키 등) 접근
};

app.use(cors(corsOptions));
app.use("/api/material", materialRoutes);

//error or not found
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`server started at ${PORT} `));

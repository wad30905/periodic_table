const express = require("express");
const connectDB = require("./config/db");
const materialRoutes = require("./routes/materialRoutes");
const dotenv = require("dotenv");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");
const path = require("path");
const cors = require("cors");

dotenv.config();
connectDB();
const app = express();

app.use(express.json()); // to accept json data
app.use("/api/material", materialRoutes);

//deploy

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
//deploy

//error or not found
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`server started at ${PORT} `));

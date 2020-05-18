const express = require("express");
const connectDB = require("./config/database");
const app = express();
//const cors = require("cors");
const path = require("path");

//connect the database

connectDB();

//init middleware
app.use(express.json());
//define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/profile", require("./routes/api/profile"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
//app.use(cors({ origin: "http://localhost:3000" }));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server successfully on port ${PORT}`));

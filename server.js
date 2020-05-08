const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("The API is succesfully running"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server successfully on port ${PORT}`));

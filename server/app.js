const express = require("express");
const searchRouter = require("./routes/searchRoute");
const cors = require("cors");
const app = express();

app.use(cors());
app.use("/search", searchRouter);

const port = 8080;
app.listen(port, () => {
  console.log("Server is up and running on port number " + port);
});

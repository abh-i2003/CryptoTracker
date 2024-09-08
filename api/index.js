const Express = require("express");
const dbConnection = require("./dbConnection");
const app = Express();
const cors = require("cors");
app.use(Express.json());
app.use(cors());
app.use("/api/v1", require("./router/routes"));

app.listen(3002, () => {
  dbConnection();
  console.log("My app is listening");
});

const express = require("express")
const http = require("http")
const bodyParser = require("body-parser")
const morgan = require("morgan")

const dishRouter = require("./routes/dishRouter")


const hostname = "localhost"
const port = 3000

const app = express()

app.use(bodyParser.json());
app.use(morgan("dev"))

app.use("/dishes", dishRouter)

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
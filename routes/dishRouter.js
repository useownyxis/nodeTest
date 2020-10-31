const express = require("express")
const bodyParser = require("body-parser")

const dishRouter = express.Router()

dishRouter.use(bodyParser.json())

dishRouter.param("dishID", (req, res, next, id) => {
    req.dish = {
        id: id
    }
    next()
})


dishRouter.route("/")
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
})

.get((req, res, next) => {
    res.end("Will send all the dishes to you!");
})

.post((req, res, next) => {
    res.end("Will add the dish: " + req.body.name + " with details: " + req.body.description);
}) 

.put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /dishes");
})
   
.delete((req, res, next) => {
      res.end("Deleting all dishes");
})



dishRouter.route("/:dishID")
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
})

.get((req, res, next) => {
    res.end("Will send dish " + req.dish.id + " to you!");
})

.post((req, res, next) => {
    res.statusCode = 403;
    res.end("Cannot POST REQ in /dishes/dishID");
}) 

.put((req, res, next) => {
    res.end("Change dish " + req.dish.id + "with param " + req.body.name + " " + req.body.description);
})
   
.delete((req, res, next) => {
    res.end("Delete dish " + req.dish,id)
})


module.exports = dishRouter
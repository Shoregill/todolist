const mongoose = require('mongoose');
const connectionString = "mongodb+srv://Shoregill:tickle1973@cluster0.ov8cmws.mongodb.net/?retryWrites=true&w=majority"
mongoose.set('debug', true);
mongoose.Promise = Promise;

module.exports.Todo = require("./todo");
const mongodb = require("mongoose");

mongodb.connect("mongodb://localhost:27017/insta-support").then(() => {
    console.log("connected to mongoDB")
}).catch(error => {
    console.log(error?.message ?? "connection to mongoBD failed")
});
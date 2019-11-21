const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const os = require("os");

const app = express();


app.get("/api/all"), (req, res) => {
        res.setHeader("Content-Type", "text/html");
        res.send("<h")
    }
    //Run the server
app.listen(3000, (e) => {
    if (e) throw e;
    console.log("Server has started on port 3000")
})
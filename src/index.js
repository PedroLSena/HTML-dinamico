const express = require("express");
const path = require("node:path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
const ttl = "Hello"
const p = "My name is Jhon  Doe"

app.get("/", (req, res)=>{
    res.render("index",{ ttl, p });
})

const PORT = 3000;

app.listen(PORT, ()=> console.log("ON"));
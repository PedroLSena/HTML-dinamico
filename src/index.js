const express = require("express");
const path = require("node:path");

const app = express();

const storageUsers = [];
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//EJS config
app.use(express.urlencoded({extended:true}));

const ttl = "Hello"
const p = "My name is Jhon  Doe"

app.get("/", (req, res)=>{
    res.render("index",{ ttl, p });
})

app.get("/formulario", (req, res)=>{
    res.render("form");
});

app.post("/register", (req, res)=>{
    const username = req.body.username;
    const password = req.body.password
    console.log(username,password);
    storageUsers.push({username, password});
    res.redirect("/usuarios");
});

app.get("/usuarios", (req, res)=>{
    res.render("user", {users: storageUsers});
});

const PORT = 3000;

app.listen(PORT, ()=> console.log("ON"));
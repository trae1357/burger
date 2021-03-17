const express = require('express');

const app = express()

const port= process.env.PORT || 8800;

const expressHandlebars = require("express-handlebars");

app.engine("handlebars", expressHandlebars({defaultLayout:"main"}))

app.set("view engine", "handlebars");


app.use(express.static("public"))

app.use(express.urlencoded({extended:true}))

app.use(express.json())

const routes= require("./controller/burgerController")

app.use(routes)

app.listen(port, function(){
    console.log("App is listening "+ port)
})
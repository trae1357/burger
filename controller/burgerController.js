const burgermodel = require("../models/burger")

const router = require("express").Router()

router.get("/", function(req,res){
    burgermodel.selectAll(function(burgerdata){
        res.render("index", {burgers:burgerdata})
    })
})


module.exports=router
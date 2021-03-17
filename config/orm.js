const connection = require("./connection")


const orm = {
    selectAll:function(table,cbmodel){
        connection.query("select * from ??", table , function(err,burgerdata){
            cbmodel(burgerdata)
        })
    }
}

module.exports = orm
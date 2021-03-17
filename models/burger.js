const orm = require("../config/orm");

const burgermodel = {
  selectAll:function(cbcontroller) {
    orm.selectAll("burgers", function(burgerdata){
        cbcontroller(burgerdata)
    })
  } 
} 

module.exports = burgermodel
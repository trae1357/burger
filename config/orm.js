const connection = require("./connection")

const printQuestionMarks = (num) => {
    const arr = [];
  
    for (let i = 0; i < num; i++) {
      arr.push('?');
    }
  
    return arr.toString();
  };


const orm = {
    selectAll:function(table,cbmodel){
        connection.query("select * from ??", table , function(err,burgerdata){
            cbmodel(burgerdata)
        })
    }
}


module.exports = orm
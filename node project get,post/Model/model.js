const mon = require('mongoose')

const schema1 = mon.Schema(
    {
        Name : {
            type : String
        },
        section : {
            type : String 
        },
        cgpa : {
            type : Number
        }
    }
)

module.exports = mon.model("list1",schema1)

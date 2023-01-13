const fs =require('fs')
let emp = function(note){
    let finalEmp = JSON.parse(note)
    let empList = finalEmp.map(function(i){
        return i.employee
    })
    console.log('Employee: '+ empList)
}
module.exports =emp
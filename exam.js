const add  = require('./add')
const read  = require('./read')
const present  = require('./present')
const emp  = require('./emp')

const cmd = process.argv

var note ={}

if(cmd[2]== 'add'){
    note ={
        employee: cmd[3],
        role: cmd[4],
        department: cmd[5]

    }
    var oldnote = read()
    add(note, oldnote)
}

if (cmd[2]== 'read'){
    present(read())
}
if (cmd[2]== 'employee'){
    emp(read())
}

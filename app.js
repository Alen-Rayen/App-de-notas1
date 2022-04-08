let fs = require("fs");

let notas = fs.readFileSync(__dirname + '/tareas.JSON', 'utf-8')
let JSONtar = JSON.parse(notas)

console.log(JSONtar)
let accion = process.argv[2]
switch (accion) {
    case "listar":
        console.log(notas)
        break;
    case undefined:
        console.log("Atencion - tienes que pasar una accion")
        break;
    default:
        console.log("No entiendo que quieres hacer")

}
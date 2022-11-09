let WarpDriveManagment = require("./src/WarpDriveManagment");
console.log("[0, 0, 0] -> A, B, C injector");
let inputs = [
    {
        injectorsDamage: [0, 0, 0],
        ligthSpeed: 100
    },
    {
        injectorsDamage: [0, 0, 0],
        ligthSpeed: 90
    },
    {
        injectorsDamage: [0, 0, 0],
        ligthSpeed: 30
    },
    {
        injectorsDamage: [20, 10, 0],
        ligthSpeed: 100
    },
    {
        injectorsDamage: [0, 0, 100],
        ligthSpeed: 80
    },
    {
        injectorsDamage: [0, 0, 100],
        ligthSpeed: 80
    },
    {
        injectorsDamage: [0, 0, 0],
        ligthSpeed: 150
    },
    {
        injectorsDamage: [0, 0, 30],
        ligthSpeed: 140
    },
    {
        injectorsDamage: [20, 50, 40],
        ligthSpeed: 170
    },
]

inputs.forEach((input) => {
    let warpDriveManagment = new WarpDriveManagment(input.injectorsDamage, input.ligthSpeed)
    let [A, B, C] = warpDriveManagment.getPlasmaFlowInjectors();
    let operatingTime = warpDriveManagment.getOperatingTimeInjectors();
    input["result"] = `A: ${A} mg/s, B: ${B} mg/s, C: ${C} mg/s`;
    input["operatingTime"] = operatingTime != "Infinito" ? `${operatingTime} minutos` : operatingTime
})

console.table(inputs, ["injectorsDamage", "ligthSpeed", "result", "operatingTime"]);
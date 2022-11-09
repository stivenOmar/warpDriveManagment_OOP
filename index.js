let WarpDriveManagment = require("./src/WarpDriveManagment");

let warpDriveManagment = new WarpDriveManagment([0, 0, 30], 140)
warpDriveManagment.getPlasmaFlowInjectors();
console.log(warpDriveManagment.getOperatingTimeInjectors());
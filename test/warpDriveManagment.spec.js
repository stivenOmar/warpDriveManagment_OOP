const {it, expect} = require("@jest/globals");
const WarpDriveManagment = require("../src/WarpDriveManagment");

describe("WarpDriveManagment", ()=>{

    /* ex: [100, 0, 100] -> injectors damage A, B, C */
    describe("getPlasmaFlowInjectors", ()=>{
        it("Should return [100,100,100] for input injectors damage [0, 0, 0] and ligth speed 100", ()=>{
            let warpDriveManagment = new WarpDriveManagment([0, 0, 0], 100);
            expect(warpDriveManagment.getPlasmaFlowInjectors().toString()).toBe("100,100,100");
        })
    
        it("Should return [90,90,90] for input injectors damage [0, 0, 0] and ligth speed 90", ()=>{
            let warpDriveManagment = new WarpDriveManagment([0, 0, 0], 90);
            expect(warpDriveManagment.getPlasmaFlowInjectors().toString()).toBe("90,90,90");
        })
    
        it("Should return [30,30,30] for input injectors damage [0, 0, 0] and ligth speed 30", ()=>{
            let warpDriveManagment = new WarpDriveManagment([0, 0, 0], 30);
            expect(warpDriveManagment.getPlasmaFlowInjectors().toString()).toBe("30,30,30");
        })
    
        it("Should return [90,100,110] for input injectors damage [20, 10, 0] and ligth speed 100", ()=>{
            let warpDriveManagment = new WarpDriveManagment([20, 10, 0], 100);
            expect(warpDriveManagment.getPlasmaFlowInjectors().toString()).toBe("90,100,110");
        })
    
        it("Should return [120,120,0] for input injectors damage [0, 0, 100] and ligth speed 80", ()=>{
            let warpDriveManagment = new WarpDriveManagment([0, 0, 100], 80);
            expect(warpDriveManagment.getPlasmaFlowInjectors().toString()).toBe("120,120,0");
        })
    
        it("Should return [150,150,150] for input injectors damage [0, 0, 0] and ligth speed 150", ()=>{
            let warpDriveManagment = new WarpDriveManagment([0, 0, 0], 150);
            expect(warpDriveManagment.getPlasmaFlowInjectors().toString()).toBe("150,150,150");
        })
    
        it("Should return 'Unable to comply' for input injectors damage [20, 50, 40] and ligth speed 170", ()=>{
            let warpDriveManagment = new WarpDriveManagment([20, 50, 40], 170);
            expect(warpDriveManagment.getPlasmaFlowInjectors().toString()).toBe("Unable to comply");
        })
    })
    
    /* ex: [100, 0, 100] -> injectors damage A, B, C */
    describe("getOperatingTimeInjectors", ()=>{
        it("Should return 'Infinito' for input injectors damage [0, 0, 0] and ligth speed 100", ()=>{
            let warpDriveManagment = new WarpDriveManagment([0, 0, 0], 100);
            warpDriveManagment.getPlasmaFlowInjectors();
            expect(warpDriveManagment.getOperatingTimeInjectors()).toBe("Infinito");
        });

        it("Should return 'Infinito' for input injectors damage [0, 0, 0] and ligth speed 90", ()=>{
            let warpDriveManagment = new WarpDriveManagment([0, 0, 0], 90);
            warpDriveManagment.getPlasmaFlowInjectors();
            expect(warpDriveManagment.getOperatingTimeInjectors()).toBe("Infinito");
        });

        it("Should return 'Infinito' for input injectors damage [0, 0, 0] and ligth speed 30", ()=>{
            let warpDriveManagment = new WarpDriveManagment([0, 0, 0], 30);
            warpDriveManagment.getPlasmaFlowInjectors();
            expect(warpDriveManagment.getOperatingTimeInjectors()).toBe("Infinito");
        });

        it("Should return 90 minutos for input injectors damage [20, 10, 0] and ligth speed 100", ()=>{
            let warpDriveManagment = new WarpDriveManagment([20, 10, 0], 100);
            warpDriveManagment.getPlasmaFlowInjectors();
            expect(warpDriveManagment.getOperatingTimeInjectors()).toBe(90);
        });

        it("Should return 80 minutos for input injectors damage [0, 0, 100] and ligth speed 80", ()=>{
            let warpDriveManagment = new WarpDriveManagment([0, 0, 100], 80);
            warpDriveManagment.getPlasmaFlowInjectors();
            expect(warpDriveManagment.getOperatingTimeInjectors()).toBe(80);
        });

        it("Should return 50 minutos for input injectors damage [0, 0, 0] and ligth speed 150", ()=>{
            let warpDriveManagment = new WarpDriveManagment([0, 0, 0], 150);
            warpDriveManagment.getPlasmaFlowInjectors();
            expect(warpDriveManagment.getOperatingTimeInjectors()).toBe(50);
        });

        it("Should return 50 minutos for input injectors damage [0, 0, 30] and ligth speed 140", ()=>{
            let warpDriveManagment = new WarpDriveManagment([0, 0, 30], 140);
            warpDriveManagment.getPlasmaFlowInjectors();
            expect(warpDriveManagment.getOperatingTimeInjectors()).toBe(50);
        });

        it("Should return 0 minutos for input injectors damage [20, 50, 40] and ligth speed 170", ()=>{
            let warpDriveManagment = new WarpDriveManagment([20, 50, 40], 170);
            warpDriveManagment.getPlasmaFlowInjectors();
            expect(warpDriveManagment.getOperatingTimeInjectors()).toBe(0);
        });
    })
})
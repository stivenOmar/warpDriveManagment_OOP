class Injector{
    constructor(){
        this.totalCurrentPlasmaFlow = 100;
        this.remainingRunningTime = 100;
    }

    setDamage = (damage) => {
        const LOST_PLASMA_FLOW = this.totalCurrentPlasmaFlow * damage / 100;
        this.totalCurrentPlasmaFlow = this.totalCurrentPlasmaFlow - LOST_PLASMA_FLOW;
    }

    isCompletyDamage = () => {
        return this.totalCurrentPlasmaFlow === 0
    }

    getTimeOperating = () => {
        return this.isUsingPlasmaFlowExtra() ? this.remainingRunningTime : "Infinito";
    }

    isUsingPlasmaFlowExtra = () => {
        const TOTAL_REAMAINING_TIME = 100;
        return this.remainingRunningTime !== TOTAL_REAMAINING_TIME;
    }

    plasmaFlow = () =>{
        return this.totalCurrentPlasmaFlow;
    }

    usePlasmaFlowExtra = (plasmaFlowExtra) => {
        this.totalCurrentPlasmaFlow = this.totalCurrentPlasmaFlow + plasmaFlowExtra;
        this.remainingRunningTime = this.remainingRunningTime - plasmaFlowExtra;
    }

    maximumPosiblePlasmaFlow = () => {
        const MAXIMUM_PLASMA_FLOW_EXTRA = 99;
        return this.totalCurrentPlasmaFlow + MAXIMUM_PLASMA_FLOW_EXTRA;
    }
}

module.exports = Injector
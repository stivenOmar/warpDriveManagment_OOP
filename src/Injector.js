class Injector{
    constructor(){
        this.currentPlasmaFlow = 100;
        this.remainingRunningTime = 100;
    }

    setDamage = (damage) => {
        let lostPlasmaFlow = this.currentPlasmaFlow * damage / 100;
        this.currentPlasmaFlow = this.currentPlasmaFlow - lostPlasmaFlow;
    }

    isCompletyDamage = () => {
        return this.currentPlasmaFlow === 0
    }

    getTimeOperating = () => {
        return this.isUsingPlasmaFlowExtra() ? this.remainingRunningTime : "Infinito";
    }

    isUsingPlasmaFlowExtra = () => {
        const TOTAL_REAMAINING_TIME = 100;
        return this.remainingRunningTime !== TOTAL_REAMAINING_TIME;
    }

    plasmaFlow = () =>{
        return this.currentPlasmaFlow;
    }

    usePlasmaFlowExtra = (plasmaFlowExtra) => {
        this.currentPlasmaFlow = this.currentPlasmaFlow + plasmaFlowExtra;
        this.remainingRunningTime = this.remainingRunningTime - plasmaFlowExtra;
    }

    maximumPosiblePlasmaFlow = () => {
        const MAXIMUM_PLASMA_FLOW_EXTRA = 99;
        return this.currentPlasmaFlow + MAXIMUM_PLASMA_FLOW_EXTRA;
    }
}

module.exports = Injector
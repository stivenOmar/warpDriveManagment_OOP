const Injector = require("./Injector");

class WarpDriveManagment{
    constructor(injectorsDamage, ligthSpeed){
        this.ligthSpeed = ligthSpeed;
        this.injectors = this.initialiceInjectors(injectorsDamage);
    }

    initialiceInjectors = (injectorsDamage) =>{
        return injectorsDamage.map((damage)=> {
            let injector = new Injector();
            injector.setDamage(damage);
            return injector;
        });
    }

    getPlasmaFlowInjectors = () => {
    
        if(this.getMaximumPlasmaFlowAllInjectors() < this.getTotalRequiredPlasmaFlow()){
            return "Unable to comply";
        }

        if(this.getTotalPlasmaFlowAllInjectors() < this.getTotalRequiredPlasmaFlow()){
            return this.getPlasmaFlowExtra();
        }

        return this.getPlasmaFlowNecesary();
    }

    getOperatingTimeInjectors = () => {
        if(this.getMaximumPlasmaFlowAllInjectors() < this.getTotalRequiredPlasmaFlow() ){
            return 0;
        }

        const timesOperatingInjectors = this.injectors.map((injector)=> injector.getTimeOperating());
        const timesDifferentToInfinite = timesOperatingInjectors.filter((timeOperating)=> timeOperating !== "Infinito");

        if(timesDifferentToInfinite.length === 0){
            return "Infinito";
        }

        let minTimeOperatingInjector = Math.min(...timesDifferentToInfinite);
        return minTimeOperatingInjector;
    }

    getMaximumPlasmaFlowAllInjectors = () => {
        let maximumPosible = 0;
        this.injectors.forEach((injector) => maximumPosible+= injector.maximumPosiblePlasmaFlow());
        return maximumPosible;
    }

    getPlasmaFlowNecesary = () => {
        return this.injectors.map((injector) => this.getTotalPlasmaFlowNecesaryPerInjector())
    }

    getPlasmaFlowExtra = () => {
        const EXTRA_PLASMA_FLOW = this.getExtraPlasmaFlowPerInjector();
        return this.injectors.map((injector) => {

            if(!injector.isCompletyDamage()){
                injector.usePlasmaFlowExtra(EXTRA_PLASMA_FLOW);
            }

            return injector.plasmaFlow();
        });
    }

    getTotalRequiredPlasmaFlow = () =>{
        const MAXIMUM_PLASMA_FLOW = 300;
        return (this.ligthSpeed * MAXIMUM_PLASMA_FLOW) / 100
    }

    getTotalPlasmaFlowNecesaryPerInjector = () => {
        return this.getTotalRequiredPlasmaFlow() / this.totalFunctionalInjectors();
    }

    getExtraPlasmaFlowPerInjector = () => {
        return (this.getTotalRequiredPlasmaFlow() - this.getTotalPlasmaFlowAllInjectors()) / this.totalFunctionalInjectors();
    }

    totalFunctionalInjectors = () => {
        return this.injectors.filter(injector => !injector.isCompletyDamage()).length;
    }

    getTotalPlasmaFlowAllInjectors = () => {
        let totalPlasmaFlow = 0;
        this.injectors.forEach((injector) => totalPlasmaFlow += injector.plasmaFlow());
        return totalPlasmaFlow;
    }
}

module.exports = WarpDriveManagment
const Injector = require("./Injector");

class WarpDriveManagment{
    constructor(injectorsDamage, ligthSpeed){
        this.ligthSpeed = ligthSpeed;
        this.injectors = this.initialiceInjectors(injectorsDamage);
    }

    initialiceInjectors = (injectorsDamage) =>{
        return injectorsDamage.map((damage)=> {
            let injector = new Injector()
            injector.setDamage(damage);
            return injector;
        });
    }

    getPlasmaFlowInjectors = () => {
    
        let maximumPosiblePlasmaFlowAllInjectors = this.getMaximumPosiblePlasmaFlowAllInjectors() //get the sum of the total plasma flow included the extra

        if(maximumPosiblePlasmaFlowAllInjectors < this.getTotalRequiredPlasmaFlow()){
            return "Unable to comply";
        }

        let totalPlasmaFlowAllInjectors = this.getTotalPlasmaFlowAllInjectors(); //270

        if(totalPlasmaFlowAllInjectors < this.getTotalRequiredPlasmaFlow()){
            return this.getPlasmaFlowExtra();
        }

        return this.getPlasmaFlowNecesary();
    }

    getOperatingTimeInjectors = () => {
        if(this.getMaximumPosiblePlasmaFlowAllInjectors() < this.getTotalRequiredPlasmaFlow() ){
            return 0; //0 minutes, unable to comply
        }

        let timesOperatingInjectors = this.injectors.map((injector)=> injector.getTimeOperating());
        let timesDifferentToInfinite = timesOperatingInjectors.filter((timeOperating)=> timeOperating !== "Infinito");

        if(timesDifferentToInfinite.length === 0){
            return "Infinito";
        }

        let minTimeOperatingInjector = Math.min(...timesDifferentToInfinite);
        return minTimeOperatingInjector;
    }

    getMaximumPosiblePlasmaFlowAllInjectors = () => {
        let maximumPosible = 0;
        this.injectors.forEach((injector) => maximumPosible+= injector.maximumPosiblePlasmaFlow());
        return maximumPosible;
    }

    getPlasmaFlowNecesary = () => {
        return this.injectors.map((injector) => this.getTotalPlasmaFlowNecesaryPerInjector())
    }

    getPlasmaFlowExtra = () => {
        let extraPlasmaFlowNecessaryPerInjector = this.getExtraPlasmaFlowNecessaryPerInjector();
        return this.injectors.map((injector) => {
            if(injector.isCompletyDamage()){
                return injector.plasmaFlow();
            }

            injector.usePlasmaFlowExtra(extraPlasmaFlowNecessaryPerInjector);
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

    getExtraPlasmaFlowNecessaryPerInjector = () => {
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
# WARP-DRIVE MANAGMENT SOFTWARE

#### Autor: Omar Steeven Calderon Hernandez

### Descripcion

Programa calcula el flujo de plasma adecuado para cada inyector de acuerdo al daño recibido en cada inyector y a la velocidad de luz deseada.

> ###  Estructura de proyecto

- src
    - WarpDriveManagment.js (clase principal)
    - Injector.js (clase que compone a la clase principal)

- test
    - warpDriveManagment.spec.js (pruebas realizadas al codigo)
- index.js (ejecucion del programa)


> ### Instalar proyecto y dependencias

```
    npm install
```

> ### Ejecutar programa
```
    node index.js
```

> ### Ejecutar los test del programa

```
    npm test
```

Los test estan dividos en dos subgrupos

**Test que prueban que la funcion que calcula los flujos de plasma devuelva los flujos correctos**
```
    describe("getPlasmaFlowInjectors", ()=>{
    })
```

**Test que prueba que la funcion que calcula el tiempo de operacion de los injectores devuelva el tiempo correcto**

```
    describe("getOperatingTimeInjectors", ()=>{
    })
```
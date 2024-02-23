/*
Emular una Planilla Salarial (30%):
a. Crea un programa en JavaScript que simule una Planilla Salarial.
b. Debe utilizar el método prompt para capturar la siguiente información:
● Número de Planilla ejemplo “FEB-01-2024”.
● Nombre de empresa.
● Lista de empleados (nombre y deducciones extraordinarias por ejemplo Préstamos del
Empleado, adelanto de sueldo, etc).
● Tome en cuenta que las deducciones de ley son: IHSS 3.5%, INFOP 1.5%
c. Almacena la información en un objeto llamado planilla.
d. Permite ingresar empleados hasta que el usuario decida dejar de ingresar empleados.
e. Calcula y muestra el total de la planilla.
f. Muestra toda la información de la planilla en la consola.
Ejemplo: El programa debería mostrar:
*/

let op;
let planilla= {}
const numeroPlanilla = prompt('Ingrese el Numero de Plantilla');
const nombreEmpresa = prompt ('Ingrese el Nombre de la Empresa');
let datos =  []
do{
     planilla = {
            nombre: prompt('Ingrese el nombre'),
            sueldo: parseFloat(prompt('Ingrese el sueldo base')),
            adelanto: parseFloat(prompt('Ingrese el adelanto')),
            prestamo: parseFloat(prompt('Ingrese el prestamo')),
            
    };

    planilla.ihss = planilla.sueldo*0.035;
    planilla.infop = planilla.sueldo*0.015;

    op = parseInt(prompt('Desea Continuar'));
    datos.push(planilla)
} while (op === 1);



console.log(`${numeroPlanilla} \n ${nombreEmpresa}`);
console.log(`Nombre\t Sueldo Base\t IHH\t INFOP\t Adelanto Saldo \t Prestamo`);
for (let j = 0; j < datos.length; j++) {
    
    let {nombre} = planilla
    let {sueldo} = planilla
    let {adelanto} = planilla
    let {prestamo} = planilla
    let {ihss} = planilla
    let {infop} = planilla
    console.log(`${nombre}\t\t ${sueldo} \t${adelanto}\t ${prestamo}\t ${ihss}\t ${infop}`);
}







console.log(datos);








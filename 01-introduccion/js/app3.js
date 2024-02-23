/*
3. Resolver una Ecuación Cuadrática (15%):
Crea un programa en JavaScript que resuelva una ecuación cuadrática de la forma ax2 + bx + c = 0.
a. Utiliza el método prompt para solicitar al usuario que ingrese los valores de a, b y c.
b. Calcula las soluciones de la ecuación cuadrática utilizando la fórmula cuadrática: */

let a = parseInt (prompt('Ingrese el valor de a'));
let b = parseInt (prompt('Ingrese el valor de b'));
let c = parseInt (prompt('Ingrese el valor de c'));

comprobacion(a,b,c);
let num = Math.sqrt(2)
console.log(num);


function comprobacion (a,b,c) {
    
    
    if (Math.pow(b,2)-(4*a*c)< 0) {
        console.log('El valor no pertenece a los numeros reales');
    }else{
        realizaOperacion(a,b,c);
    }
    
    
}

function realizaOperacion (a,b,c) {
    let x1 = ((-b + (Math.sqrt(Math.pow(b,2)-(4*a*c))))/2*a);
    
    let x2 = ((-b - (Math.sqrt(Math.pow(b,2)-(4*a*c))))/2*a);
    console.log(`Las soluciones son: x1= ${x1.toFixed(2)}, x2= ${x2.toFixed(2)}`);
}



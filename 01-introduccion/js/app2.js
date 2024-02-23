let op;
let datos =  []
let listaAlumnos= {}


do{
     listaAlumnos = {
            nombre: prompt('Ingrese el nombre'),
            edad: parseFloat(prompt('Ingrese la edad')),
            calificacion: parseFloat(prompt('Ingrese la Calificacion')),
            
    };

    


    
} while (op === 1);
let {nota} = listaAlumnos
if (nota >= 65){
    listaAlumnos.aprobado = 'Aprobado'
}else {
    listaAlumnos.aprobado = 'Reprobado'
}


console.log(`Lista de Alumnos`);
for (let j = 0; j < datos.length; j++) {
    
    let {nombre} = listaAlumnos
    let {edad} = listaAlumnos
    let {calificacion} = listaAlumnos
    let {aprobado} = listaAlumnos
   
    console.log(`${nombre}\t\t ${edad} \t${calificacion}\t ${aprobado}`);
}
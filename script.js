/* const notas = [7, 5, 10]
const notas2 = [5, 8, 7]
const calcularPromedio = (notasAPromediar) => { // Cómo se define una función
    let acumulador = 0
    for(let i = 0; i < notasAPromediar.length; i = i + 1){
        acumulador = acumulador + notasAPromediar[i]
    }
    console.log("Su promedio es de: " + (acumulador/notasAPromediar.length))
}
calcularPromedio(notas)
calcularPromedio(notas2)
*/

//console.log(prompt())

/* let consulta = prompt()

if(consulta == null){
    console.log("El usuario canceló")
}
else if(consulta == ""){
    console.log("Tocó aceptar, pero no escribió nada")
}
else if(!isNaN(consulta)){
    console.log("Es un número")
}else{
    console.log("Es una palabra")
} */

// isNaN (3) --> falso (not a number) / Forma de corroborar cuando algo sea un número


//EJERCICIO 6

// ESTO NO CONVIENE: const punto6 =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
/* const ej6 = () =>{
    for(let i = 1; i <= 10; i = i + 1){
        if(i != 5){
            console.log(i)
        }
    }
}
console.log(ej6()) */

// EJERCICIO NÚMEROS PARES
/* for(let i = 1; i <= 10; i = i + 1){
    if(i % 2 == 0){
        console.log(i + " es par")
    }
} */

/* OTRA FORMA DE HACERLO:

for(let i = 0; i <= 10; i = i + 2){
    console.log(i)
} */

// EJERCICIO 16
/*
let acumulador = 0
for(let i = 1; i <= 5; i = i + 1){
    acumulador = acumulador + Number(prompt("Ingrese una altura"))
}
console.log("El resultado del promedio de las 5 alturas es: " + (acumulador/5))
*/

//EJERCICIO 29

/* const puedeVerPelicula = (edad, tieneAutorizacion) =>{
    return edad >= 15 || tieneAutorizacion
}
puedeVerPelicula(12, false)
puedeVerPelicula(12, true)
puedeVerPelicula(16, false)
puedeVerPelicula(18, true)
*/

// Otro ejercicio:

/* let estaSoleado = true
let tengoPlata = true */

//Voy al parque si esta soleado o tengo plata

/* if(estaSoleado || tengoPlata){
    console.log("voy al parque")
} */

//Voy al parque si está soleado Y tengo plata

/* if(estaSoleado && tengoPlata){
    console.log("voy al parque")
} */

//Lo anterior son CONDICIONES COMPUESTAS

//TRUCOS

//let contador = 0
//contador = contador + 1
/* contador++
contador++
contador++ */

/* i = i + 1 --> Abreviar como:
i++ */

//let contador = 20
//una forma: contador = contador + 20
//forma más práctica: contador += 20

//OTRA FORMA DE HACER UN BUCLE for

const nombres = ["maria", "pepe", "lopez"]

/* for(let i = 0; i < nombres.length; i++){
    console.log(nombres[i])
} --> FORMA PRIMITIVA DE RECORRER ARRAY */

//FORMA MÁS NUEVA: for... of PARA RECORRER ARRAY
for(let nombre of nombres){
    console.log(nombre)
}
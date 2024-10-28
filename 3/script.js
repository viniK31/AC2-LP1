let numeros = [1.2, 3.7, 4.5, 6.1, 8.9];
let numerosCertos = []

numeros.forEach((element) => {
    numerosCertos.push(Math.floor(element))
}  )

console.log(numerosCertos)
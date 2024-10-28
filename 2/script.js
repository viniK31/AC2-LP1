let numeros = [2, 5, 8, 13, 16, 21];
let NovosNumeros =[]

numeros.forEach((element) => {
    if(element % 2 === 0){
        NovosNumeros.push(element)
    }
    else{
        let novoNumero = element * (Math.floor(Math.random()*10)+1)
        NovosNumeros.push(novoNumero)
    }
})
console.log(NovosNumeros)

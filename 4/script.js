function contar(){
    let nome = document.getElementById('InputNome').value
    let novo = 0
    let feoru = nome.split(' ')

    feoru.forEach((element) => {
        novo = novo + element.length
    })

    console.log(novo)
}
//29

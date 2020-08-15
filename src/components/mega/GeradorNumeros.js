let sorteados = []

function verificaSorteados(num){
    if(sorteados.length > 0){
        for(let i=0; i<sorteados.length;i++){
            if(num != sorteados[i]){
                sorteados.push(num)
                break
            } else{
                num = Math.floor(Math.random() * 60) + 1
                i = 0
            }
        }
    } else {
        sorteados.push(num)
    }
}

function gerarNumeros(qtd) {
    let num

    for (let i = 0; i < qtd; i++) {
        num = Math.floor(Math.random() * 60) + 1
        verificaSorteados(num)
    }
    return sorteados
}

gerarNumeros(6)
console.log(sorteados)
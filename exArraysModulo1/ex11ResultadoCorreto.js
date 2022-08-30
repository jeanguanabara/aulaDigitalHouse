// Seu código vem aqui

function transformaParaMaiusculo(palavras){
    let maiusculo = []
    for (let i=0;i<palavras.length;i++){
        maiusculo.push(palavras[i].toUpperCase())
    }
    return maiusculo
}
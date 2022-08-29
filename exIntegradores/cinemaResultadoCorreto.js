function calculaGostos(notas){
    
    let primeiro = 0
    let segundo= 0
    let terceiro = 0
    for( i=0; i<notas.length; i++){
        if (notas[i] <= 1){
            primeiro++
        }else if (notas[i] >=2 && notas[i] <= 3){
            segundo++
        }else if (notas[i] >=4 && notas[i] <=5) {
            terceiro++
        }
    }
    let resultado = [primeiro, segundo, terceiro]
    return resultado
}
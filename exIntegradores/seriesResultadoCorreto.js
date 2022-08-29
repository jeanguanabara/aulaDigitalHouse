function series(prefixo, array){
    let resultado = []
    for (i = 0; i < array.length; i++) {
        resultado.push(prefixo + " " + array[i])
    }//fim for 
    return resultado
   
}//fim function
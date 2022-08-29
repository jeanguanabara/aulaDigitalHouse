function somatoriaBaixoValor (array){
    let resultado = 0
    for (let i =0;i<=array.length;i++){
        if (array[i]<=1000 && array[i]>0){
            resultado += array[i]
        }//fim if
    }//fim for
    return resultado
}//fim function


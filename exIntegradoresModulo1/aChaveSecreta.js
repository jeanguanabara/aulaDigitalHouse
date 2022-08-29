function aChaveSecreta(array){
    let resultado = ""
    for (let i = array.length-1;i>=0;i--){
        if (array[i] != "*"){
            resultado += array[i]
        }//fim if
    }//fim for
    return resultado

}//fim function

console.log(aChaveSecreta( ["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "e", "d", " ", "e", "*", "v", "a", "h", "C"] ) )
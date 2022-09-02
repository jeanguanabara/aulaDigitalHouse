function lugaresDisponiveis(conj,lugar){
    if (conj.indexOf(lugar) != -1){
        return "Parabéns, o assento número " + lugar + " está disponível."
    }//fim if
    else{
        return "Desculpe, o assento número " + lugar + " está ocupado, mas ainda há " + conj.length + " assentos disponíveis."
    }//fim else
}//fim function


console.log(lugaresDisponiveis([3, 15, 18, 25], 78))
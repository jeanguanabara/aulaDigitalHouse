
function agregandoSabor(ingredientesAtuais,novoItem){
    if (ingredientesAtuais.indexOf(novoItem)== -1){
       ingredientesAtuais.push(novoItem)
       return ingredientesAtuais
    }
}
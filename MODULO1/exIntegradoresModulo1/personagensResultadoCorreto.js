function filme(personagens, filmes, lancamentos, id){
    if (((id-1)<=personagens.length) && ((id-1)<=filmes.length) && ((id-1)<=lancamentos.length)){
        return personagens[id-1] + " é um personagem do filme " + filmes[id-1] + " que estreou no cinema em " + lancamentos[id-1] + "."
    }else{
        return "Essa não é uma opção válida."
    }

    }



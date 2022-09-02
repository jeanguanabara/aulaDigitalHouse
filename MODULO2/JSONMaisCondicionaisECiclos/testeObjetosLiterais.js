let meuPais = {
    nome: "Brasil",
    populacao: 202768562,
    capital: "Brasília",
    nacionalidade: function(){
        /* return "Sou do " + this.nome */
        return "Sou do " + this.nome
    }
}

/* console.log(meuPais.capital + " " + meuPais.populacao + " " + meuPais.nome + " ") */

console.log(meuPais.nacionalidade())




let carro = {
    marca: "Fiat",
    modelo: "Uno"
}

function Carro(valorMarca, valorModelo){
    this.marca = valorMarca
    this.modelo = valorModelo
}

console.log(carro)

console.log(new Carro("Renault","Clio"))

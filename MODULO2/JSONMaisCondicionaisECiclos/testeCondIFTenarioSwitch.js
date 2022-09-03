let dia = "Sexta"
let resultado = dia=="Domingo" ? "Hoje é domingo":"Hoje não é domingo"

console.log(resultado)


switch (dia){
    case "Segunda":
        console.log("Hoje é segunda")
        break
    case "Terça":
        console.log("Hoje é terça")
        break
    case "Domingo":
        console.log("Hoje é domingo")
        break
    default: 
        console.log("Nem sei que dia hoje")
}

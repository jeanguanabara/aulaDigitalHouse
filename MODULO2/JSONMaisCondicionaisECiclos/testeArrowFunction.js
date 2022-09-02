const somar = numero => console.log("recebi o numero " + numero)
somar(10)


const somar1 = (numero1,numero2) => console.log("recebi o numero " + numero1 + " e " + numero2)
somar1(10,20)

const somar2 = (numero1,numero2) => {
console.log("recebi o numero " + numero1 + " e " + numero2)
return numero1 + numero2
}
console.log(somar2(30,40))
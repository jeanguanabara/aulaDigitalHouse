function moverItem(arrayA,arrayB){
    let temp = arrayA[arrayA.length - 1]
    arrayB.push(temp)
    arrayA.pop()
}
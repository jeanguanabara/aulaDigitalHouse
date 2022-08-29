<<<<<<< HEAD
function buscarDivisivelPor(array, num){
  for (let i = 0; i < array.length; i++) {
    if ((array[i]%num == 0) && (array[i] != 0)){
      return array[i];  
    }//fim if
    
        
    

  }//fim for
  return "Nenhum número válido encontrado!"
}

console.log(buscarDivisivelPor([0, 9, 4, 7, 128, 42, -1, 301, -5],2))

=======
function buscarDivisivelPor(array, num){
  for (let i = 0; i < array.length; i++) {
    if ((array[i]%num == 0) && (array[i] != 0)){
      return array[i];  
    }//fim if
    
        
    

  }//fim for
  return "Nenhum número válido encontrado!"
}

console.log(buscarDivisivelPor([0, 9, 4, 7, 128, 42, -1, 301, -5],2))

>>>>>>> d20391878a02417de50d52f88a1c9cca1d15c51c

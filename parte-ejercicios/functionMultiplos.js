const array = [1, 8, 7, 49, 23, 21, 12, 19, 5, 73, 63, 9, 14, 8274, 5698] 


//Segundo argumento es el número por el que queremos dividir
function multiplo (arr, mult) {

  //Con el método filter, filtramos el array con la condición que le digamos y devolvemos un nuevo array
  const resultado = arr.filter(elm => (elm % mult) === 0)
  console.log(resultado)
}

multiplo(array, 7)
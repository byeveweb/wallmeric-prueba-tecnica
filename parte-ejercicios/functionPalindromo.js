const string1 = 'Eva, ya hay ave';

function palindromo (str) {

  //1º Pasamos a minúsculas 
  //2º Eliminamos los espacios en blanco
  //3º Creamos un array con el string
  let strRight = str.toLowerCase().replace(/ /g, "").split("")

  //4º Creamos una copia del arreglo
  //5º Le damos la vuelta
    let strReverse = [...strRight].reverse()
    
    console.log(`arrayR de ${strRight}`)
    console.log(`arrayRe de ${strReverse}`)

  //6º Recorremos con un for in o for(Loop)
  for(i in strRight) {

    //7º Comprobamos que coinciden las letras, en caso de que si 
    if(strRight[i] === strReverse[i]) {
      return true
    }
    return false
  }

}

console.log(palindromo(string1))
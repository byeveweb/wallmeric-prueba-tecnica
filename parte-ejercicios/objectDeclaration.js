//Según la comparativa: Obj2 es distinto de obj y obj3

const obj = {
    id: "AB-001",
    value: 1
}

const obj2 = {
    id: "AB-001",
    value: 1
}

const obj3 = obj

//Compraración por referencia (al espacio de memoria)
obj === obj3 ? console.log('si son iguales') : console.log('no, son iguales')


console.log(obj)
console.log(obj2)
console.log(obj3)


obj.value = 3


console.log(obj.value)
console.log(obj2.value)
console.log(obj3.value)




// Comparando si se pasa aún string
function compareObjects(obj1, obj2) {
	console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
}

compareObjects(obj, obj2)


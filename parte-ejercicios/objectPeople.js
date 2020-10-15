 const persona = {
            name: 'john',
            surname: 'doe',
            age: 30,
            country: "Spain",
            employed: true,
            dni: "000000A"
        }


function retornaNuevoObjeto (obj) {
        //Retornamos un objeto directamente
        return nuevoObj = {
          name : obj.name,
          age : obj.age
        }
    
}
//Con destructuring
function retornaNombreEdad(obj) {
            const { surname, country, employed, dni, ...nuevoObj } = obj; // Esta forma te va a retornar todo lo que no este aplicado destructuring en ese nuevoObj 
            return nuevoObj;
        }

function todasLasPropiedadesExceptoEmployedDni(obj) {
            const { employed, dni, ...nuevoObj } = obj; // Esta forma te va a retornar todo lo que no este aplicado destructuring en ese nuevoObj igual que el anterior
            return nuevoObj;
}
        
const nombreEdad = retornaNombreEdad(persona);
const todo = todasLasPropiedadesExceptoEmployedDni(persona);
const nuevoObjeto = retornaNuevoObjeto(persona)

console.log(nuevoObjeto)
console.log(nombreEdad);
console.log(todo);



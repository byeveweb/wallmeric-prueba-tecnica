
const getTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const result = await response.json()
    console.log(result)
}
    
getTodos();



// Crea una función que elimine el primer y último 
// caracter de un string recibido por parámetros.

function removeFistLast(text = '') {
    let result = ''
    let arrayLetters = text.split('')
    arrayLetters.pop()
    arrayLetters.shift()
    result = arrayLetters.join('')
    return result
}


function removeFistLast2(text = '') {
    let result = ''
    result = text.slice(1, -1)
    return result
}

console.log(removeFistLast2('Hola amigos'))


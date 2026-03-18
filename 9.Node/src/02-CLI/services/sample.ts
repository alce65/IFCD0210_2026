const obj = {
    id: 1,
    name: 'Pepe'
}
console.log(obj)
console.log(obj.id)
console.log(obj.name)

const content = JSON.stringify(obj)
console.log(content)
const contentHandMake = '{"id": 1, "name": "Pepe"}'
const obj2 = JSON.parse(contentHandMake)
console.log(obj2)

Object.assign(obj, {age: 22, name: 'Jose'})
console.log(obj)

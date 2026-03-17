import { userInfo } from 'node:os'

const user = process.argv[2] ?? 'amigo'
const nodeEnv = process.env.NODE_ENV ?? 'dev'
const API_KEY = process.env.API_KEY ?? 'API_KEY not included'

console.log(`Hola ${user}, saludos de ${userInfo().username}`)
console.log(nodeEnv)
console.log(API_KEY)




const x = 'Hola';
console.log(x);

console.log(globalThis.crypto.randomUUID());
console.log(global.crypto.randomUUID());
console.log(crypto.randomUUID());
console.log(global);
console.log(process.argv);
console.log(process.pid);

const mode = process.env.NODE_ENV?.toLowerCase().trim();
console.log(`Modo: ${mode}`);
const connect = (db_Uri: string) => {
    console.log(`Conectando a la base de datos en ${db_Uri}`);
};

// eslint-disable-next-line no-useless-assignment
let db_Uri = '';
if (mode === 'dev') {
    console.log('Estamos en desarrollo');
    const port = process.env.DB_PORT_DEV;
    db_Uri = `http://empresa.com:${port}`;
    console.log(process.env.DB_PORT_DEV);
    console.log(process.env.DB_PASSWORD_DEV);
} else {
    console.log('Estamos en producción');
    const port = process.env.DB_PORT_PROD;
    db_Uri = `http://empresa.com:${port}`;
    console.log(process.env.DB_PORT_PROD);
    console.log(process.env.DB_PASSWORD_PROD);
}
connect(db_Uri);

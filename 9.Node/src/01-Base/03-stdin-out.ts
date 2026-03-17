// 2 canales de comunicación con process
// stdout
// stderr
// stdin

// console.log('Hello!');
process.stdout.write('Hello!\n');
// console.error('Error!');
process.stderr.write('Error!\n');

//

const handleInput = (data: string | Buffer<ArrayBuffer>) => {
    const name = data.toString().trim();
    process.stdout.write(`Hello, ${name}!\n`);

    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        console.log(element);
    }

    process.exit(0);
};

const array = [1, 2, 3, 4, 5, 6];

process.stdout.write('Dinos tu nombre: ');
process.stdin.on('data', handleInput);
console.log('Fin del programa');

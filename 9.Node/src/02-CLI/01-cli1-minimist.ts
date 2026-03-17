import minimist from 'minimist';

const args = minimist(process.argv.slice(2), {
    boolean: ['help', 'version'],
    string: ['name'],
    alias: {
        h: 'help',
        v: 'version',
    },
});

if (args.help) {
    console.log('Usage: node cli.ts [OPTIONS] [COMMAND]');
    process.exit(0);
}
if (args.version) {
    console.log('Version 1');
    process.exit(0);
}

console.log(args)
// if (args._.includes('name')) {
//     console.log('Hola');
//     process.exit(0);
// }

if (args._) {
    console.log('Hola ' + args._.join(' '));
    process.exit(0);
}

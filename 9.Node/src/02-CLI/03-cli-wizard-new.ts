import * as iq from '@inquirer/prompts';

const createAnswers = async () => {
    const answers = {
        name: await iq.input({ message: '¿Cuál es tu nombre?' }),
        age: await iq.number({ message: '¿Qué edad tienes?' }),
        password: await iq.password({ message: '¿Cuál es tu password?' }),
        color: await iq.rawlist({
            message: '¿Cuál es tu color favorito?',
            choices: ['Rojo', 'Azul', 'Verde'],
            default: 'Rojo',
        }),
        courses: await iq.checkbox({
            message: '¿Qué cursos te interesan?',
            choices: ['Angular', 'React', 'Astro.js', 'Vue.js', 'Svelte'],
        }),
        confirm: await iq.confirm({
            message: '¿Estas seguro?',
            default: false,
        }),
    };
    return answers;
};

while (true) {
    const a = await createAnswers();
    if (a.confirm) {
        console.log(a);
        break;
    }
    console.clear();
    const more = await iq.confirm({
        message: '¿Quieres volver a añadir los datos?',
        default: false,
    });
    if (!more) {
        process.exit(0);
    }
}

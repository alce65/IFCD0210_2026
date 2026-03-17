import inquirer from 'inquirer';
import { UnnamedDistinctQuestion } from 'inquirer/dist/commonjs/types';

type Question = UnnamedDistinctQuestion & {
    name: string;
};

const questions: Question[] = [
    { type: 'input', name: 'name', message: '¿Cuál es tu nombre?' },
    { type: 'number', name: 'age', message: '¿Qué edad tienes?' },
    { type: 'password', name: 'password', message: '¿Cuál es tu password?' },
    {
        type: 'list',
        name: 'color',
        message: '¿Cuál es tu color favorito?',
        choices: ['Rojo', 'Azul', 'Verde'],
    },
    {
        type: 'checkbox',
        name: 'courses',
        message: '¿Qué cursos te interesan?',
        choices: ['Angular', 'React', 'Astro.js', 'Vue.js', 'Svelte'],
    },
    {
        type: 'confirm',
        name: 'confirm',
        message: '¿Estas seguro?',
        default: false,
    },
];

inquirer.prompt(questions).then((answers) => {
    console.log(answers);
});

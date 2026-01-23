function makeGreeting(language) {
    let greeting;

    // if (language === 'En') {}
    // else if (language === 'Es'){}
    // else if (language === 'Fr'){}
    // else () {}

    switch (language.toUpperCase()) {
        case 'EN':
            greeting = 'Hello my friend';
            break;
        case 'ES':
            greeting = 'Hola amigo';
            break;
        case 'FR':
            greeting = 'Salut mon ami';
            break;
        case 'DE':
            greeting = 'Hallo Freund';
            break;
        default:
            greeting = 'Hi';
            break;
    }
    return greeting;
}

const language = 'De';

console.log(makeGreeting(language));

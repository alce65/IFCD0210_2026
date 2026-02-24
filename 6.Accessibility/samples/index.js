{
    const options = document.querySelectorAll('.bad-buttons .btn');
    const output = document.querySelector('.bad-buttons output');
    options.forEach((opt) => {
        opt.addEventListener('click', (evt) => {
            output.innerHTML = `${evt.target.innerHTML} clicked !!!`;
        });
    });

    function clearOutput() {
        const output = document.querySelectorAll('output');
        output.forEach((elem) => (elem.innerHTML = ''));
    }
}
{
    const options = document.querySelectorAll('.good-buttons .btn');
    const output = document.querySelector('.good-buttons output');
    options.forEach((opt) => {
        opt.addEventListener('click', (evt) => {
            output.innerHTML = `${evt.target.innerHTML} clicked !!!`;
        });
    });

    function clearOutput() {
        const output = document.querySelectorAll('output');
        output.forEach((elem) => (elem.innerHTML = ''));
    }
}
{
    const handlerTrigger = (event) => {
        console.dir(event.target);
        console.dir(event.currentTarget);

        let trigger = event.target;
        if (trigger.tagName === 'SPAN') {
            trigger = event.target.parentElement;
        }

        // const summary = trigger.parentElement;
        // const panel = summary.nextElementSibling;
        const panel = trigger.closest('.details').querySelector('.acc-panel');

        const status = trigger.getAttribute('aria-expanded');
        if (status === 'false') {
            trigger.setAttribute('aria-expanded', 'true');
            panel.removeAttribute('hidden');
        } else {
            trigger.setAttribute('aria-expanded', 'false');
            panel.setAttribute('hidden', '');
        }
    };

    const triggers = document.querySelectorAll('button.acc-trigger');
    // const trigger = document.querySelector('#accordion1id');

    triggers.forEach((trigger) =>
        trigger.addEventListener('click', handlerTrigger)
    );
}

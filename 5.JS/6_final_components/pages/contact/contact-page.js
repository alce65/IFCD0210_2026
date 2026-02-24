const handleContact = (event) => {
    event.preventDefault();
    const { target } = event;
    const { elements } = target;
    console.log("Target");
    console.dir(elements);

    console.log("Enviando...");
    // let userName = elements[0].value
    // console.log(userName)
    // userName = elements['user-name'].value
    // console.log(userName)
    // userName = elements.namedItem('user-name').value
    // console.log(userName)
    // userName = elements.item(0).value
    // console.log(userName)

    const contactData = {
        userName: "",
        phone: "",
        age: 0,
        password: "",
        dob: "",
        contactTime: "",
        file: "",
        email: "",
        message: "",
        country: "",
        subscribeNewsletter: false,
        subscribeUpdates: false,
        contactMethod: "",
    };

    for (const key in contactData) {
        contactData[key] =
            elements.namedItem(key).type !== "checkbox"
                ? elements.namedItem(key).value
                : elements.namedItem(key).checked;

        if (elements.namedItem(key).type === "date") {
            contactData[key] = new Date(contactData[key]);
        }
        if (elements.namedItem(key).type === "file") {
            contactData[key] = contactData[key].split("\\").pop();
        }
    }

    console.log(contactData);

    const formData = new FormData(target);
    console.log(formData);

    console.log("Enviando...");

    //  fetch('url', {
    //     method: POST,
    //     body: formData

    //  })
};

export const contactPage = () => {
    console.log("Loaded Contacts");

    const setElement = () => {
        const template =
            /*html*/
            `
            <section id="contact" aria-label="Contacto">
                <h2>Contacto</h2>
                <p>¿Quieres contactar conmigo?</p>

                <form>
                    <label class="label">
                    <span>Nombre:</span>
                    <input type="text" name="userName" placeholder="Dime tu nombre" autocomplete="name">
                    </label>
                    <label class="label">
                    Teléfono:
                    <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890">
                    </label>
                    <label class="label">
                    Edad:
                    <input type="number" name="age" min="0" max="120">
                    </label>
                    <label class="label">
                    Contraseña:
                    <input type="password" id="password" minlength="4" maxlength="8" name="password"
                        autocomplete="current-password">
                    </label>
                    <label class="label">
                    Fecha de nacimiento:
                    <input type="date" id="dob" name="dob">
                    </label>
                    <label class="label">
                    Hora de contacto:
                    <input type="time" id="contact-time" name="contactTime">
                    </label>
                    <label class="label">
                    Avatar
                    <input type="file" name="file" id="file" accept=".pdf,.doc,.docx,image/*">
                    </label>
                    <div class="label">
                    <label for="email">Correo electrónico:</label>
                    <input type="email" id="email" name="email">
                    </div>
                    <label class="label">
                    <span>Mensaje:</span>
                    <textarea id="message" name="message"></textarea>
                    </label>
                    <fieldset>
                    <legend>¿Cómo prefieres que te contacte?</legend>
                    <label>
                        <input type="radio" name="contactMethod" value="email">
                        Correo electrónico
                    </label>
                    <label>
                        <input type="radio" name="contactMethod" value="phone">
                        Teléfono
                    </label>
                    </fieldset>
                    <fieldset>
                    <legend>Suscribirse a:</legend>
                    <label>
                        <input type="checkbox" name="subscribeNewsletter">
                        Newsletter
                    </label>
                    <label>
                        <input type="checkbox" name="subscribeUpdates">
                        Actualizaciones de productos
                    </label>
                    </fieldset>
                    <label class="label">País:
                    <select name="country">
                        <option value="">Selecciona un país</option>
                        <option value="es">España</option>
                        <option value="fr">Francia</option>
                        <option value="de">Alemania</option>
                        <option value="other">Otros</option>
                    </select>
                    </label>
                    <div class="button-wrapper">
                    <button type="submit">Enviar</button>
                    </div>
                </form>

            </section>
             `;

        const parentElement = document.createElement("parent");
        parentElement.innerHTML = template;
        const element = parentElement.firstElementChild;

        element.querySelector("form").addEventListener("submit", handleContact);
        return element;
    };

    document.querySelector("main").innerHTML = "";
    document.querySelector("main").appendChild(setElement());
    document.title = 'Contacto | ' + BASE_TITLE
};

export const homePage = () => {
    console.log("Loaded Home");
    const setElement = () => {
        const template =
            /*html*/
            `
            <section class="home" id="home" aria-label="Home">
            <hgroup>
                <h1>JS en la Web</h1>
                <p>Módulo 1 - Unidad 2</p>
            </hgroup>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quos repellendus commodi laboriosam quidem nihil
                perspiciatis, assumenda ratione mollitia, architecto iure sint provident quo cupiditate modi nesciunt. Saepe,
                sequi. Quisquam.</p>
            <p>Minus dolorem nesciunt provident dignissimos doloribus consectetur perspiciatis asperiores non amet natus at
                laudantium expedita molestias voluptas similique, sint ducimus odio dolore? Rerum dolor placeat fuga nulla.
                Rem,
                harum dolore.</p>
            <p>Id distinctio, fugit sit velit sapiente culpa laudantium corporis in repellat, officiis recusandae! Quae
                nihil,
                hic quod eaque similique harum? Suscipit incidunt recusandae maiores. Error reprehenderit culpa excepturi
                ducimus porro?</p>
            <p>Reiciendis iure necessitatibus neque et sed? Explicabo accusantium praesentium vel assumenda odio quae
                quisquam
                sequi, corrupti aliquam quia, a natus modi ex autem soluta distinctio. Dolorum odio cum praesentium numquam!
            </p>
            <p>Ducimus labore magni saepe ullam repudiandae. Facilis officiis aliquid harum aspernatur. Dicta labore error
                placeat obcaecati sapiente aspernatur earum sunt nemo vitae velit, ipsam alias beatae delectus pariatur
                reiciendis sint?</p>
            <p>Voluptatem iusto suscipit sunt quasi atque dolorum, quas veniam! Illum animi ipsum, beatae ad amet quibusdam
                repellat facere, consequatur, quod ipsa similique voluptatibus modi dignissimos aliquam sed? Esse, laborum a.
            </p>
            <p>Corrupti, asperiores minus! Repudiandae ipsam perferendis, labore sint, velit distinctio quidem optio quaerat
                quasi, quia rem? Nisi quam tempora natus quo. Autem odio quam culpa, officiis mollitia velit? Officia, porro.
            </p>
            <p>Dolore natus itaque quisquam, libero repellendus eius magni dolores illum beatae voluptatum aut cumque earum
                dolor ipsam dolorem excepturi facere repudiandae perspiciatis tempore reprehenderit at neque dignissimos
                doloremque! Voluptas, iste?</p>
            <p>Qui quaerat corporis quas saepe omnis similique, quibusdam doloribus dicta repellat ea obcaecati nisi hic
                ipsum
                aspernatur, rem vitae. Alias totam optio ut ipsum dicta unde rem aliquid quod voluptatibus.</p>
            <p>Quasi ut nam laboriosam quis ratione delectus dolore est laudantium repellendus fugiat, ab nemo numquam harum
                labore, sed iure molestiae ex sequi voluptatibus eaque neque consequatur temporibus optio? Illo, architecto?
            </p>
            </section>
            `;
        const parentElement = document.createElement("parent");
        parentElement.innerHTML = template;
        const element = parentElement.firstElementChild;
        return element;
    };

    document.querySelector("main").innerHTML = "";
    document.querySelector("main").appendChild(setElement());
    document.title = 'Inicio | ' + BASE_TITLE
};

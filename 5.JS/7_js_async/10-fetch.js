function getUsers() {
    const URL = 'https://dummyjson.com/users';

    return fetch(URL, {
        method: 'GET',
        headers: {},
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status + ' ' + response.statusText);
            }
        })
        .then((data) => {
            console.log(data.users.length);
            return data.users;
        });
}

getUsers()
    .then((users) => console.log(users))
    .catch((error) => console.log(error.message))
    .finally(() => {
        console.log('Terminando correctamente');
    });

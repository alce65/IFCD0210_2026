async function getUsers() {
    const URL = 'https://dummyjson.com/users';

    const response = await fetch(URL, {
        method: 'GET',
        headers: {},
    });

    console.log(response)
    let data = '';
    if (response.ok) {
        data = await response.json();
    } else {
        throw new Error(`${response.status} - ${response.statusText}`);
    }
    console.log(data.users.length);
    return data.users;
}

try {
    const users = await getUsers();
    console.log(users[0]);
} catch (error) {
    console.log(error.message);
}

console.log('Loaded films front-end');

const apiURL = 'http://localhost:3050/api/users';

const fetchUsers = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(apiURL, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const users = await response.json();
        console.log('Fetched users:', users);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
};

const login = async (email, password) => {
    try {
        const response = await fetch(`${apiURL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Login successful:', data);
        localStorage.setItem('token', data.token);
    } catch (error) {
        console.error('Error during login:', error);
    }
};

const logout = () => {
    localStorage.removeItem('token');
    console.log('Logged out, token removed from localStorage');
};

const readForm = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Form data:', data);
    await login(data.email, data.password);
};

const main = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', readForm);

    const fetchButton = document.querySelector('#fetchUsersBtn');
    fetchButton.addEventListener('click', fetchUsers);

    const logoutButton = document.querySelector('#logoutBtn');
    logoutButton.addEventListener('click', logout);
};

main();

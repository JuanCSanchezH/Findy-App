const URL_BASE = 'https://miniback-findy-app.onrender.com/';

const endpoints = {
    userByEmailAndPassword: (email, password) => `${URL_BASE}users?correo=${email}&&contrasena=${password}`,
    users: `${URL_BASE}users`,
    findUserByEmail: (email) => `${URL_BASE}users?correo=${email}`,
    posts: `${URL_BASE}post`,
    
};

export default endpoints;
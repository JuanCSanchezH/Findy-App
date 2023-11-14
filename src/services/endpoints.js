const URL_BASE = 'https://miniback-findy-app.onrender.com/';

const endpoints = {
    userByEmailAndPassword: (email, password) => `${URL_BASE}users?correo=${email}&&contrasena=${password}`,
    users: `${URL_BASE}users`,
    findUserByEmail: (email) => `${URL_BASE}users?correo=${email}`,
    userByPost:(id) => `${URL_BASE}users?id=${id}`,
    userById: (ID) => `${URL_BASE}users/${ID}`,
    postById: (ID) => `${URL_BASE}posts?id=${ID}`,
    addComment: (ID) => `${URL_BASE}users/${ID}/comentarios`,
    addOrRemoveLike: (ID) => `${URL_BASE}posts/${ID}`,
    posts: `${URL_BASE}posts`,
};

export default endpoints;

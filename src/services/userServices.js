import axios from "axios";
import endpoints from "./endpoints";

export const getUserByEmailAndPassword = async (email, password) => {
    try {
        const { data } = await axios.get(endpoints.userByEmailAndPassword(email, password));
        return data.length ? data[0] : null;

    } catch (error) {
        console.log(error);
        return null;
    }
}

export const getAllUsers = async () => {
    try {
        const { data } = await axios.get(endpoints.users);
        return data.length ? data : null;

    } catch (error) {
        console.log(error);
        return null;
    }
}

export const createAnUser = async (newUser) => {
    try {
        const response = await axios.get(endpoints.findUserByEmail(newUser.correo));
        if (response.data[0].length) return false;
        const { data, status } = await axios.post(endpoints.users, newUser);
        
        if (status < 200 && status >= 300) return null;
        return data;

    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function updateUser(user) {

    try {
        const response = await axios.get(endpoints.findUserByEmail(user.correo));
        if (response.data[0].length){
            const data = await axios.put(endpoints.userById(user.id), {
                ...user
            });
            return data;
        } else return false;
        
    } catch (error) {
        console.error(error);
        return null;
    }
}
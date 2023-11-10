import axios from "axios";
import endpoints from "./endpoints";

export const getPostById = async (id) => {
    try {
        const { data } = await axios.get(endpoints.postById(id));
        return data.length ? data[0] : null;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const createAPost = async (newPost) => {
    try {
        const { data, status } = await axios.post(endpoints.posts, newPost);
        if (status < 200 && status >= 300) return null;
        return data;

    } catch (error) {
        console.log(error);
        return null;
    }
}

export const updateLikeOrComment = async (postId, likeContent) => {
    try {
        const response = await axios.put(endpoints.addOrRemoveLike(postId), likeContent);
        return response;
    } catch (error) {
        console.log(error);
        return null;
    }
}
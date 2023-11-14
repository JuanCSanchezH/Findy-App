import axios from "axios";
import endpoints from "./endpoints";

export const getPosts= async () => {
    try {
        const { data } = await axios.get(endpoints.posts);
        return data.length ? data : null;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const getUserByPost= async (userId) => {
    try {
        const {data} = await axios.get(endpoints.userByPost(userId))
        return data.length ? data : null;
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
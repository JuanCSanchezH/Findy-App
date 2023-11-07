import axios from "axios";

import { ENDPOINTS } from "./endpoints";

const getPost =async (id ='') =>{
  try{
    const { data } = await axios.get(`${ENDPOINTS.posts}/${id}`);
    return data;
  }catch(error){
    console.error(error);
  }
}

export {getPost}
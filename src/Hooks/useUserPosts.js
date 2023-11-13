import { useState, useEffect } from 'react';
import { getPost } from '../services/postServices';

const useUserPosts = (userId) => {
  const [userData, setUserData] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState([]);
  
  useEffect(() => {

    getPost(userId).then((response)=>{
      setUserData(response);
      console.log(response);
    });
  }, [userId]);

  const filterCategory = (initialCategory) =>{
    const filterPost = userData?.posts.filter(post => post.tipo.toLowerCase()==initialCategory.toLowerCase());
    setFilteredPosts(filterPost);
  } 

  return {
    filteredPosts,
    userData,
    filterCategory,
  };
};

export default useUserPosts;
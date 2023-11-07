import { useState, useEffect } from 'react';
import getPost from '../services/postsServices';

// Hook personalizado para gestionar los posts y su filtrado
const useUserPosts = (initialCategory,id) => {
  const [userData, setUserData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Obtener los datos del usuario y sus posts
        const response = await getPost(id);
        setUserData(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, );

  // Filtrar los posts según la categoría seleccionada
  const filteredPosts = userData?.posts.filter(post => post.tipo.toLowerCase() === selectedCategory.toLowerCase());

  return {
    selectedCategory,
    setSelectedCategory,
    filteredPosts,
  };
};

export default useUserPosts;
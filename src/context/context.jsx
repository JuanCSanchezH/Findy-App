import React, { createContext, useContext, useState } from 'react';

const FeedContext = createContext();

export function useFeed() {
  return useContext(FeedContext);
}

export function FeedProvider({ children }) {
  const [posts, setPosts] = useState([
    { id: 1, image: 'url_imagen_1', likes: 0 },
    { id: 2, image: 'url_imagen_2', likes: 0 },
    // Agrega más publicaciones aquí
  ]);

  const handleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <FeedContext.Provider value={{ posts, handleLike }}>
      {children}
    </FeedContext.Provider>
  );
}

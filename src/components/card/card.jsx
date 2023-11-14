import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../routes/App';
import { updateLikeOrComment } from '../../services/postServices';
import { getAllUsers } from '../../services/userServices';
import './card.scss'
import { getUserByPost } from '../../services/postServices'

const Card = ({ posts = {} }) => {
    const [userByPost, setUserByPost] = useState({})
    const [user, setUser] = useState({});
    const [post, setPost] = useState({});
    // const [postLike, setPostLike] = useState({});
    const { userLogged } = useContext(AppContext);
    const [isLiked, setIsLiked] = useState(false);
    useEffect(()=> {
        (async () => {

            const response = await getUserByPost(posts.userId);
            setUserByPost(response)
            setPost(posts);
            const users = await getAllUsers();
            const foundUser = users.find(user => user.id === posts.userId);
            setUser(foundUser);
            setIsLiked(posts.likes.find(like => like.id === userLogged.userLogged.user.id));
    
        })();
    },[])

    const handleLike = async () => {
        const likedPost = { ...post };
    
        if (isLiked) {
          likedPost.likes = likedPost.likes.filter(like => like.id !== userLogged.userLogged.user.id);
        } else {
          likedPost.likes.push({ id: userLogged.userLogged.user.id });
        }
    
        await updateLikeOrComment(post.id, likedPost);
        setPost(likedPost)
        // setPostLike(likedPost)
        setIsLiked(!isLiked);
        setPost(prevPost => ({ ...prevPost, likes: likedPost.likes }));
      };

    return (
       <>
        <article className='card'>
             <span className='header-post'> 
                <button className='avatar-button'>
            <figure>
                <img src={userByPost[0]?.avatar} alt="" />
            </figure>
                    </button>
            <h1><b>{userByPost[0]?.nombre}</b></h1>
            </span>
            <figure className='img-posts'>
                <img src={posts?.archivo} alt={posts?.tipo} />
            </figure>
            <section className='reactions-icons'>
            <div className="reactions">
                <span>
                  <button className={`heart-btn ${isLiked ? 'active' : ''}`} onClick={handleLike}></button>
                  <p>{post?.likes?.length || 0}</p>
                </span>
                <span>
                  <button className='cloud-btn' onClick={handleLike}><img src="https://res.cloudinary.com/ddsed1j6u/image/upload/v1699304669/Vectorcloud_oabgpy.png"/></button>
                  <p>{posts?.comentarios?.length}</p>
                </span>
                <span>
                  <button className='airplane-btn'><img src="https://res.cloudinary.com/ddsed1j6u/image/upload/v1699304666/Vectorairplane_vhfb8j.png"/></button>
                  <p>25</p>
                </span>
              </div>
              <span>
                  <button className='guardar-post'>
                    <img src="https://res.cloudinary.com/dpc1vrbek/image/upload/v1699928580/Vector_4_vqfjt8.png" alt="" />
                  </button>
                </span>
                </section>
            <p id='description-container'><b>{userByPost[0]?.nombre}</b>{posts?.descripcion}</p>        
        </article>
        </>
    )
}

export default Card



  
  

    


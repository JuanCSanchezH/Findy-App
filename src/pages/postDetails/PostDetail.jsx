import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AppContext } from '../../routes/App';
import { getPostById, updateLikeOrComment } from '../../services/postServices';
import { getAllUsers } from '../../services/userServices';
import { useComentForm } from '../../hooks/useForm';
import Swal from 'sweetalert2';
import './PostDetails.scss'

const PostDetail = () => {

  const {id} = useParams();
  const [post, setPost] = useState({});
  const [user, setUser] = useState({});
  const { userLogged } = useContext(AppContext);
  const [isLiked, setIsLiked] = useState(false);
  // const {comment, setComment} = useState({});
  const {commentForm, handleChangeComentInput} = useComentForm();
  
  useEffect(()=>{

    (async () => {
      const foundPost = await getPostById(id);
      if(foundPost){

        setPost(foundPost);
        const users = await getAllUsers();
        const foundUser = users.find(user => user.id === foundPost.userId);
        setUser(foundUser);
        setIsLiked(foundPost.likes.find(like => like.id === userLogged.userLogged.user.id));
        
      }else return null;
    })();
  },[id])

  const handleLike = async () => {
    const likedPost = { ...post };

    if (isLiked) {
      likedPost.likes = likedPost.likes.filter(like => like.id !== userLogged.userLogged.user.id);
    } else {
      likedPost.likes.push({ id: userLogged.userLogged.user.id });
    }

    await updateLikeOrComment(post.id, likedPost);
    setPost(likedPost)
    setIsLiked(!isLiked);
  };


  // const handleCommentInput = (e) => {
  //   const {value} = e.target
  //   setComment({
  //     userId: userLogged.userLogged.user.id,
  //     texto: value
  //   })
  // }
  
  const sendComment = async(e) => {
    e.preventDefault();
    if (commentForm.texto) {
      const postNewComment = { ...post};
      postNewComment.comentarios.push(commentForm);
      console.log(postNewComment.comentarios);
      await updateLikeOrComment(post.id, postNewComment);
      setPost(postNewComment);
    } else {
      Swal.fire(
        'Oops!',
        'Al parecer no has escrito nada!',
        'error'
      )
    }
    document.getElementById('commentInput').value = '';
  }

  return (
    <>
      { user.avatar && post.archivo ? 
        (<div className="post-container">
          <section>
            <header className='post-container__hr'>
              <button><Link to='/feed'><img src="https://res.cloudinary.com/ddsed1j6u/image/upload/v1699288247/Vector_fajejk.png"/></Link></button>
              <button><img src="https://res.cloudinary.com/ddsed1j6u/image/upload/v1699288248/Group_22points_nlprco.png"/></button>
            </header>
            <figure className='post-container__fig'><img src={post.archivo} /></figure>
            <article className='post-container__indicators'>
              <div className="post-container__indicators__info">
                <figure><img src={user.avatar}/></figure>
                <p>{user.nombre}</p>
              </div>
              <div className="post-container__indicators__reactions">
                <span>
                  <button className={`heart-btn ${isLiked ? 'active' : ''}`} onClick={handleLike}></button>
                  <p>{post.likes.length}</p>
                </span>
                <span>
                  <button className='cloud-btn' onClick={handleLike}><img src="https://res.cloudinary.com/ddsed1j6u/image/upload/v1699304669/Vectorcloud_oabgpy.png"/></button>
                  <p>{post.comentarios.length}</p>
                </span>
                <span>
                  <button className='airplane-btn'><img src="https://res.cloudinary.com/ddsed1j6u/image/upload/v1699304666/Vectorairplane_vhfb8j.png"/></button>
                  <p>25</p>
                </span>
              </div>
            </article>
          </section>
          <p className='post-container__description'>{post.descripcion}</p>
          <footer className="post-container__footer">
            <figure><img src={userLogged.userLogged.user.avatar} /></figure>
            <form onSubmit={sendComment}>
              <div>
                <input id='commentInput' type="text" name='texto' onChange={handleChangeComentInput} placeholder='Write a comment as username...'/>
                <button type='submit'><img src="https://res.cloudinary.com/ddsed1j6u/image/upload/v1699331117/Vectorairplane_1_vjptuo.png"/></button>
              </div>
            </form>
          </footer>
        </div>)
      : <div>Cargando...</div> }
    </>
  )
}

export default PostDetail
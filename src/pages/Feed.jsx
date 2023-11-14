// import React from 'react'
// import { Link } from 'react-router-dom'

// const Feed = () => {
//   return (
//     <div>Feed</div>
   
//   )
// }

// export default Feed

import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../routes/App';
import Card from '../components/card/card';
import './Feed';
import { getPosts } from '../services/postServices';


const Home = () => {
  const { posts } = useContext(AppContext);
  const { postsDispatch } = posts;
  const { postsList} = posts.posts;

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    getPosts().then((response) => {
      postsDispatch({
        type: 'FILL',
        payload: response
      })
    })
  }, [])


  return (
    <main className='home'>
     <header className='header-container'>
      <img src="https://res.cloudinary.com/dpc1vrbek/image/upload/v1699754232/LOGOLOGO_3_qckln1.png" alt="" />
      <img className='heart' src="https://res.cloudinary.com/dpc1vrbek/image/upload/v1699755594/Vector_1_enuzcb.png" alt="" />
     <img className='message' src="https://res.cloudinary.com/dpc1vrbek/image/upload/v1699755594/Vector_2_dnymtk.png" alt="" />
     </header>
       <section className='stories-users'>
        <div>
        <img src="https://res.cloudinary.com/dpc1vrbek/image/upload/v1699919078/Ellipse_1_z5ozz2.png" alt="" />
        <img className='mas-icon' src="https://res.cloudinary.com/dpc1vrbek/image/upload/v1699919078/Vector_3_af9az0.png" alt="" />
        <h4>Your Story</h4>
        </div>
        <div>
          <img src="https://res.cloudinary.com/dpc1vrbek/image/upload/v1699921871/Group_2_1_so1el9.png" alt="" />
          <h4>Jennie Kim</h4>
        </div>
        <div>
          <img src="https://res.cloudinary.com/dpc1vrbek/image/upload/v1699921871/Group_3_e91iy3.png" alt="" />
          <h4>Roseanne Park</h4>
        </div>
        <div>
          <img src="https://res.cloudinary.com/dpc1vrbek/image/upload/v1699921871/Group_1_yvenqb.png" alt="" />
          <h4>kim Ji-soo</h4>
        </div>
        <div>
          <img src="https://res.cloudinary.com/dpc1vrbek/image/upload/v1699921871/Group_4_n9cm8e.png" alt="" />
          <h4>Lalisa Manoban</h4>
        </div>
       </section>
          <section className='home__cards'>
            {
              postsList.length ? (
                postsList.map(item => <Card key={item.id} posts={item} />)
              ) : <div>...Cargando</div>
            }
          </section>
        

    </main>
  )
}

export default Home
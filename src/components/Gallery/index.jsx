
import useUserPosts from '../../Hooks/useUserPost';




const Gallery = () => {
  const [selectedCategory, setSelectedCategory, filteredPosts] = useUserPosts(
    'Fotos',
    1
  );
  return (
    <section className="Gallery__container">
      <nav className="Gallery_navbar">
        <button
          onClick={() => setSelectedCategory('Foto')}
          className="Gallery_navbar--section"
        >
          Photos
        </button>
        <button
          onClick={() => setSelectedCategory('Video')}
          className="Gallery_navbar--section"
        >
          Videos
        </button>
        <button
          onClick={() => setSelectedCategory('Album')}
          className="Gallery_navbar--section"
        >
          Album
        </button>
        <button
          onClick={() => setSelectedCategory('Tag')}
          className="Gallery_navbar--section"
        >
          Tags
        </button>
      </nav>
      <div className="Gallery__container_cards">
        {filteredPosts ? (
          filteredPosts.map((post) => (
            <div key={post.postId}>
              {post.tipo === 'foto' && (
                <img src={post.archivo} alt={`Post ${post.postId}`} />
              )}
              {post.tipo === 'video' && (
                <div>
                  <p>Video:</p>
                  <iframe
                    title={`Post ${post.postId}`}
                    width="560"
                    height="315"
                    src={post.archivo}
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              {post.tipo === 'album' && (
                <div>
                  <p>Album:</p>
                  <iframe
                    title={`Post ${post.postId}`}
                    width="560"
                    height="315"
                    src={post.archivo}
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              {post.tipo === 'tag' && (
                <div>
                  <p>Tag:</p>
                  <iframe
                    title={`Post ${post.postId}`}
                    width="560"
                    height="315"
                    src={post.archivo}
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No se encontraron posts de esta categoría para este usuario.</p>
        )}
      </div>

      {/* {userData && (
        <div className="Gallery__container_cards">
          {userData.posts.map((post)=>(
          <img key={post.postId} src={post.archivo} alt={`Post ${post.postId}`} />
          ))}
          </div>
      )} */}
    </section>
  );
};
export default Gallery;


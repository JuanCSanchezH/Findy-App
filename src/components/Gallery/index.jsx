import useUserPosts from '../../hooks/useUserPosts';
import PropTypes from 'prop-types';
import './main.scss'

const Gallery = ({userId = 1}) => {
  const { filteredPosts, filterCategory } = useUserPosts(userId);

  const renderPostContent = (post) =>{
    switch (post.tipo){
      case 'foto':
        return <img src={post.archivo} alt={`Post ${post.postId}`} />
      case 'video':
      case 'album':
      case 'tag':
        return (
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
        )
      default:
        return null;
    }
  }
  return (
    <section className="Gallery__container">
      <nav className="Gallery_navbar">
        <button
          onClick={() => filterCategory('Foto')}
          className="Gallery_navbar--section"
        >
          Photos
        </button>
        <button
          onClick={() => filterCategory('Video')}
          className="Gallery_navbar--section"
        >
          Videos
        </button>
        <button
          onClick={() => filterCategory('Album')}
          className="Gallery_navbar--section"
        >
          Album
        </button>
        <button
          onClick={() => filterCategory('Tag')}
          className="Gallery_navbar--section"
        >
          Tags
        </button>
      </nav>
      <div className="Gallery__container_cards">
        {filteredPosts && filteredPosts.length > 0? (
          filteredPosts.map((post) => (
            <div key={post.postId}>
              {
                renderPostContent(post)
              }
            </div>
          ))
        ) : (
          <p>No se encontraron posts de esta categoría para este usuario.</p>
        )}
      </div>
    </section>
  );
};

Gallery.propTypes = {
  userId: PropTypes.number,
};

export default Gallery;

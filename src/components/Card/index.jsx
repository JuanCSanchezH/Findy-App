import "./main.scss";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { getPost } from "../../services/postServices.js";

const Card = ({ userId }) => {
  const [userData, setUserData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(userData.seguidores ? userData.seguidores.length:0);

  const handleProfileClick = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
    if (isFollowing) {
      setFollowersCount(followersCount - 1);
    } else {
      setFollowersCount(followersCount + 1);
    }
  }

  useEffect(() => {
    getPost(userId)
      .then((response) => {
        console.log(response);
        setUserData(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [userId]);

  function getNumberLikes(userData) {
    let likes = 0;
    if (userData.posts) {
      userData.posts.forEach((post) => {
        likes += post.likes;
      });
    }
    return likes;
  }

  return (
    <div className="card__container">
      <nav className="card__nav">
        <div className="card__nav__followers">
          <span>{userData.seguidores ? userData.seguidores.length : 0}M</span>
          <span>Followers</span>
        </div>
        <div className="card__nav__profile">
          <img 
          src={userData.avatar} 
          alt="profile"
          onClick={handleProfileClick}
          />
        </div>
        <div className="card__nav__likes">
          <span>{getNumberLikes(userData)}M</span>
          <span>Likes</span>
        </div>
      </nav>
      <section className="card__information">
        <span className="card__information-name">{userData.nombre}</span>
        <span className="card__information-welcome-message">
          {userData.descripcion}
        </span>
        <span className="card__information-description">
          Follow me and like my post
        </span>
      </section>
      <div className="card__buttons__container">
        <button 
        className="card__buttons"
        onClick={handleFollowClick}>
          {isFollowing ? 'Unfollow' : 'Follow'}
          </button>
        <button className="card__buttons">Messages</button>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal__container">
            <div className="modal__container__header">
              <span className="modal__container__header-name">{userData.nombre}</span>
              <span className="modal__container__header-description">{userData.descripcion}</span>
            </div>
            <div className="modal__container__body">
              <img src={userData.avatar} alt="profile"/>
            </div>
            <div className="modal__container__footer">
              <button onClick={handleProfileClick}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
Card.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default Card;

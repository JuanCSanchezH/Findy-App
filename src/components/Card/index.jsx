import "./main.scss";
const Card = () => {
  return (
    <div className="card__container">
      <nav className="card__nav">
        <div className="card__nav__followers">
          <span>10.7M</span>
          <span>Followers</span>
        </div>
        <div className="card__nav__profile"></div>
        <div className="card__nav__likes">
          <span>108.3M</span>
          <span>Likes</span>
        </div>
      </nav>
      <section className="card__information">
        <span className="card__information-name">Jennie Kim</span>
        <span className="card__information-welcome-message">J. Hello Guys</span>
        <span className="card__information-description">
          Follow me and like my post
        </span>
      </section>
      <div className="card__buttons__container">
        <button className="card__buttons">Follow</button>
        <button className="card__buttons">Messages</button>
      </div>
    </div>
  );
};

export default Card;

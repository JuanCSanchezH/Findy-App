// Autor: Esteban Maya
import './main.scss'
import Gallery from "../../components/Gallery/index.jsx";
import Banner from "../../components/Banner/index.jsx";
import Card from "../../components/Card/index.jsx";
import useSessionStorage from "../../hooks/useStorage.jsx";


const Profile = () => {
  return (
    <div className="profile__container">
      <div className="Banner">
        <Banner userId={1} />
      </div>
      <div className="Card">
        <Card userId={1} />
      </div>
      <div className="Gallery">
        <Gallery userId={1} />
      </div>
    </div>
  );
};

export default Profile;

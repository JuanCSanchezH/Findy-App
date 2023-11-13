// Autor: Esteban Maya
import './main.scss'
import Gallery from "../../components/Gallery/index.jsx";
import Banner from "../../components/Banner/index.jsx";
import Card from "../../components/Card/index.jsx";
import useSessionStorage from "../../hooks/useStorage.jsx";



const Profile = () => {
  const { storagedData } = useSessionStorage('user');
  const userId = storagedData ? storagedData.id : null;
  return (
    <div className="profile__container">
      <div className="Banner">
        <Banner userId={userId} />
      </div>
      <div className="Card">
        <Card userId={userId} />
      </div>
      <div className="Gallery">
        <Gallery userId={userId} />
      </div>
    </div>
  );
};

export default Profile;

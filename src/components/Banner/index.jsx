import { useState, useEffect } from 'react';
import { FaSignal } from 'react-icons/fa6';
import { MdWifi } from 'react-icons/md';
import { CiBatteryFull } from 'react-icons/ci';
import { AiOutlineLeft } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { getPost } from '../../services/postsServices';


import './main.scss';

import PropTypes from 'prop-types';

function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
}

const Banner = ({ userId }) => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [backgroundImage, setBackgroundImage] = useState('');
  // Update the current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);
    getPost(userId)
      .then((response) => {
        console.log(response.posts[2].archivo);
        setBackgroundImage(response.posts[2].archivo);
      })
      .catch((error) => {
        console.error(error);
      });

    return () => clearInterval(interval);
  }, [userId]);

  return (
    <div
      className="banner__container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        objectFit: 'cover',
        objectPosition: 'top',
        backgroundSize: 'cover',
      }}
    >
      <nav className="banner__nav">
        <span>{currentTime}</span>
        <div className="banner__nav-status">
          <div className="banner__nav-status-icon">
            <FaSignal color="black" />
          </div>
          <div className="banner__nav-status-icon">
            <MdWifi color="black" />
          </div>
          <div className="banner__nav-status-icon">
            <CiBatteryFull color="black" />
          </div>
        </div>
      </nav>
      <div className="banner__actions">
        <button className="banner__actions--button">
          <AiOutlineLeft size={20} />
        </button>
        <button className="banner__actions--button">
          <BsThreeDots size={20} />
        </button>
      </div>
    </div>
  );
};

Banner.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default Banner;

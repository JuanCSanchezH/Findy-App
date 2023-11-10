import React from 'react'
import {FaSignal} from 'react-icons/fa6'
import {MdWifi} from 'react-icons/md'
import {CiBatteryFull} from 'react-icons/ci'
import {AiOutlineLeft} from 'react-icons/ai'
import {BsThreeDots} from 'react-icons/bs'

import './main.scss'


function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
}

const Card= () => {
  const [currentTime, setCurrentTime] = React.useState(getCurrentTime());
  // Update the current time every second
  React.useEffect(()=> {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);
    return () => clearInterval(interval);
  }
  , []);
  return (
    <div className="card__container">
      <nav className="card__nav">
        <span>{currentTime}</span>
        <div className="card__nav-status">
          <div className="card__nav-status-icon" ><FaSignal /></div>
          <div className="card__nav-status-icon" ><MdWifi /></div>
          <div className="card__nav-status-icon" ><CiBatteryFull /></div>     
        </div>
      </nav>
      <div className="card__actions">
        <button className="card__actions--button">
          <AiOutlineLeft />
        </button>
        <button className="card__actions--button">
          <BsThreeDots />
        </button>
      </div>
      
    </div>
  )
}

export default Card
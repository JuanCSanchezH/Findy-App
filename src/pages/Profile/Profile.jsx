// Autor: Esteban Maya

import { Link, useParams } from "react-router-dom";
import Gallery from "../../components/Gallery";
import Card from "../../components/Banner";
import { useCallback, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';





const Profile = () => {
  return (
    <>
    <Gallery/>
    <Card/>
    </>
  )
}

export default Profile
import { ChakraProvider } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import {formToJSON} from 'axios';


const Gallery = () =>{
  // const [filteritems, filtersetItems] = useState([]);
  // Gallery.propTypes = {
  //   children: PropTypes.array
  // }
  // useEffect
  return (
    <ChakraProvider>
      <div>Hola mundo</div>
    </ChakraProvider>
  )
}

export default Gallery
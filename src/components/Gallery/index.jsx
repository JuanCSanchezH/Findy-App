import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import {formToJSON} from 'axios';
import { Card, CardHeader, CardBody, CardFooter, Image, HStack , Button} from '@chakra-ui/react'

function ImagesGallery({size, source}){
  return <Image
    boxSize={size}
    objectFit="cover"
    src={source}
    />
}

const Gallery = ({children}, {items}) =>{
  const [filteritems, filtersetItems] = useState([]);
  const [filter, setFilter] = useState('post');

  useEffect(() => {
    switch (filter) {
      case 'photos':
        filtersetItems(items.filter((item) => item.type === 'photos'));        
        break;
      case 'videos':
        filtersetItems(items.filter((item) => item.type === 'videos'));
        break;
      case 'tags':
        filtersetItems(items.filter((item) => item.type === 'tags'));
        break;    
      default:
        filtersetItems(items);
        break;
    }
  },[filter,items]);

  return (
    <ChakraProvider>
      <Card>
        <CardHeader>
          <HStack 
            spacing="24px"
            align="center"
          >
            <Button onClick={() => setFilter('photos')} >
              Photos
            </Button>
            <Button onClick={() => setFilter('videos')} >
              Videos
            </Button>
            <Button onClick={() => setFilter('tags')} >
              Tags
            </Button>
            <Button onClick={() => setFilter('videos')} >
              Videos
            </Button>
          </HStack>
        </CardHeader>
        <CardBody>
          <HStack 
            spacing="24px"
            align="center"
          >
            {filteritems.map((item) => (
              <ImagesGallery
                key={item.id}
                size="150px"
                source={item.source}
              />
            ))}
          </HStack>
        </CardBody>
      </Card>
    </ChakraProvider>
  )
}

Gallery.propTypes = {
  children: PropTypes.array
}

export default Gallery

import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    // console.log(props.images)

    // loop over the array of images, and do smth to each
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    });
    
    // alternate way
    // const imagess = props.images.map(({id, urls.regular, description}) => {
    //     return <img key={id} src={urls.regular} alt={description} />
    // });

    return <div className="image-list">{images}</div>;
};

export default ImageList;
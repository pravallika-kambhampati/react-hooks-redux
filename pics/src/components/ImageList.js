import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';


export default function ImageList(props) {

   const images = props.images.map((img) => {
        return <ImageCard key={img.id} image={img} />
    })

    return (
        <div className="image-list">
            {images}
        </div>
    )
}

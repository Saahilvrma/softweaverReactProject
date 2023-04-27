import React from 'react'
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
const images = [
    {
        original: '/rose.jpg',
        thumbnail: '/rose.jpg',
    },
    {
        original: '/rose.jpg',
        thumbnail: '/rose.jpg',
    },
    {
        original: '/rose.jpg',
        thumbnail: '/rose.jpg',
    }
];

export default function GallerySlider() {
    return (
        <div className="wrapper">
            <ImageGallery showPlayButton={false}  items={images} />
        </div>
    )
}

import React from 'react';
import hotelImage from '../../assets/images/hotel.jpg';

const Gallery = (props) =>{
    if(props.imagesAmount === 3){
        return(
            <div className="hotel_gallery three_images">
                <img src={hotelImage} alt="hotel"/>
                <img src={hotelImage} alt="hotel"/>
                <img src={hotelImage} alt="hotel"/>
            </div>
        )
    }else if(props.imagesAmount === 2){
        return(
            <div className="hotel_gallery two_images">
                <img src={hotelImage} alt="hotel"/>
                <img src={hotelImage} alt="hotel"/>
            </div>
        )
    }else if(props.imagesAmount === 1){
        return(
            <div className="hotel_gallery one_image">
                <img src={hotelImage} alt="hotel"/>
            </div>
        )
    }else{
        return(
            <h1>No images</h1>
        )
    }
}

export default Gallery;
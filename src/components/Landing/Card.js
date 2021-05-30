import React, {useEffect, useState} from 'react'
import {AiTwotoneStar} from 'react-icons/ai';
import {BsFillPersonFill} from 'react-icons/bs';
import {getHotel} from '../../api'

const Card = (props)=>{
    const [hotel, setHotel] = useState("")
    useEffect(async() => {
        var hotel = await getHotel(props.card.id)
        setHotel(hotel.data.results[0])
    }, [])

    //Define icons amount and store them in array
    var adultIcons = []
    for (let i = 0; i < props.card.adultnumber; i++) {
        adultIcons.push(<BsFillPersonFill className="card_person_icon" size="1.2em"/>)  
    }
    var childIcons = []
    for (let i = 0; i < props.card.childnumber; i++) {
        childIcons.push(<BsFillPersonFill className="card_person_icon" size="1.2em"/>)  
    }
    var hotelStars = []
    for (let i = 0; i < hotel.rating; i++) {
        hotelStars.push(<AiTwotoneStar size="1.2em"/>)  
    }

    //return value
    return (<div key={props.card.roomid} className="search_result_card">
                <img src={props.card.image} alt="hotel"/>
                <div className="search_result_textblock">
                    <div className="textblock_sub_part textblock_top_part">
                        <div>
                            <h4>{hotel.hotelname}</h4>
                            <p>{hotel.city}, {hotel.distance}м від центру</p>
                        </div>
                        <div className="star_grade_wrapper">
                            {hotelStars}
                        </div> 
                    </div>
                    <div className="textblock_sub_part textblock_bottom_part">
                        <div>
                            <p>макс. дорослих - {props.card.adultnumber}
                                {adultIcons}
                            </p>
                            <p>макс. дітей - {props.card.childnumber}
                                {childIcons}
                            </p>
                            <p>клас номеру: {props.card.roomtype}</p>
                            <p>{props.card.info}</p>
                            <p>сніданок {props.card.breakfast ? "включений" : "не включений"}</p>
                        </div>   
                        <div className="card_price_block">
                            <h4 className="card_price">UAH {props.card.price} / ніч</h4>
                            <div className="card_button"><h5>Замовити</h5></div>
                        </div> 
                    </div>
                </div>
            </div>)    
}

export default Card
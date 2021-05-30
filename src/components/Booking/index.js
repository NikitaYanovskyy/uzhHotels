import React, {Fragment} from 'react';
import {ImPointDown} from 'react-icons/im';

const Booking = () =>{
    return(
        <Fragment>
            <div className="booking_title_block">
                <h1>Бронювання номера</h1>
            </div>

            <div className="booking_content_wrapper side_offset">
                <div className="booking_general_info">
                    <h4 className="booking_date_range booking_inline_block right_margin">26 березня - 27 березня</h4>
                    <h4 className="booking_rooms_guests_amount booking_inline_block right_margin">1 номер, 3 гостей</h4>
                    <h4 className="booking_room_type booking_inline_block">Тип номера: Люкс</h4>
                    <div className="general_price_wrapper">
                        <h3 className="general_price">Загальна вартість - 2000грн</h3>
                        <p className="booking_details_label">деталі бронювання <ImPointDown/></p>
                    </div>
                </div>
                <form className="booking_form">
                    <div className="form_section">
                        <h1>Ім'я замовника</h1>

                        <div className="booking_flex_inputs_wrapper">
                            <div className="input_wrapper">
                                <label htmlFor="familyName">Прізвище</label>
                                <input type="text" id="familyName" placeholder="Прізвище"/>
                            </div>
                            <div className="input_wrapper side_margin">
                                <label htmlFor="name">Ім'я</label>
                                <input type="text" id="name" placeholder="Ім'я"/>
                            </div>
                            <div className="input_wrapper">
                                <label htmlFor="fatherName">По-батькові</label>
                                <input type="text" id="fatherName" placeholder="По-батькові"/>
                            </div>
                        </div>           
                    </div>
                    <div className="form_section">
                        <h1>Як з вами зв'язатися</h1>

                        <div className="booking_flex_inputs_wrapper">
                            <div className="input_wrapper right_margin">
                                <label htmlFor="email">Пошта</label>
                                <input type="email" id="email" placeholder="ваша пошта"/>
                            </div>
                            <div className="input_wrapper">
                                <label htmlFor="phone">Телефон</label>
                                <input type="tel" id="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="ваш номер телефону"/>
                            </div>
                        </div>
                        
                    </div>
                    <input type="submit" className="submit_btn booking_submit_btn" value="Забронювати"/>
                </form>
            </div>
        </Fragment>
        
    )
}

export default Booking;
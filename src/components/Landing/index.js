import React, {Fragment} from 'react';
import HeaderPhoto from '../shared/HeaderPhoto';
import hotelImage from '../../assets/images/hotel.jpg'
const Landing = () =>{
    return <Fragment>
            <HeaderPhoto />
            <div className="landing_wrapper side_offset">
                <div className="landing_search_card">
                    <h3>Знайти номер</h3>
                </div>
                <div className="landing_search_results">
                    <h3 className="search_result_items_amount">Назва міста, 203 результата</h3>
                    <div className="search_result_card">
                        <img src={hotelImage} alt="hotel"/>
                        <div className="search_result_textblock">
                            <div className="textblock_sub_part textblock_top_part">
                                <div>
                                    <h4>Назва готелю</h4>
                                    <p>Назва міста, 800м від центру</p>
                                </div>
                                <div className="star_grade_wrapper">
                                    <span>Зрк</span>
                                    <span>Зрк</span>
                                    <span>Зрк</span>
                                </div> 
                            </div>
                            <div className="textblock_sub_part textblock_bottom_part">
                                <div>
                                    <p>2-х місний номер<span>:0 </span><span>:0</span></p>
                                    <p>клас номеру: Делюкс</p>
                                    <p>1 велике ліжко на двох</p>
                                    <p>сніданок включений</p>
                                </div>   
                                <div className="card_price_block">
                                    <h4>UAH ціна</h4>
                                    <div className="card_button"><h5>Перевірити наявність місць</h5></div>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="search_result_card">
                        <img src={hotelImage} alt="hotel"/>
                        <div className="search_result_textblock">
                            <div className="textblock_sub_part textblock_top_part">
                                <div>
                                    <h4>Назва готелю</h4>
                                    <p>Назва міста, 800м від центру</p>
                                </div>
                                <div className="star_grade_wrapper">
                                    <span>Зрк</span>
                                    <span>Зрк</span>
                                    <span>Зрк</span>
                                </div> 
                            </div>
                            <div className="textblock_sub_part textblock_bottom_part">
                                <div>
                                    <p>2-х місний номер<span>:0 </span><span>:0</span></p>
                                    <p>клас номеру: Делюкс</p>
                                    <p>1 велике ліжко на двох</p>
                                    <p>сніданок включений</p>
                                </div>   
                                <div className="card_price_block">
                                    <h4>UAH ціна</h4>
                                    <div className="card_button"><h5>Перевірити наявність місць</h5></div>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="search_result_card">
                        <img src={hotelImage} alt="hotel"/>
                        <div className="search_result_textblock">
                            <div className="textblock_sub_part textblock_top_part">
                                <div>
                                    <h4>Назва готелю</h4>
                                    <p>Назва міста, 800м від центру</p>
                                </div>
                                <div className="star_grade_wrapper">
                                    <span>Зрк</span>
                                    <span>Зрк</span>
                                    <span>Зрк</span>
                                </div> 
                            </div>
                            <div className="textblock_sub_part textblock_bottom_part">
                                <div>
                                    <p>2-х місний номер<span>:0 </span><span>:0</span></p>
                                    <p>клас номеру: Делюкс</p>
                                    <p>1 велике ліжко на двох</p>
                                    <p>сніданок включений</p>
                                </div>   
                                <div className="card_price_block">
                                    <h4>UAH ціна</h4>
                                    <div className="card_button"><h5>Перевірити наявність місць</h5></div>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="search_result_card">
                        <img src={hotelImage} alt="hotel"/>
                        <div className="search_result_textblock">
                            <div className="textblock_sub_part textblock_top_part">
                                <div>
                                    <h4>Назва готелю</h4>
                                    <p>Назва міста, 800м від центру</p>
                                </div>
                                <div className="star_grade_wrapper">
                                    <span>Зрк</span>
                                    <span>Зрк</span>
                                    <span>Зрк</span>
                                </div> 
                            </div>
                            <div className="textblock_sub_part textblock_bottom_part">
                                <div>
                                    <p>2-х місний номер<span>:0 </span><span>:0</span></p>
                                    <p>клас номеру: Делюкс</p>
                                    <p>1 велике ліжко на двох</p>
                                    <p>сніданок включений</p>
                                </div>   
                                <div className="card_price_block">
                                    <h4 className="card_price">UAH цінаd</h4>
                                    <h4 className="card_price">UAH ціна</h4>
                                    <div className="card_button"><h5>Перевірити наявність місць</h5></div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
}

export default Landing;
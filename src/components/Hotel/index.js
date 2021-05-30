import React, {Fragment} from 'react';
import HeaderPhoto from '../shared/HeaderPhoto';
import SearchForm from '../shared/SearchForm';
import {BsFillPersonFill} from 'react-icons/bs';
import Gallery from './Gallery';

const Hotel = () =>{
    return(
        <Fragment>
            <HeaderPhoto />
                <div className="landing_wrapper side_offset">
                    <SearchForm />
                    <div className="hotel_info_wrapper">
                        <h1>Голель Філіпс</h1>

                        <Gallery imagesAmount={3}/>

                        <div className="hotel_info">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Blanditiis autem, sapiente minima exercitationem ea error 
                                odio aliquid ad explicabo! Fuga explicabo, possimus quam 
                                repellendus temporibus voluptatem assumenda perspiciatis 
                                vel aperiam veritatis saepe voluptatum aspernatur sint 
                                tempora eos pariatur. Dicta deleniti quaerat necessitatibus, 
                                laudantium accusantium quibusdam. Dolores cumque consequuntur 
                                reiciendis, sequi inventore perspiciatis facere, doloremque 
                                vel architecto excepturi nisi ipsam. Non.</p>
                            <a className="submit_btn" href="#">Забронювати</a>
                        </div>

                        <div className="hotel_offers_wrapper">
                        <h1>Інші пропозиції готелю</h1>
                        <div className="hotel_offers_flex">
                            <div className="hotel_offers_row">
                                <div className="offers_grid_cell">
                                    <h3 className="offers_column_title">Розмір</h3>
                                </div>
                                <div className="offers_grid_cell">
                                    <h3 className="offers_column_title">Тип номера</h3>
                                </div>
                            </div>

                            <div className="hotel_offers_row">
                                <div className="offers_grid_cell">
                                    <p>2 <BsFillPersonFill /></p>
                                </div>
                                <div className="offers_grid_cell">
                                    <p>Стандартний</p>
                                </div>
                            </div>
                            <div className="hotel_offers_row">
                                <div className="offers_grid_cell">
                                    <p>2 <BsFillPersonFill /></p>
                                </div>
                                <div className="offers_grid_cell">
                                    <p>Стандартний</p>
                                </div>
                            </div>
                            <div className="hotel_offers_row">
                                <div className="offers_grid_cell">
                                    <p>2 <BsFillPersonFill /></p>
                                </div>
                                <div className="offers_grid_cell">
                                    <p>Стандартний</p>
                                </div>
                            </div>
                        </div>                         
                    </div>
                    </div>
                </div>
            </Fragment>
    )                     
}

export default Hotel;
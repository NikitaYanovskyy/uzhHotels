import React, {Fragment, useState, useEffect} from 'react';
import HeaderPhoto from '../shared/HeaderPhoto';
import Cards from './Cards.js'
import {useQuery} from '../../hooks'
import {getRooms, getHotel} from '../../api'
import SearchForm from '../shared/SearchForm';


const Landing = () =>{
    const [rooms, setRooms] = useState({data: null, isLoading: true})

    const cityQuery = useQuery('city');
    const arivalQuery = useQuery('date');
    const adultsQuery = useQuery('adult');
    const childrenQuery = useQuery('child');

    useEffect( async()=>{
        if(cityQuery){
            setRooms({data: null, isLoading: true})
            let data = await getRooms({cityQuery, arivalQuery, adultsQuery, childrenQuery})
            setRooms({data: data.data.results, isLoading: false})
            // let hotelData = await getHotel(data.data.results[0].id)
            // console.log(hotelData)
        }
        
    },[cityQuery, arivalQuery, adultsQuery, childrenQuery])
    return <Fragment>
            <HeaderPhoto />
            <div className="landing_wrapper side_offset">
                <SearchForm />
                <div className="landing_search_results">
                    {cityQuery ? "" : <h1 className="search_result_items_amount">Почніть пошук</h1>}
                    {rooms.isLoading && cityQuery ? <div className="loader"></div> : <Cards data={rooms.data}/>}
                </div>
            </div>
        </Fragment>
}

export default Landing;
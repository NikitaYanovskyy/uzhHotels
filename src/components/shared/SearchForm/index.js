import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import {useQuery} from '../../../hooks'

const SearchForm = () =>{
    const history = useHistory();
    const [city, setCity] = useState('');
    const [arivalDate, setArivalDate] = useState('');
    const [adults, setAdults] = useState('');
    const [children, setChildren] = useState('');

    const cityQuery = useQuery('city').toLowerCase();
    const arivalQuery = useQuery('date').toLowerCase();
    const adultsQuery = useQuery('adult').toLowerCase();
    const childrenQuery = useQuery('child').toLowerCase();

    const setValueFromQuery = (value, callback)=>{
        if(value){
            callback(value)
        }
    }
    const onCityChange = (e)=>{
        setCity(e.target.value)
    }
    const onDateChange = (e)=>{
        setArivalDate(e.target.value)
    }
    const onAdultsChange = (e)=>{
        setAdults(e.target.value)
    }
    const onChildrenChange = (e)=>{
        setChildren(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        var url = `/?city=${city}&`;
        if(arivalDate){
            url+= `date=${arivalDate}&`
        }
        if(adults){
            url+= `adult=${adults}&`
        }
        if(children){
            url+= `child=${children}&`
        }
        history.push(url)
    }

    useEffect(() => {
        setValueFromQuery(cityQuery, setCity)
        setValueFromQuery(arivalQuery, setArivalDate)
        setValueFromQuery(adultsQuery, setAdults)
        setValueFromQuery(childrenQuery, setChildren)
    }, [])
    return(
        <div className="landing_search_form_wrapper">
            <h3 className="search_form_title">Знайти номер</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="input_wrapper">
                    <label htmlFor="search_city">Місто <span className="form_required_label">* обов'язкове</span></label>
                    <input onChange={onCityChange} value={city} type="text" id="search_city"/>
                </div>
                <div className="input_wrapper">
                    <label htmlFor="search_city">Дата заїзду</label>
                    <input onChange={onDateChange} value={arivalDate} type="date" min="2021-01-01" max="2022-12-31" id="search_arival"/>
                </div>
                <div className="input_wrapper">
                    <label htmlFor="search_city">Число дорослих</label>
                    <input onChange={onAdultsChange} value={adults} type="number" id="search_adults"/>
                </div>
                <div className="input_wrapper">
                    <label htmlFor="search_city">Число дітей</label>
                    <input onChange={onChildrenChange} value={children} type="number" id="search_children"/>
                </div>
                <input type="submit" value="Шукати"/>
            </form>
        </div>
    )
}

export default SearchForm;
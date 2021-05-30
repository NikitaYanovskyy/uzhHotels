import axios from 'axios'

const config = {
    roomsUrl: 'https://zakarpattia-hotel.herokuapp.com/room?',
    hotelUrl: 'https://zakarpattia-hotel.herokuapp.com/hotel?'
}

export const getRooms = async (obj)=>{
    //building request url
    var url = `${config.roomsUrl}city=${obj.cityQuery}&`;
    if(obj.arivalQuery){
        url+= `date=${obj.arivalQuery}&`
    }
    if(obj.adultsQuery){
        url+= `adult=${obj.adultsQuery}&`
    }
    if(obj.childrenQuery){
        url+= `child=${obj.childrenQuery}&`
    }
    //make a request
    try{
        let response = axios.get(url)
        return response
    }catch(error){
        console.log(`error`)
    }
}

export const getHotel = async (id)=>{
    //make a request
    try{
        let response = axios.get(`${config.hotelUrl}id=${id}`)
        return response
    }catch(error){
        console.log(`error`)
    }
}



 
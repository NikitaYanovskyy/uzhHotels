import React, {Fragment} from 'react'
import Card from './Card'

const Cards = (props)=>{
    if(props.data){
        var matches = <h1 className="search_result_items_amount">Співпадінь - {props.data.length}</h1>
        var cards = props.data.map((card)=>{   
            return <Card card={card}/>   
        })
        return <Fragment>
            {matches}
            {cards}
        </Fragment>
    }else{
        return null
    }
}

export default Cards;
import React from 'react'
import {useParams} from 'react-router-dom'
import ProductData from '../pages/ProductData';

function CardInfo(){

    const {name} = useParams();

  return (
    <div className="container">
        {
            ProductData.filter((card )=> card.name === name).map ((card,index)=>(
                <div key={index} >

                <img src={card.Image} alt="" />
                <h2>{card.name}</h2>
                <h4>{card.price}</h4>

                </div>
            )

            )
        }
    </div>
  )
}

export default CardInfo
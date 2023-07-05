import React from 'react'
import {useParams} from 'react-router-dom'
import Viewdata from '../pages/Viewdata';

function Viewinfro(){

    const {name} = useParams();

  return (
    <div className="container">
        {
            Viewdata.filter((card )=> card.name === name).map ((card,index)=>(
                <div key={index} >

                <img src={card.image} alt="" />
                <h2>{card.name}</h2>
                <h4>{card.price}</h4>

                </div>
            )

            )
        }
    </div>
  )
}

export default Viewinfro;
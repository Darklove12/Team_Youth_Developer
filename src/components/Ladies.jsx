import React from "react"
import {Link} from "react-router-dom"
import Viewdata from "../pages/Viewdata";
// import '../components/Ladies.css'

const Ladies = () => {

return (
  <div>
    <h1 className='hd-heading'>Ladies</h1>
    <div className="grid-container">
      {/* {
        Viewdata.map((view, index)=> {
          return (
            <div key={index} className="card" >
              <img src={view.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{view.name}</h5>
                <p className="card-text">{view.price}</p>
                <Link to={`/card/${view.name}`}>
            <a href="#" className="btn btn-primary">
              Click Me
            </a>
            </Link>
              </div>
            </div>
          )
        })

      } */}

    </div>
  </div>

  )
}

export default Ladies
import React from "react";
import {Link} from "react-router-dom"
import '../components/NewArrivals'
import ProductData from "../pages/ProductData";
import '../components/NewArrivals.css'


function NewArrivals() {
  return (
    <div className="container">
      {ProductData.map((items, index) => (
        <div key={index} className="card">
          <img src={items.Image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{items.name}</h5>
           <Link to={`/card/${items.name}`}>
            <a href="#" className="btn btn-primary">
              Click Me
            </a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewArrivals;



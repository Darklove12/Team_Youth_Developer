import React from "react";
import './Navbar.css'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            
           Neighborhood Market

          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/NewArrivals">
                  NewArrivals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Ladies">
                  Ladies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Men">
                  Men
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Promos">
                  Promos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Giftcard">
                  Giftcard
                </a>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

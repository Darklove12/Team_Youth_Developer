import React from 'react'
import '../components/Promos.css'

function Promos() {
    return (
        <div className='container'>
            <div class="btn-group">
                <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    PROMOS
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">PROMOTIONS for Womens</a></li>
                    <li><a class="dropdown-item" href="#">2 Ladies Sweaters and Joggers for R500</a></li>
                    <li><a class="dropdown-item" href="#">2 ladies Knitwear for R 800</a></li>
                    <li><a class="dropdown-item" href="#">2 Ladies Bodycon Skirts for R650</a></li>
                    <li><a class="dropdown-item" href="#"> 2 Ladies Jeans for R1000</a></li>
                    <li><a class="dropdown-item" href="#">2 ladies Shoes Fashions for R1 800</a></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><a class="dropdown-item" href="#">PROMOTIONS for Mens</a></li>
                    <li><a class="dropdown-item" href="#">2 mens Caps for R 1 000</a></li>
                    <li><a class="dropdown-item" href="#">2 mens Shoes for R2 800</a></li>
                    <li><a class="dropdown-item" href="#">2 mens Jeans for R 1 100</a></li>
                    <li><a class="dropdown-item" href="#">2 mens Bodycon Skirts for R 800</a></li>
                    <li><a class="dropdown-item" href="#">2 mens Sweater and fashions R 1 500</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Promos
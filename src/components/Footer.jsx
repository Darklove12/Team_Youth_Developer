// this does not finish. We will contuine doing Sprint 3

import React from 'react'
import '../Components/Footer.css'

function footer() {
  return (
    <>
    <footer class="site-footer-1">
    <div class="container">
    <div class="row">
    <div class="col-sm-12 col-md-6">
            <h6>Neighborhood Market Info</h6>
            <div class="col-xs-6 col-md-3">
            <ul class="footer-links">
              <li><a href="/home">About us</a></li>
              <li><a href="/NewArrivals">Careers</a></li>
              <li><a href="/Men">Find Store</a></li>
              <li><a href="Ladies">Term of Serivice</a></li>
              <li><a href="/Promos">Refund Policy</a></li>
            
            </ul>
          </div>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Help Help?</h6>
            <ul class="footer-links">
              <li><a href="#">Contact</a></li>
              <li><a href="#">Find YourFit</a></li>
              <li><a href="#">Delivery & Return"</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>

            </ul>
          </div>

        </div>
        </div>
        <hr/>
      

        <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; @2023 Neughbrohooh Market
            <br/>
            <a>Neughbrohooh Market</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            
          </div>
        </div>
      </div>
</footer>

    </>



  )
}

export default footer
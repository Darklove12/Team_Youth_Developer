// this does not finish. We will contuine doing Sprint 3

import React from 'react'
import '../Components/Footer.css'

function footer() {
  return (
    <>
      <footer className="site-footer-1">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6 className='neig'>Neighborhood Market Info</h6>
              <div className="col-xs-6 col-md-3">
                <ul className="footer-links">
                  <li><a href="/home">About us</a></li>
                  <li><a href="/NewArrivals">Careers</a></li>
                  <li><a href="/Men">Find Store</a></li>
                  <li><a href="Ladies">Term of Serivice</a></li>
                  <li><a href="/Promos">Refund Policy</a></li>
                </ul>
              </div>
            </div>

          <div className="col-xs-6 col-md-3">
            <h6 className='help'>Help?</h6>
            <ul className="footer-links">
              <li><a href="/home">Contact</a></li>
              <li><a href="/NewArrivals">Find YourFit</a></li>
              <li><a href="/Men">Delivery & Return"</a></li>
              <li><a href="/Ladies">Terms & Conditions</a></li>
              <li><a href="/Promos">Privacy Policy</a></li>

              </ul>
            </div>

          </div>
        </div>
        <hr />


        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">Copyright &copy; @2023 Neughbrohooh Market
                <br />
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li><a className="facebook" href="https://www.facebook.com"><i className="bi bi-facebook"></i></a></li>
                <li><a className="twitter" href="https://help.twitter.com"><i className="bi bi-twitter"></i></a></li>
                <li><a className="dribbble" href="https://dribbble.com/"><i className="bi bi-dribbble"></i></a></li>
                <li><a className="linkedin" href="https://www.linkedin.com"><i className="bi bi-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

    </>



  )
}

export default footer
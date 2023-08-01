import React from 'react'
import './Giftcard.css'

function Giftcard() {

return (
  <div id="coupon_html" style={{margin: "0",position: "relative" ,top: "0" }}>
<div style={{position: "fixed",left: "15rem", top: "23rem"}}>
<div style={{position: "fixed", top: "9rem", left: "15rem", width: "300px", height: "460px", border: "3px double #7A0700", background: "#FFF"}}>
  <div style={{position: "absolute", top: "2rem", left: "8rem", width: "25px", fontsize: "99px"}}>50%</div>
<div style={{position: "absolute", top: "6.3rem", left: "7.9rem", fontsize: "18px"}}>OFF</div>
<div style={{position: "absolute", top: "10rem",left: "7.6rem", fontsize: "80px", color: "#7A0700"}}>Only!</div>
<div id="cmessage" style={{position: "absolute", top: "15rem", width: "65%" ,textalign: "center", color:"#000", left: "3rem", fontsize: "18px"}}>Your message will go here.</div>
<div className="online" style={{position: "absolute", top: "18rem", width: "100%", background: "#7A0700", fontsize: "18px", height:"5rem", textalign: "center",color: "#FFF", padding:"-3rem"}}>ONLINE CODE: <a href="https://www.moocommerce.co.za/moodle33/local/imoocommerce/index.php%22%3E">ONLINE</a></div>
  <div style={{position: "absolute", top: "430px", margin: "0 auto", width: "89%", fontsize: "14px", left: "1.2rem", fontweight: "600", color: "#000"}}>This coupon expired on: 2023-09-27</div>
  </div>

  <img className="image-gift" src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt=""/>
 
  </div>
</div>
)
}
  

export default Giftcard
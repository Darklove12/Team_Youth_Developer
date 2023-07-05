import React from 'react'
import './Giftcard.css'
function Giftcard() {
  return (
    <div>
        <div id="coupon_html" style={{left: "11rem",margin: "0 auto", width: "720px", height: "400px", position: "relative", display: "block"}}>
  <div className="coupon-2" style={{position: "absolute" ,top: "15px" ,left: "10px" ,width: "320px" ,height: "480px", background:" #FFF"}}>
  <div style={{position: "absolute", top: "10px", left: "10px", width: "300px", height: "460px", border: "3px double #7A0700", background: "#FFF"}}>
    <img src="https://www.moocommerce.co.za/moodle33/local/imoocommerce/pix/coupons/curl1.png" alt=""/>
    <div style={{position: "absolute", top: "15px", left: "8rem", width: "25px", fontsize: "82px", color: "#000"}}>R150</div>
  <div style={{position: "absolute", top: "75px", left: "130px", color: "#000"}}>OFF</div>
  <div style={{position: "absolute", top: "130px", left:"8rem", color: "#7A0700"}}>Only!</div>
  <div id="cmessage" style={{position: "absolute", top: "240px", width: "100%", color:"#000", left: "3.5rem"}}>Your message will go here.</div>
  <div style={{position: "absolute", top: "380px", width: "100%", background: "#7A0700", fontsize: "18px", lineheight: "2", marginleft: "2px",color: "#FFF"}}>ONLINE CODE: <a href="https://www.moocommerce.co.za/moodle33/local/imoocommerce/index.php%22%3E">ONLINE</a></div>
    <div style={{position: "absolute", top: "410px", margin: "15px", width: "100%", fontsize: "14px", fontweight: "600", textalign: "center", color: "#000"}}> This coupon expired on: 2023-09-27 </div>
    </div>
    </div>
</div>
    </div>
  )
}

export default Giftcard
import "../../App.css";
import "./Footer.css";

function Footer() {
  return <>
      <div className="my-container  footer">
        <div className="footer-one">
            <img src="/images/Logo.png" alt="" />
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus
            felis vitae sit est quisque.</h2>
        </div>
        <div className="footer-two">
            <h1>Service</h1>
            <p>Payment & Tax</p>
            <p>Features</p>
            <p>View Booking</p>
            <p>Support</p>
        </div>
        <div className="footer-three">
            <h1>About</h1>
            <p>About us</p>
            <p>News</p>
            <p>Pricing</p>
            <p>New Property</p>
        </div>
        <div className="footer-four">
            <h1>Our Location</h1>
            <p>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
            <div className="footer-icons">
                <img src="/images/facebook.png" alt="" />
                <img src="/images/twitter.png" alt="" />
                <img src="/images/linkedin.png" alt="" />
            </div>
        </div>
    </div>
        <hr />
            <div className="under-footer my-container">
            <p>Copyright 2024 flora. All Rights Reserved</p>
             <div className="right-under-footer">
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
             </div>

        </div>
  
  </>;
}

export default Footer;

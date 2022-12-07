import React from 'react'
import { Link } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";
import "./footer.css"

const Footer = () => {
  return (
    <footer>
        <ScrollToTop
        smooth
        viewBox="0 0 24 24"
        svgPath="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21"
      />
    <ScrollToTop smooth top="20"  color="white" width="25" height="25" />
    <div className="container">
        <div className="inner">
            <div className="box">
                <Link to="/" className="logo">Lora shop</Link>
                <p>LORA online shop is a leading fashion retailer in watches, jewelry, and parfume. Amy shop believes that everyone should be able to wear what they love, and do so at the right price. Our incredible platform allows shoppers to quickly and easily find exactly what they want .</p>
                <ul className="social">
                    <li><Link to="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                    <li><Link to="#"><i className="fa-brands fa-twitter"></i></Link></li>
                    <li><Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                </ul>
            </div>
            <div className="box">
                <h4>Explore Lora.com</h4>
                <ul>
                    <li><Link to="#">Women's Parfume</Link></li>
                    <li><Link to="#">Men's Fragrances</Link></li>
                    <li><Link to="#">Women's Watches</Link></li>
                    <li><Link to="#">Men's Watches</Link></li>
                </ul>
            </div>
            <div className="box">
                <h4>Customer Service</h4>
                <ul>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="#">Why Buy From Us</Link></li>
                    <li><Link to="#">Frequently Asked Questions</Link></li>
                </ul>
            </div>
            <div className="box">
                <h4>Polices</h4>
                <ul>
                    <li><Link to="#">Terms and Conditions</Link></li>
                    <li><Link to="#"> Legal Notes</Link></li>
                    <li><Link to="#">Privacy Policy</Link></li>
                    <li><Link to="#">Sales Conditions</Link></li>
                </ul>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer



import React from "react";
import { Button } from "./Button";
import './Footer.css';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Newsletter to receive latest discount
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time
                </p>
                <div className="input-areas">
                    <form action="">
                        <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                        <Button className="btn" buttonStyle='btn--outline' buttonSize="btn--large">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/sign-up">Testimonials</Link>
                        <Link to="/sign-up">Careers</Link>
                        <Link to="/sign-up">Investors </Link>
                        <Link to="/services">Terms of Services</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/sign-up">Testimonials</Link>
                        <Link to="/sign-up">Careers</Link>
                        <Link to="/sign-up">Investors </Link>
                        <Link to="/services">Terms of Services</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/sign-up">Testimonials</Link>
                        <Link to="/sign-up">Careers</Link>
                        <Link to="/sign-up">Investors </Link>
                        <Link to="/services">Terms of Services</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/sign-up">Testimonials</Link>
                        <Link to="/sign-up">Careers</Link>
                        <Link to="/sign-up">Investors </Link>
                        <Link to="/services">Terms of Services</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">PerfumeShop <i class="fa-solid fa-spray-can-sparkles" /></Link>
                    </div>
                    <small className="website-rights">PerfumeShop &copy; 2024</small>
                    <div className="social-icons">
                        <Link 
                        className="social-icon-link facebook" 
                        to='/' 
                        target="_blank" 
                        aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></Link>
                        <Link 
                        className="social-icon-link facebook" 
                        to='/' 
                        target="_blank" 
                        aria-label="Facebook"><i class="fa-brands fa-youtube"></i></Link>
                        <Link 
                        className="social-icon-link facebook" 
                        to='/' 
                        target="_blank" 
                        aria-label="Facebook"><i class="fa-brands fa-twitter"></i></Link>
                        <Link 
                        className="social-icon-link facebook" 
                        to='/' 
                        target="_blank" 
                        aria-label="Facebook"><i class="fa-brands fa-instagram"></i></Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
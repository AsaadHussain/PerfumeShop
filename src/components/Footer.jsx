
import React from "react";
import { Button } from "./Button";
import './Footer.css';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Newsletter to receive latest discounts
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time
                </p>
                <div className="input-areas">
                    <form action="">
                        <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                        <Button className="btn" path="/sign-up" buttonStyle='btn--outline' buttonSize="btn--large">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <div className="footer-link-_item">
                            <Link to="/sign-up">Vision</Link>
                            <Link to="/sign-up">Mission</Link>
                            <Link to="/sign-up">Careers</Link>
                            <Link to="/sign-up">Investors </Link>
                            <Link to="/services">Terms of Services</Link>
                        </div>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <div className="footer-link-_item">
                            <Link to="/sign-up">Visit Us</Link>
                            <Link to="/sign-up">Whatsapp</Link>
                            <Link to="/sign-up">Email</Link>
                            <Link to="/sign-up">Social Media </Link>
                            <Link to="/services">Subscribe Newsletter</Link>
                        </div>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Products</h2>
                        <div className="footer-link-_item">
                            <Link to="/sign-up">Men</Link>
                            <Link to="/sign-up">Women</Link>
                            <Link to="/sign-up">Gender Neutral</Link>
                            <Link to="/sign-up">Perfumes </Link>
                            <Link to="/services">Ouds</Link>
                        </div>
                    </div>
                    <div className="footer-link-items">
                        <h2>Conditions</h2>
                        <div className="footer-link-_item">
                            <Link to="/sign-up">How it works</Link>
                            <Link to="/sign-up">Testimonials</Link>
                            <Link to="/sign-up">Careers</Link>
                            <Link to="/sign-up">Investors </Link>
                            <Link to="/services">Terms of Services</Link>
                        </div>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">PerfumeShop&nbsp;<i class="fa-solid fa-spray-can-sparkles" /></Link>
                    </div>
                    <small className="website-rights">PerfumeShop &copy; 2024</small>
                    <div className="social-icons">
                        <Link
                            className="social-icon-link facebook"
                            to='/'
                            target="_blank"
                            aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></Link>
                        <Link
                            className="social-icon-link youtube"
                            to='/'
                            target="_blank"
                            aria-label="Youtube"><i class="fa-brands fa-youtube"></i></Link>
                        <Link
                            className="social-icon-link twitter"
                            to='/'
                            target="_blank"
                            aria-label="Twitter"><i class="fa-brands fa-twitter"></i></Link>
                        <Link
                            className="social-icon-link instagram"
                            to='/'
                            target="_blank"
                            aria-label="Instagram"><i class="fa-brands fa-instagram"></i></Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
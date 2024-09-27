import React from "react";
import { Button } from "./Button";
import './HeroSection.css';
import '../App.css';


function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/perfume2.mp4" autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className="hero-btns" buttonStyle="btn--outline" buttonSize="btn--large">GET STARTED</Button>
                <Button className="hero-btns" buttonStyle="btn--primary" buttonSize="btn--large">WATCH TRAILER <i class="fa-solid fa-bag-shopping"></i></Button>
            </div>
        </div>
    );
}

export default HeroSection;
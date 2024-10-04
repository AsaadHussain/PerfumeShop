
import React from "react";
import './HeroSection.css';
import { Button } from "./Button";
import '../App.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="./videos/perfume2.mp4" autoPlay muted loop />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className="btns" buttonSize="btn--large" buttonStyle="btn--primary">Get Started</Button>
                <Button className="btns" buttonSize="btn--large" buttonStyle="btn--outline">Watch Trailer<i class="fa-solid fa-bag-shopping"></i></Button>
            </div>
        </div>
    );
}

export default HeroSection;
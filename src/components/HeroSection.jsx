
import React from "react";
import { Link } from "react-router-dom";
import './HeroSection.css';
import { Button } from "./Button";

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="./videos/perfume1.mp4" autoPlay muted loop />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are ypu waiting for?</p>
            <div className="">
                <Button>Watch Trailer<i class="fa-solid fa-bag-shopping"></i></Button>
                <Button>Watch Trailer<i class="fa-solid fa-bag-shopping"></i></Button>
            </div>
        </div>
    );
}

export default HeroSection;
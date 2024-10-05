
import React from "react";
import './HeroSection.css';
import { Button } from "./Button";
import '../App.css';
import { Link } from "react-router-dom";

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="./videos/perfume3.mp4" autoPlay muted loop />
            <h1>PARFUM d'AMOUR</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className="btns" path="/categories" buttonSize="btn--large" buttonStyle="btn--primary">Autumn Collection</Button>
                <Button className="btns" path="/products" buttonSize="btn--large" buttonStyle="btn--outline">Buy Now&nbsp;<i class="fa-solid fa-bag-shopping"></i></Button>
            </div>
        </div>
    );
}

export default HeroSection;
import React from "react";
import CardItem from "./CardItem";
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out this epic Destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/img1.jpg"
                            text="Explore"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem
                            src="images/img2.jpg"
                            text="Fragrance"
                            label="Like"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/img3.jpg"
                            text="Eau de Parfum"
                            label="Men"
                            path="/services"
                        />
                        <CardItem
                            src="images/img1.jpg"
                            text="Toilet Water"
                            label="Women"
                            path="/services" />
                        <CardItem
                            src="images/img2.jpg"
                            text="Shot smell"
                            label="Women"
                            path="/services" />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
import React from "react";
import CardItem from "./CardItem";
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check Our Categories</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/img3.jpg"
                            text="Get a higher concentration of fragrance oils"
                            label="Eau de Parfum"
                            path="/categories"
                        />
                        <CardItem
                            src="images/toilette.jpg"
                            text="Light concentration for everyday wear"
                            label="Eau de Toilette"
                            path="/categories"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/cologne.jpg"
                            text="A refreshing experience"
                            label="Eau de Cologne"
                            path="/categories"
                        />
                        <CardItem
                            src="images/img1.jpg"
                            text="Vast variety of long lasting smell"
                            label="Parfum"
                            path="/categories" />
                        <CardItem
                            src="images/solid.jpg"
                            text="Skin sensitive scents"
                            label="Solid Perfumes"
                            path="/categories" />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
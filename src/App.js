import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data"
//the function parameter name is used in the curly braces
//data.map pulls the data from the database
export default function App(){
  const cardElements = data.map(function(card){
    return(
      <Card
        //key is for the database for identifying each separate element in the database 
        key={card.id}
        //we can set card paramter equal to card object
        card={card}
        //these variables are referring to the elements from the data 
        /*img={card.coverImg}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        location={card.location}
        title={card.title}
        price={card.price}
        openSpots={card.openSpots}*/
      />
    )
  })
//cards-list is to place the individual elements into a flexbox
  return(
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cardElements}
      </section>
    </div>
  )
}
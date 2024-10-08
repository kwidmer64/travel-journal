import React from "react"
import Navbar from "./components/Navbar.jsx"
import Card from "./components/Card.jsx"
import "./main.css"

import data from "./data.js"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card 
                key={item.startDate}
                item={item}
            />
        )
    })
    
    return (
        <>
            <Navbar />
            <div className="cards-list">
                {cards}
            </div>
        </>
    )
}
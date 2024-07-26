import React from "react"

// <img src={props.item.imageUrl} alt={`A picture of ${props.item.title}`}/>
// <div className="bg-img" style={{backgroundImage: `url(${props.item.imageUrl})`}}></div>

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.item.imageUrl} alt={`A picture of ${props.item.title}`} className="card--img"/>
            <div className="card--content">
                <p className="card--info">
                    <span className="card--location-icon"><i class="fa-solid fa-location-dot"></i></span>
                    <span className="card--location">{props.item.location}</span>
                    <span className="card--map-link"><a href={props.item.googleMapsUrl}>View on Google Maps</a></span>
                </p>
                
                <h2 className="card--title">{props.item.title}</h2>
                <p className="card--date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="card--description">{props.item.description}</p>
            </div>
            <hr/>
        </div>
    )
}
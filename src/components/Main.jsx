import React from "react";


const Main = (props) => {
    return(
        <main className="row">
            <img src={props.img} alt="woman"/>
            <div className="local_stat">
                <i class="fa-solid fa-location-dot"></i>
                <h2>{props.location}</h2>
                <a href="www.google.com">View on Google Maps</a>
            </div>
            <h1>{props.title}</h1>
            <h3>{props.startDate} - {props.endDate}</h3>
            <p>{props.description}</p>

        </main>
    )
}

export default Main
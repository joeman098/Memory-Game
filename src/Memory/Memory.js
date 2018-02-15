import React from "react";
import "./Memory.css";



const Memory = props => (

    <div className="memoryGame" >
        <div className="img-container">
            <img  onClick={props.clickHandler} alt={props.id} id= {props.id} clicked={props.clicked} src={props.image} />
         </div>

    </div>
    )


export default Memory;
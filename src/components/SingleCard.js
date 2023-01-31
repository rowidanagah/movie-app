
import React from "react";
import { Link } from "react-router-dom";

function SingleCard(props) {
    console.log(props)
    return (
        <div className="container  singleCard mt-3 " >
            <div class="card " >
                <div className="bg-image  hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src={props.img} className="CardImg img-fluid" />
                    <a href="#!">
                        <div className="mask"
                        ></div>
                    </a>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleCard;
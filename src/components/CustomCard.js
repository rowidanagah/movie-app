
import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "./CutomButton";

import movieDetails from "../pages/MovieDetails";


class CustomCard extends React.Component {

    constructor(props) {
        super();
        this.state = {
            color: props.color ? props.color : " rgba(128, 128, 128, 0.958)",
            text: props.text ? props.text : "default title text",
            width: "18rem"
        }
    }
    render() {
        return (
            <div className="col col-3 ">
                <div className="card m-1" style={{ width: this.state.width, backgroundColor: this.state.color }}>
                    <img className="card-img-top" src={this.props.img}  alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.desc}</p>
                    </div>
                    <Link 
                    to={`/movieDetails/${this.props.moveto}`}>
                        <CustomButton text="Show Details"/>
                    </Link>
                </div>
            </div>
        )
    }
}


export default CustomCard;
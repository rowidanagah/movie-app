
import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "./CutomButton";

import movieDetails from "../pages/MovieDetails";
import { connect } from "react-redux";

import { FavCountAction } from "../Store/actions/FavCountAction";
import { FavList } from "../Store/actions/FavList";

class CustomCard extends React.Component {

    constructor(props) {

        super();
        console.log(props.count)
        console.log(props.FavList)
        this.state = {
            color: props.color ? props.color : " rgba(128, 128, 128, 0.958)",
            text: props.text ? props.text : "default title text",
            width: "18rem"
        }
    }
    addToFav(id) {
        console.log(this.props.favCount)
        console.log(this.props.favLst)
        const favs = this.props.favLst
        this.props.FavList([...favs, id])
        this.props.FavCountAction(this.props.favCount+1)


        console.log(this.props.favCount)
        console.log(this.props.favLst.length)
    }

    /* toggleFav(params) {

        console.log(this.props)
        FavIconAction(this.props.isFav == "false" ? true : false)
        console.log(this.isFav)
    } */

    toggleIcon() {
        console.log(this.props.isFav)
        this.props.FavIconAction(this.props.isFav == false ? true : false)
    }

    render() {

        return (
            <div className="col-lg-3 col-md-4 col-sm-2 ">
                <div className="card m-1" style={{ width: this.state.width, backgroundColor: this.state.color }}>
                    <img className="card-img-top" src={this.props.img} alt="Card image cap" />

                    <button className="btn btn-outline"
                        onClick={() => this.addToFav()}
                    //</div>onClick={()=> this.props.FavIconAction(this.props.isFav == false ? true : false)}
                    ><i className="fa-solid fa-star"></i>
                    </button>


                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.desc}</p>
                    </div>
                    <Link
                        to={`/movieDetails/${this.props.moveto}`}>
                        <CustomButton text="Show Details" />
                    </Link>
                </div>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    console.log(state.RfavCount.count)
    console.log(state.RfavLst.favLst)
    return {
        favCount: state.RfavCount.count,
        favLst: state.RfavLst.favLst

    }

}

export default connect(mapStateToProps, { FavCountAction, FavList })(CustomCard);

//export default connect(mapStateToProps, { FavIconAction })(CustomCard);

//export default CustomCard;
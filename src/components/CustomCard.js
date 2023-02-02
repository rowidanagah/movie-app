
import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "./CutomButton";
import { filter } from "lodash";
import movieDetails from "../pages/MovieDetails";
import { connect } from "react-redux";
import { FavCountAction } from "../Store/actions/FavCountAction";
import { FavList } from "../Store/actions/FavList";
import { ProgressBar } from "react-bootstrap";

class CustomCard extends React.Component {

    constructor(props) {
        super();
        const _ = require("lodash");
        let filtered_array = _.filter(props.favLst, function (o) {
            return o.id == props.id;
        });

        console.log(filtered_array.length, filtered_array, filtered_array == [])
        this.state = {
            color: props.color ? props.color : " rgba(128, 128, 128, 0.958)",
            text: props.text ? props.text : "default title text",
            width: "18rem",
            isFav: filtered_array.length > 0 ? "solid" : "regular",
            //isFav : props.favLst.filter(ele => ele != this.props.id) != [] ? "regular" : "solid"
        }


        //console.log(props.favLst)
        // console.log(props.favLst.filter((ele) => ele.id == props.id))


        /* console.log(this.state.isFav)
        console.log(filtered_array == [])
        console.log(_.filter(props.favLst, function (o) {
            return o.id !== props.id;
        }) != []) */
    }
    // day 4 
    addToFav(movie) {
        console.log(this.state.isFav)
        console.log(this.props.favCount)
        console.log(this.props.favLst)

        const favs = this.props.favLst
        //this.state.isFav = favs.filter(mv => mv != this.props.id) == [] ? false : true;
        //change color of icon
        console.log(this.state.isFav)
        //this.props.FavList([...favs, movie])
        //tmp = this.state.isFav == "regular"?  [...favs, movie] : favs.filter(mv => mv.id !=  this.props.id)

        this.props.FavList(this.state.isFav == "regular" ? [...favs, movie] : favs.filter(mv => mv.id != this.props.id)
        )

        this.props.FavCountAction(this.state.isFav == "regular" ? this.props.favCount + 1 : this.props.favCount - 1)
        this.state.isFav = this.state.isFav == "regular" ? "solid" : "regular"


        console.log(this.props.favCount)
        console.log(this.state.isFav)
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

                <div class="card">
                    <div class="content">
                        <div class="imgBx">
                            <img className="card-img-top" src={this.props.img} alt="Card image cap" />
                        </div>
                        <div class="contentBx">
                            <h3 className="card-title">{this.props.title}</h3>
                        </div>
                    </div>
                    <ul class="sci">
                        <li>
                            <button className="btn btn-outline"
                                onClick={() => this.addToFav(this.props.movie)}
                            //</div>onClick={()=> this.props.FavIconAction(this.props.isFav == false ? true : false)}
                            ><i className={`iconStar fa-${this.state.isFav} fa-3x fa-star`}> </i>
                            </button>
                        </li>

                    </ul>
                </div>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    // console.log(state.RfavCount.count)
    // console.log(state.RfavLst.favLst)
    return {
        favCount: state.RfavCount.count,
        favLst: state.RfavLst.favLst

    }

}

export default connect(mapStateToProps, { FavCountAction, FavList })(CustomCard);

//export default connect(mapStateToProps, { FavIconAction })(CustomCard);

//export default CustomCard;

/* 

<div className="col-lg-3 col-md-4 col-sm-2 ">
<div className="card m-1" style={{ width: this.state.width, backgroundColor: this.state.color }}>
    <img className="card-img-top" src={this.props.img} alt="Card image cap" />

    <button className="btn btn-outline"
        onClick={() => this.addToFav(this.props.movie)}
    //</div>onClick={()=> this.props.FavIconAction(this.props.isFav == false ? true : false)}
    ><i className={`iconStar fa-${this.state.isFav} fa-2x fa-star`}> </i>
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
</div> */
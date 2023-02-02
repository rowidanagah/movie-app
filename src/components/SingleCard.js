
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FavCountAction } from "../Store/actions/FavCountAction";
import { FavList } from "../Store/actions/FavList";


function SingleCard(props) {

    const favlst = useSelector(state => state.RfavLst.favLst)
    const favcount = useSelector(state => state.RfavCount.count)

    console.log(favlst)
    console.log(favcount)
    const dispatch = useDispatch()

    const removeFav = () => {
        dispatch(FavCountAction(favcount - 1));
        console.log(props.id)
        console.log(favlst.filter(ele => ele.id != props.id))
        const updatedFav = favlst.filter(ele => ele.id != props.id);
        dispatch(FavList(updatedFav));
        console.log(favlst)
        console.log(FavList)
    }

    return (
        <div className="container  singleCard mt-3 " >
            <div class="card " >

                <div className="bg-image  hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src={props.img} className="CardImg img-fluid" />
                    <a href="#!">
                        <div className="mask"
                        ></div>
                        <button className="btn btn-outline"
                            onClick={removeFav}
                        ><i class="fa fa-trash" aria-hidden="true"></i>
                        </button>
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
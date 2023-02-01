
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FavCountAction } from "../Store/actions/FavCountAction";
import { FavList } from "../Store/actions/FavList";


function FavCard(props) {

    const favlst = useSelector(state => state.RfavLst.favLst)
    const favcount = useSelector(state => state.RfavCount.count)
    console.log(favlst)
    console.log(favcount)
    const dispatch = useDispatch()

   
    const removeFav = () => {
        dispatch(FavCountAction(favcount - 1));
        dispatch(FavList(favlst.filter(ele => ele != props.id)));
    }

    
    return (
            <div className="col-lg-3 col-md-4 col-sm-2 ">
                <div className="card m-1" style={{ backgroundColor: props.color }}>
                    <img className="card-img-top" src={props.img} alt="Card image cap" />

                    {/* <button className="btn btn-outline"
                        onClick={() => this.addToFav(props.movie)}
                    //</div>onClick={()=> this.props.FavIconAction(this.props.isFav == false ? true : false)}
                    ><i className="fa-solid fa-star"></i>
                    </button> */}


                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.desc}</p>
                        <button className="btn btn-outline"
                            onClick={removeFav}
                        ><i class="fa fa-trash" aria-hidden="true"></i>
                        </button>
                    </div>

                </div>
            </div>
    )
}

export default FavCard;
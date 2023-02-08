
import React, { useEffect } from "react";
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



    function removeFav() {
        /*  dispatch(FavCountAction(favcount - 1));
         dispatch(FavList(favlst.filter(ele => ele != props.id)));
          */
        dispatch(FavCountAction(favcount - 1));
        console.log(props)
        console.log(favlst.filter(ele => ele.id != props.id))
        const updatedFav = favlst.filter(ele => ele.id != props.id);
        dispatch(FavList(updatedFav));
        console.log(favlst)
        console.log(FavList)

    }


    return (
        <div className="col-lg-3 col-md-4 col-sm-2 ">

            <div class="card">
                <div class="content">
                    <div class="imgBx">
                        <img className="card-img-top" src={props.img} alt="Card image cap" />
                    </div>
                    <div class="contentBx">
                        <h3 className="card-title">{props.title}</h3>
                    </div>
                </div>
                <ul class="sci">
                    <li>
                        <button className="btn btn-outline"
                            onClick={removeFav}
                        ><i class="iconStar fa fa-3x fa-trash" aria-hidden="true"></i>
                        </button>
                    </li>
                </ul>
            </div>
        </div>


    )
}


export default FavCard;

/* 
<div className="col-lg-3 col-md-4 col-sm-2 ">
            <div className="card m-1" style={{ backgroundColor: props.color }}>
                <img className="card-img-top" src={props.img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                    <button className="btn btn-outline"
                        onClick={removeFav}
                    ><i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div> */
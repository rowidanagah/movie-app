
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
        <div className="container m-4 ">
            <div className="row ">
                <div class="col col-6 p-0 d-none d-lg-block">
                    <img src={props.img} className="CardImg  img-fluid"
                        style={{ height: "500px" }} />
                </div>

                <div class="col-6 mt-3">
                    <div class="card-body m-4">
                        <h5 className="card-title display-6">{props.title}</h5>
                    </div>
                    <div class="card-body m-4">
                        <p className="display-6 card-text m-4 overview">
                           avrage rate
                        </p>
                        <span class="card-rating text-center"><i className="iconStar fa fa-2x fa-star"></i> {props.rate}</span>
                    </div>
                    <div class="card-body m-4">
                        <p className="display-6 card-text m-4 overview">
                            {props.overview}
                        </p>
                    </div>
                    <div class="card-body m-4">

                        <p className="card-text">{props.desc}</p>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default SingleCard;

{/* <div class="col-8">
    <div class="card-body">
        <h5 className="card-title cardTitle">{props.title}</h5>
        <p class="card-text">
           
        </p>
        <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
        </p>
    </div>
</div>
 */}
{/* <div class="container mt-2 vh-100 ">
<div class="row  ">
    <div class="col-lg-6 p-0 d-none d-lg-block">
        <img src={props.img} className="CardImg img-fluid"
            style={{ height: "500px" }} />

    </div>
    <div class="col-lg-6 d-flex align-items-center rounded ">
        <div class="card-el-content plr-02">
            <div class="card-heading">
                <span class="heading-text"> Sample Text Content</span>
                <span class="card-rating br-8 text-center"><i class="fa fa-star-o"></i> 4.5</span>
            </div>

            <div class="main-text"> Sample shop cuisine list </div>
        </div>
    </div>


</div>
</div> */}

/* 
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
        <h5 className="card-title cardTitle">{props.title}</h5>
        <p className="card-text">{props.desc}</p>
    </div>
</div>
</div> */
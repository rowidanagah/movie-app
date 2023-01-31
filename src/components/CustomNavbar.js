import { useState } from "react"
import { Link, NavLink, useSearchParams } from "react-router-dom"


function CustomNavbar(probs) {
   console.log(probs.search)

    return (
        <nav className="navbar navbar-expand-lg bg-light ">
            <div className="container-fluid">
                <Link className="navbar-brand" aria-current="page" to="/">Movies</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse float-right" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/fav">Favorites</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">LogIn</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </ul>
                    {/* <form class="d-flex">
                    <Link to={`/`} >
                        <input className="form-control me-2" 
                      //  onChange={(e) => handleTitle(e)}
                        
                        type="search" placeholder="Search" aria-label="Search" />
                    </Link>
                    </form> */}
                </div>
            </div>
        </nav>
    )
}

export default CustomNavbar;
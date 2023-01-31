
function Nav() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-white py-4 fixed-top">
            <div class="container">
                <a class="navbar-brand d-flex justify-content-between align-items-center order-lg-0" href="index.html">
                    <i class="fa fa-camera-movie"></i>
                </a>

                <div class="order-lg-2 nav-btns">
                    <button type="button" class="btn position-relative">
                        <i class="fa-sharp fa-solid fa-bell fa-2x "></i>
                        <span class="position-absolute top-0 start-100 translate-middle badge bg-danger">99</span>

                    </button>
                    <button type="button" class="btn position-relative">
                        <a href="register.html" ><i class="fa fa-registered fa-2x loginIcon"></i></a>

                    </button>
                    <button type="button" class="btn position-relative">
                        <i class="fa-sharp fa-solid fa-comments  fa-2x"></i>
                    </button>
                </div>
                <button class="navbar-toggler border-0" type="button" id="toggleNotification" data-bs-toggle="collapse"
                    data-bs-target="#navMenu">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse order-lg-1 d-md-none" id="navMenu">
                    <ul class="navbar-nav mx-auto text-center">
                        <li class="nav-item px-2 py-2">
                            <a class="nav-link active bg-sm-light bg-dark text-light rounded-pill me-2" aria-current="page"
                                href="#">Login</a>
                        </li>
                        <li class="nav-item px-2 py-2">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Create
                            </a>
                            <ul class="dropdown-menu rounded-start rounded-start-end" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">CReate Idea Pin</a></li>
                                <li><a class="dropdown-item" href="#">CReate Bin</a></li>
                            </ul>
                        </li>
                        <li class="nav-item me-2 col-12">
                            <form class="d-flex">
                                <i class="fa-solid fa-magnifying-glass login__icon ms-3 mt-3"></i>
                                <input class=" me-0 form-control rounded-pill col-12 signin_input" type="search"
                                    placeholder="      Search" aria-label="Search" />

                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}


export default Nav;
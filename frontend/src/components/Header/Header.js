import React from "react";
import {Link} from "react-router-dom";


const header = (props) => {

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={"nav-link"} to={"/books"}>Home</Link>
                            </li>
                            <li>
                                <Link className={"nav-link"} to={"/books"}>Books</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/authors"}>Authors</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/category"}>Categories</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </header>
    )
}
export default header;
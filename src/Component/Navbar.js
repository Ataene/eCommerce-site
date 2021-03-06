import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useSeletor } from "react-redux";
import SignUp from "./SignUp";

function Navbar (){

    // const state = useSeletor((state) => state.handleCart);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info py-3 shadow-sm mb-4 shadow-none">
                <div className="container">
                    <Link class="navbar-brand fw-bold fs-4" to="/">Great<span className="text-danger">Spiration</span></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-bold">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <div className="buttons">
                            <NavLink to="/login" className="btn btn-outline-dark">
                                <i className="fa fa-sign-in me-1"></i>Login</NavLink>
                            <NavLink to="/signup" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-user-plus me-1"></i>Sign up</NavLink>
                            <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-shopping-cart me-1"></i>Cart(0)</NavLink>
                                {/* state.length */}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
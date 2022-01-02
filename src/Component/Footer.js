import { Button } from "bootstrap";
import React from "react";

function Footer() {
    function navigation1 (){
        window.open("https://github.com/Ataene");
    }
    function navigation2 (){
        window.open("https://www.linkedin.com/in/alafonye-emmanuel-k/");
    }
    function navigation3 (){
        window.open("https://www.twitter.com");
    }
    
  return (
        <div className="container fw-bold">
            <footer className="py-3 my-2">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-muted">
                        Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-muted">
                        Products
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-muted">
                        About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-muted">
                        Contact
                        </a>
                    </li>
                </ul>
                <p className="text-center text-muted">&copy; 2022 GreatSpiration, Inc</p>
                <div className="d-flex justify-content-center">
                <a onClick={navigation1} href=""><i class="fa fa-github fa-2x p-2" aria-hidden="true"></i></a>
                <a onClick={navigation2} href=""><i class="fa fa-linkedin fa-2x p-2" aria-hidden="true"></i></a>
                <a onClick={navigation3} href=""><i class="fa fa-twitter fa-2x p-2" aria-hidden="true"></i></a>
                </div>
            </footer>
        </div>
  );
}

export default Footer;

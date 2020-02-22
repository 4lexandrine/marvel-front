import React from "react";
import logo from "../../assets/img/Logo.svg.png";

import { Link, useHistory } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const history = useHistory();

    return (
        <header>
            <div className="wrapper d-flex justify-center sp-between align-center">
                <h1><img src={logo} alt="Marvel logo" onClick={() => {
                    history.push("/characters")
                }} /></h1>
                <nav>
                    <ul className="d-flex sp-between">
                        <Link to="/characters"><li>Personnages</li></Link>
                        <Link to="/comics"><li>Comics</li></Link>
                        <Link to="favorites"><li>Favoris</li></Link>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
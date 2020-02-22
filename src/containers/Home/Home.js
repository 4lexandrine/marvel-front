import React from "react";
import logo from "../../assets/img/Logo.svg.png";
import Helmet from "react-helmet";

const Home = () => {
    return (
        <section className="home-page d-flex align-center">
            <Helmet>
                <title>Accueil</title>
            </Helmet>
            <div className="wrapper">
                <img src={logo} alt="marvel logo" />
            </div>
        </section>
    )

}

export default Home;
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import "./Character.css";

import "../../components/Card/Card.css";
import Helmet from "react-helmet";

const Character = () => {
    const { id } = useParams();
    const location = useLocation();

    const { name, thumbnail } = location.state;
    const [isLoading, setIsLoading] = useState(true);
    const [characterComics, setCharacterComics] = useState();
    const limit = 100;

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`https://marvel-back-api.herokuapp.com/characters/${id}/comics?limit=${limit}`);
            setCharacterComics(response.data.results);
            setIsLoading(false);
        }

        fetchData();
    }, [id])

    return (
        <>
            <Helmet>
                <title>Character's Comics</title>
            </Helmet>
            {isLoading ? "En cours de chargement" :
                <section>
                    < div className="wrapper character-comics d-flex flex-column align-center" >
                        <h2>Comics Dans lequel apparaît {name}</h2>
                        <img src={thumbnail} alt={name} />
                        <div className="wrapper d-flex wrap justify-center bg">
                            {characterComics.map(comic => {
                                return (
                                    <div key={comic.id} className="card d-flex flex-column align-center">
                                        <img src={comic.thumbnail.path + "." + comic.thumbnail.extension} alt="" />
                                        <h2>{comic.title}</h2>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            }
        </>
    );
}

export default Character;
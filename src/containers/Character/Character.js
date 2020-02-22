import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import "./Character.css";

import "../../components/Card/Card.css";

const Character = () => {
    const { id } = useParams();
    const location = useLocation();

    const { character, name, thumbnail } = location.state;
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/characters/character/${id}?`);
            console.log(response);
            setIsLoading(false);
        }

        fetchData();
    }, [id])

    return (
        <>
            {isLoading ? "En cours de chargement" :

                < div className="wrapper character-comics d-flex flex-column align-center" >
                    <h2>Comics Dans lequel apparaît {name}</h2>
                    <img src={thumbnail} alt={name} />
                    <ul >
                        {character.map(item => {
                            return (
                                <li key={item} className="d-flex align-center flex-column"><h3>
                                    {item}
                                </h3></li>
                            )
                        })}
                    </ul>
                </div>
            }
        </>
    );
}

export default Character;
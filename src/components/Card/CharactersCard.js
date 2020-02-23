import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cookies from "js-cookie";

import "./Card.css";

const Card = ({ character }) => {
    const history = useHistory();

    return (
        < div className="card d-flex flex-column align-center" >
            <img src={character.thumbnail.path + "." + character.thumbnail.extension} alt={character.name} onClick={() => {
                history.push(`/characters/${character.id}`, {
                    name: character.name,
                    thumbnail: character.thumbnail.path + "." + character.thumbnail.extension
                })
            }} />

            <h2>{character.name}<span><FontAwesomeIcon icon="star" onClick={() => {
                const cookie = Cookies.set("favorite", character.name, { expires: 7 })
                // console.log(cookie);
            }} /></span></h2>
            <p>{character.description}</p>

        </div>
    );
}

export default Card;
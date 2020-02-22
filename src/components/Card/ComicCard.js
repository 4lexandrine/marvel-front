import React from "react";
import "./Card.css";


const ComicCard = ({ comic }) => {
    return (
        < div className="card d-flex flex-column align-center">
            <img src={comic.thumbnail.path + "." + comic.thumbnail.extension} alt={comic.name} />
            <h2>{comic.title}</h2>
            <p>{comic.description}</p>
        </div>
    );;
}

export default ComicCard;